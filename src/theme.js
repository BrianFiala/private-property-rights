import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  type: 'light',
  primary: {
    main: '#615656',
    contrastText: '#EEE'
  },
  secondary: {
    main: 'rgb(148, 43, 44)'
  },
  backgroundColor: '#DDD'
}

const props = {}

const overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        backgroundColor: palette.primary.main
      }
    }
  }
}

export const defaults = {
  palette,
  props,
  overrides
}

export default createMuiTheme(defaults)