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

const authenticate = (req) => {
  let token = req.headers.authorization
  if (!token) return false
  return 'Brian Fiala'
}

polka()
  .use(compression)
  .get('*', (req, res) => {
    if (req.url === '/auth') {
      const username = authenticate(req)
      if (!username) {
        res.statusCode(401)
        res.end()
      }
      res.end(username)
    }
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Cache-Control', 'no-cache')
    res.end(template.replace(RGX, render(h(App, {url: req.url}))))
  })
  .listen(PORT, err => {
    if (err) throw new Error(err)
    console.log(`> Running on localhost:${PORT}`)
  })