import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import 'fontsource-roboto/latin-300-normal.css'
import 'fontsource-roboto/latin-400-normal.css'
import 'fontsource-roboto/latin-500-normal.css'
import 'fontsource-roboto/latin-700-normal.css'
import './styles' // TODO: remove this antiquated nonsense
import defaults from './theme'
import {useTheme, createMuiTheme} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import {AdminStateProvider} from './contexts/AdminStateProvider'
import {HeaderStateProvider} from './contexts/HeaderStateProvider'
import {VideosProvider} from './contexts/VideosProvider'
import Loader from './effects/Loader'
import Layout from './components/layout/Layout'

export default function App({url}) {
  const [theme, setTheme] = useState(useTheme())

  function toggleTheme() {
    const newTheme = {...defaults}
    newTheme.palette.type = theme.palette.type === 'light' ? 'dark' : 'light'
    setTheme(createMuiTheme(newTheme))
  }

  return (
    <div id="app">
      <Loader />
      <CssBaseline />
      <VideosProvider>
        <AdminStateProvider>
          <HeaderStateProvider url={url}>
            <Layout toggleTheme={toggleTheme} url={url} />
          </HeaderStateProvider>
        </AdminStateProvider>
      </VideosProvider>
    </div>
  )
}
