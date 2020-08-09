import {h} from 'preact' /** @jsx h */
import {useState, useEffect} from 'preact/hooks'
import 'fontsource-roboto/latin-300-normal.css'
import 'fontsource-roboto/latin-400-normal.css'
import 'fontsource-roboto/latin-500-normal.css'
import 'fontsource-roboto/latin-700-normal.css'
import 'fontsource-roboto/latin-900-normal.css'
import {darkTheme, lightTheme, highContrastTheme} from './theme'
import {ThemeProvider, StylesProvider} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import {AdminStateProvider} from './contexts/AdminStateProvider'
import {HeaderStateProvider} from './contexts/HeaderStateProvider'
import {VideosProvider} from './contexts/VideosProvider'
import Loader from './effects/Loader'
import Layout from './components/layout/Layout'

export default function App({url}) {
  const [theme, setTheme] = useState(darkTheme)
  const [darkMode, setDarkMode] = useState(true)
  const [highContrast, setHighContrast] = useState(false)

  function toggleTheme() {
    const willBeDarkMode = !darkMode
    const newTheme = willBeDarkMode ? darkTheme : lightTheme
    setHighContrast(false)
    setDarkMode(willBeDarkMode)
    setTheme(newTheme)
  }

  function toggleHighContrast() {
    const willBeHighContrast = !highContrast
    setHighContrast(willBeHighContrast)
    if (willBeHighContrast) setTheme(highContrastTheme)
    else setTheme(darkMode ? darkTheme : lightTheme)
  }

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
    ? url : (typeof window !== 'undefined'
      ? window.location.pathname
      : '/')

  // ideas: determine if running in client, hydrate, otherwise render
  return (
    <div id="app">
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Loader />
          <VideosProvider>
            <AdminStateProvider>
              <HeaderStateProvider
                toggleTheme={toggleTheme}
                toggleHighContrast={toggleHighContrast}
                highContrast={highContrast}>
                <Layout highContrast={highContrast} url={currentUrl} />
              </HeaderStateProvider>
            </AdminStateProvider>
          </VideosProvider>
        </ThemeProvider>
      </StylesProvider>
    </div>
  )
}
