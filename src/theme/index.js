import { createMuiTheme, colors } from '@material-ui/core'
import typography from './typography'

const theme = createMuiTheme({
  palette: {
    background: {
      light: '#eceff1'
    },
    primary: {
      main: colors.deepPurple[500]
    },
    secondary: {
      main: colors.blue[200]
    },
    text: {
      primary: colors.grey[900],
      secondary: colors.grey[400]
    }
  },
  typography
})

export default theme
