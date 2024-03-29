import renderToString from 'preact-render-to-string'
import {ServerStyleSheets} from '@material-ui/core/styles'
import './styles/index.scss'
import App from './App'

export const createCss = (url) => {
  const sheets = new ServerStyleSheets()
  const html = renderToString(
    sheets.collect(<App url={url} />)
  )
  const css = sheets.toString()
  return {html, css}
}

export default App