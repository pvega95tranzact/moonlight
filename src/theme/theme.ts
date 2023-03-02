import { blue, pink, green, amber } from '@mui/material/colors'
import { createTheme, Theme } from '@mui/material/styles'

import { TranzactThemeMuiComponents } from '@platform/react-components'
export const ThemeModes = {
    Light: 'light',
    Dark: 'dark'
  }

const commonPalette = {
  primary: {
    main: blue[600]
  },
  secondary: {
    main: pink[600]
  },
  success: {
    main: green[600]
  },
  warning: {
    main: amber[700]
  }
}

const palettes = {
  [ThemeModes.Light]: {
    appNavBar: {
      background: '#FFF',
      onHoverLinkBackground: 'rgba(0,0,0,0.1)'
    },
    logo: {
      shadow: '#b3e5fc',
      store: blue[600]
    },
    dataTable: {
      headerBackground: 'rgba(0, 0, 0, 0.02)'
    },
    lowestBackground: '#f3f3f3',
    dragDrop: {
      droppableBackGround: '#e3e3e3',
      selectedItem: '#fcfcfc'
    },
    mainHeader: {
      background: '#FFF',
      color: '#000',
      onHoverLinkBackground: 'rgba(0,0,0,0.1)'
    },
    body: {
      backgroundColor: '#fafafa'
    },
    muiPaperRoot: {
      backgroundColor: '#fff'
    },
    sideBar: {
      backgroundColor: '#16212F',
      backgroundLinkActive: '#8796ec',
      colorUserRole: '#9ea3c7',
      colorDivider: '#3C4D69',
      backgroundUserInitials: '#539c69'
    }
  },
  [ThemeModes.Dark]: {
    appNavBar: {
      background: '#252526',
      onHoverLinkBackground: 'rgba(255, 255, 255, 0.1)'
    },
    logo: {
      shadow: '#3d4f56',
      store: blue[400]
    },
    dataTable: {
      headerBackground: 'rgba(0,0,0,.1)'
    },
    lowestBackground: '#383838',
    dragDrop: {
      droppableBackGround: '#2b2b2b',
      selectedItem: '#4a4a4a'
    },
    mainHeader: {
      color: '#fff',
      background: '#252526',
      onHoverLinkBackground: 'rgba(255, 255, 255, 0.1)'
    },
    body: {
      backgroundColor: '#303030'
    },
    muiPaperRoot: {
      backgroundColor: '#424242'
    },
    sideBar: {
      backgroundColor: '#16212F',
      backgroundLinkActive: '#8796ec',
      colorUserRole: '#9ea3c7',
      colorDivider: '#3C4D69',
      backgroundUserInitials: '#539c69'
    }
  }
}

const theme = (mode = ThemeModes.Light): Theme =>
  createTheme({
    palette: {
      mode,
      ...commonPalette
    },
    ...palettes[mode],
    typography: {
      fontFamily: '"Open Sans", "Roboto","Helvetica","Arial",sans-serif'
    },
    components: {
      /* Override all available components from theme of Tranzact */
      ...TranzactThemeMuiComponents,
      /* Components from theme of Tranzact can be overrided separately */
      // MuiAccordionSummary: TranzactThemeMuiComponents.MuiAccordionSummary,
      // MuiAutocomplete: TranzactThemeMuiComponents.MuiAutocomplete,
      // MuiButton: TranzactThemeMuiComponents.MuiButton,
      // MuiButtonBase: TranzactThemeMuiComponents.MuiButtonBase,
      // MuiCheckbox: TranzactThemeMuiComponents.MuiCheckbox,
      // MuiFormControl: TranzactThemeMuiComponents.MuiFormControl,
      // MuiInputAdornment: TranzactThemeMuiComponents.MuiInputAdornment,
      // MuiInputBase: TranzactThemeMuiComponents.MuiInputBase,
      // MuiModal: TranzactThemeMuiComponents.MuiModal,
      // MuiOutlinedInput: TranzactThemeMuiComponents.MuiOutlinedInput,
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'unset',
            backgroundColor: palettes[mode].muiPaperRoot.backgroundColor,
            ...TranzactThemeMuiComponents.MuiPaper.styleOverrides.root
          }
        }
      },
      MuiTypography: TranzactThemeMuiComponents.MuiTypography,
      MuiCssBaseline: {
        styleOverrides: {
          '.Mui-error + p': {
            color: '#f44336'
          },
          '.MuiAccordionDetails-root': {
            display: 'flex'
          },
          '.MuiTableHead-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          },
          '.Mui-expanded': {
            marginBottom: '0 !important'
          },
          '.MuiListSubheader-root': {
            backgroundColor: `${palettes[mode].muiPaperRoot.backgroundColor} !important`
          },
          '.MuiTableRow-root > div': {
            // ApplicationInsights withAItracking hoc workarround
            display: 'contents'
          },
          body: {
            backgroundColor: palettes[mode].body.backgroundColor
          }
        }
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)

export default theme
