import { createMuiTheme } from '@material-ui/core/styles'

const paletteLight = {
  type: 'light',
  primary: {
    main: 'rgb(48, 128, 184)',
    contrastText: '#111'
  },
  secondary: {
    main: 'rgb(69, 185, 195)',
    contrastText: '#111'
  },
  backgroundColor: 'rgb(48, 128, 184)'
}

const paletteDark = {
  type: 'dark',
  primary: {
    main: 'rgb(48, 128, 184)',
    contrastText: '#FFF'
  },
  secondary: {
    main: 'rgb(69, 185, 195)',
    contrastText: '#FFF'
  },
  backgroundColor: 'rgb(48, 128, 184)'
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
