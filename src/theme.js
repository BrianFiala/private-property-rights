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
  backgroundColor: 'rgb(48, 128, 184)',
  background: {
    paper: '#EEE'
  }
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
  backgroundColor: 'rgb(48, 128, 184)',
  background: {
    paper: '#333'
  }
}

const paletteHighContrast = {
  type: 'light',
  primary: {
    main: '#2b499a',
    contrastText: '#000'
  },
  secondary: {
    main: '#2b499a',
    contrastText: '#000'
  },
  backgroundColor: '#fffaf0',
  background: {
    paper: '#FFF'
  }
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

const overridesHighContrast = {
  MuiCssBaseline: {
    '@global': {
      body: {
        backgroundColor: paletteHighContrast.primary.main
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

export const defaultsHighContrast = {
  palette: paletteHighContrast,
  props,
  overrides: overridesHighContrast
}

export const darkTheme = createMuiTheme(defaultsDark)
export const lightTheme = createMuiTheme(defaultsLight)
export const highContrastTheme = createMuiTheme(defaultsHighContrast)
