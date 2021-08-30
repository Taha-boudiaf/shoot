import { createMuiTheme, colors } from '@material-ui/core'
import typography from './typography'

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.grey[200]
    },
    secondary: {
      main: colors.deepPurple[500]
    },

    text: {
      primary: colors.grey[900],
      secondary: colors.grey[400]
    }
  },
  typography
})

export default theme
