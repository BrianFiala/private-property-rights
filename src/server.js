const path = require('path')
const polka = require('polka')
const {writeFileSync} = require('fs')
const compression = require('compression')()
const bodyParser = require('body-parser')
const formParser = require('multer')()
const {OAuth2Client} = require('google-auth-library')
const users = require('../secure/users.json')
const admins = require('../secure/admins.json')
const keys = require('../secure/keys.json')
const {PORT = 42230} = process.env
const client = new OAuth2Client(keys.client_id, keys.client_secret)

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
  if (!admins[res.locals.googleId]) {
    res.statusCode = 403
    return next()
  }
  res.locals.userProfile = admins[res.locals.googleId]
  return next()
}

const logging = (req, res, next) => {
  console.log(`~> Received ${req.method} for ${req.url}`)
  return next()
}

polka()
  .use(logging)
  .use(googleAuthentication)
  .use(authorization)
  .use(compression)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(formParser.array())
  .get('/auth', (req, res) => {
    if (res.statusCode !== 200) res.end()
    res.end(JSON.stringify(res.locals.userProfile))
  })
  // .post('/subscribe', (req, res) => {
  //   console.log('req.body', req.body)
  //   res.end()
  // })
  .post('/subscribe', (req, res) => {
    console.table(req.body)
    const email = req.body?.email
    if (typeof email === 'string' && email.length) {
      console.log('email', email)
      users[email] = req.body
      console.log(JSON.stringify(users))
      writeFileSync(path.join(__dirname, '../secure/users.json'), JSON.stringify(users, null, 2), (err) => {
        if (err) {
          res.statusCode = 504
          console.error('ERROR: failed to write user to filesystem. req.body:', req.body)
        } else {
          res.statusCode = 204
        }
      })
    } else {
      res.statusCode = 400
    }
    res.end()
  })
  .listen(PORT, err => {
    if (err) throw new Error(err)
    console.log(`> Running on localhost:${PORT}`)
  })