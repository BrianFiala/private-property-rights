const {h} = require('preact') /** @jsx h */
const polka = require('polka')
const {readFileSync} = require('fs')
const compression = require('compression')()
const bodyParser = require('body-parser')
const {OAuth2Client} = require('google-auth-library')
const bundle = require('../build/ssr-build/ssr-bundle')
const users = require('../secure/users.json')
const keys = require('../secure/keys.json')
const App = bundle.default // can specifically specify entry here for server, so provide default for bundle, and separate for server
const {PORT = 42230} = process.env
const RGXBODY = /<div id="app"[^>]*>.*?(?=<script)/i
const RGXCSS = /(?<=<style id="jss-server-side">).*?(?=<\/style>)/i
const template = readFileSync('build/index.html', 'utf8')
// const adminTemplate = readFileSync('build/admin/index.html', 'utf8')
// const calendarTemplate = readFileSync('build/calendar/index.html', 'utf8')
// const issuesTemplate = readFileSync('build/issues/index.html', 'utf8')
// const newsTemplate = readFileSync('build/news/index.html', 'utf8')
// const takeActionTemplate = readFileSync('build/takeaction/index.html', 'utf8')
// const privacyTemplate = readFileSync('build/privacypolicy/index.html', 'utf8')
// const termsOfServiceTemplate = readFileSync('build/termsofservice/index.html', 'utf8')
const client = new OAuth2Client(keys.client_id, keys.client_secret)

const renderFullPage = (req) => {
  let properTemplate = template
  // switch (req.url) {
  // case '/admin':
  //   properTemplate = adminTemplate
  //   break
  // case '/calendar':
  //   properTemplate = calendarTemplate
  //   break
  // case '/issues':
  //   properTemplate = issuesTemplate
  //   break
  // case '/news':
  //   properTemplate = newsTemplate
  //   break
  // case '/privacypolicy':
  //   properTemplate = privacyTemplate
  //   break
  // case '/takeaction':
  //   properTemplate = takeActionTemplate
  //   break
  // case '/termsofservice':
  //   properTemplate = termsOfServiceTemplate
  //   break
  // default:
  //   properTemplate = template
  // }
  const {html, css} = bundle.createCss(req.url)
  const withBody = properTemplate.replace(RGXBODY, html)
  const withStyle = withBody.replace(RGXCSS, css)
  return withStyle
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
  })

  if (res.statusCode !== 200) return next()

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
    res.setHeader('Content-Type', 'text/html')
    res.end(renderFullPage(req))
  })
  // .post('/update', (req, res) => {
  //   console.log('req.body', req.body)
  //   res.end()
  // })
  .listen(PORT, err => {
    if (err) throw new Error(err)
    console.log(`> Running on localhost:${PORT}`)
  })