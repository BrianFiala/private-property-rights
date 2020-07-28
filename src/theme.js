import { createMuiTheme } from '@material-ui/core/styles'

const paletteLight = {
  type: 'light',
  primary: {
    main: '#DDA15E',
    contrastText: '#283618'
  },
  secondary: {
    main: '#606C38',
    contrastText: '#283618'
  },
  backgroundColor: '#FEFAE0'
}

const paletteDark = {
  type: 'dark',
  primary: {
    main: '#283618',
    contrastText: '#FEFAE0'
  },
  secondary: {
    main: '#BC6C25',
    contrastText: '#283618'
  },
  backgroundColor: '#283618'
}

const props = {}

const overridesLight = {
  MuiCssBaseline: {
    '@global': {
      body: {
        backgroundColor: paletteLight.primary.main
      }
    }
  }
}

const overridesDark = {
  MuiCssBaseline: {
    '@global': {
      body: {
        backgroundColor: paletteDark.primary.main
      }
    }
  }
}

export const defaultsLight = {
  palette: paletteLight,
  props,
  overrides: overridesLight
}

export const defaultsDark = {
  palette: paletteDark,
  props,
  overrides: overridesDark
}

export const darkTheme = createMuiTheme(defaultsDark)
export const lightTheme = createMuiTheme(defaultsLight)
