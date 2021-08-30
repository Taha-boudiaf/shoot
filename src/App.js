import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import Navbar from './component/layout/Navbar'
import theme from './theme'
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div className="App">
            <Switch></Switch>
          </div>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
