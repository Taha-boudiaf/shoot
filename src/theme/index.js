import { createTheme, colors } from '@material-ui/core'
import Typography from './typography'

const theme = createTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: '#f5f5f5'
    },

    text: {
      primary: colors.grey[900],
      secondary: colors.grey[400]
    }
  },
  Typography
})

export default theme
