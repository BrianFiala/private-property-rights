const polka = require('polka')
const {h} = require('preact')
const {readFileSync} = require('fs')
const compression = require('compression')()
const render = require('preact-render-to-string')
const bundle = require('../build/ssr-build/ssr-bundle')

const App = bundle.default
const {PORT = 3000} = process.env
const RGX = /<div id="app"[^>]*>.*?(?=<script)/i
const template = readFileSync('build/index.html', 'utf8')

// async function authenticate(req, res, next) {
//   let token = req.headers.authorization
//   if (!token) return (res.statusCode=401, res.end('No token!'))
//   //req.user = await Users.find(token)
//   next()
// }

polka()
  .use(compression)
  .get('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Cache-Control', 'no-cache')
    res.end(template.replace(RGX, render(h(App, {url: req.url}))))
  })
  .listen(PORT, err => {
    if (err) throw new Error(err)
    console.log(`> Running on localhost:${PORT}`)
  })