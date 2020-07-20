import {h, hydrate} from 'preact'
import {useEffect} from 'preact/hooks'
import {ThemeProvider} from '@material-ui/core/styles'
import App from './App'
import theme from './theme'

export default function Main({url}) {
  const currentUrl = url ? url : (typeof window !== 'undefined' ? window.location.pathname : '/')
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <App url={currentUrl} />
    </ThemeProvider>
  )
}

// if (typeof window !== 'undefined') hydrate(<Main />, document.getElementById('app'))