const {h} = require('preact')
const polka = require('polka')
const {readFileSync} = require('fs')
const compression = require('compression')()
const render = require('preact-render-to-string')
const bodyParser = require('body-parser')
const {OAuth2Client} = require('google-auth-library')
const bundle = require('../build/ssr-build/ssr-bundle')
const {ServerStyleSheets, ThemeProvider} = require('@material-ui/core/styles')
const theme = require('./theme')
const users = require('../secure/users.json')
const keys = require('../secure/keys.json')

const App = bundle.default
const {PORT = 42230} = process.env
const RGXBODY = /<div id="app"[^>]*>.*?(?=<script)/i
const RGXCSS = /(?<=<style id="jss-server-side">).*?(?=<\/style>)/i
const template = readFileSync('build/index.html', 'utf8')
const client = new OAuth2Client(keys.client_id, keys.client_secret)

const renderFullPage = (req) => {
  const sheets = new ServerStyleSheets()
  const withBody = template.replace(RGXBODY, render(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <App url={req.url} />
      </ThemeProvider>
    )
  ))
  return withBody.replace(RGXCSS, sheets.toString())
}

const googleAuthentication = async (req, res, next) => {
  if (!['/auth', '/update'].includes(req.url)) return next()
  const authToken = req.headers.authorization
  if (!authToken) {
    res.statusCode = 401
    return next()
  }
  const data = await client.verifyIdToken({
    idToken: authToken,
    audience: keys.CLIENT_ID
  }).catch(err => {
    console.log(`\ngoogle auth error for token:${authToken}`, err)
    res.statusCode = 401
    return next()
  })
  const payload = data.getPayload()
  res.locals = {
    googleId: payload.sub
  }
  console.log(`\ngoogle id: ${res.locals.googleId} for username: ${payload.name} for email: ${payload.email}`)
  return next()
}

const authorization = (req, res, next) => {
  console.log(res.statusCode)
  if (req.url !== '/auth') return next()
  if (res.statusCode !== 200 || !res.locals || !res.locals.googleId) return next()
  if (!users[res.locals.googleId]) {
    res.statusCode = 403
    return next()
  }
  res.locals.userProfile = users[res.locals.googleId]
  return next()
}

const logging = (req, res, next) => {
  console.log(`~> Received ${req.method} on ${req.url}`)
  return next()
}

polka()
  .use(logging)
  .use(googleAuthentication)
  .use(authorization)
  .use(compression)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .get('/auth', (req, res) => {
    if (res.statusCode !== 200) res.end()
    res.end(JSON.stringify(res.locals.userProfile))
  })
  .get('*', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache')
    res.end(renderFullPage(req))
  })
  .post('/update', (req, res) => {
    console.log('req.body', req.body)
    res.end()
  })
  .listen(PORT, err => {
    if (err) throw new Error(err)
    console.log(`> Running on localhost:${PORT}`)
  })