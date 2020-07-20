import {createMuiTheme} from '@material-ui/core/styles'
import {blueGrey, amber} from '@material-ui/core/colors'

export const defaults = {
  palette: {
    type: 'dark',
    primary: blueGrey,
    secondary: amber
  }
}

export default createMuiTheme(defaults)