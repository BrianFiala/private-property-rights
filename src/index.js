import {h, hydrate} from 'preact' /** @jsx h */
import renderToString from 'preact-render-to-string'
import {useState, useEffect} from 'preact/hooks'
import 'fontsource-roboto/latin-300-normal.css'
import 'fontsource-roboto/latin-400-normal.css'
import 'fontsource-roboto/latin-500-normal.css'
import 'fontsource-roboto/latin-700-normal.css'
import './styles' // TODO: remove this antiquated nonsense
import defaults from './theme'
import {createMuiTheme, ThemeProvider, ServerStyleSheets} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import {AdminStateProvider} from './contexts/AdminStateProvider'
import {HeaderStateProvider} from './contexts/HeaderStateProvider'
import {VideosProvider} from './contexts/VideosProvider'
import Loader from './effects/Loader'
import Layout from './components/layout/Layout'

export const createCss = (url) => {
  const sheets = new ServerStyleSheets()
  const html = renderToString(
    sheets.collect(<App url={url} />)
  )
  const css = sheets.toString()
  return {html, css}
}

const initialTheme = createMuiTheme(defaults)

export default function App({url}) {
  const [theme, setTheme] = useState(initialTheme)
  useEffect(() => {
    // maybe check for window is unneeded
    if (typeof window !== 'undefined') {
      const jssStyles = document.getElementById('jss-server-side')
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles)
      }
    }
  }, [])

  // maybe this is unneeded
  const currentUrl = url
    ? url
    : (typeof window !== 'undefined'
      ? window.location.pathname
      : '/')

  function toggleTheme() {
    const newTheme = {...defaults}
    newTheme.palette.type = theme.palette.type === 'light' ? 'dark' : 'light'
    setTheme(createMuiTheme(newTheme))
  }

  // ideas: determine if running in client, hydrate, otherwise render
  return (
    <div id="app">
      <Loader />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <VideosProvider>
          <AdminStateProvider>
            <HeaderStateProvider url={currentUrl}>
              <Layout toggleTheme={toggleTheme} url={currentUrl} />
            </HeaderStateProvider>
          </AdminStateProvider>
        </VideosProvider>
      </ThemeProvider>
    </div>
  )
}
