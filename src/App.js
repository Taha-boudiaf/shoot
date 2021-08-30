import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, ThemeProvider } from '@material-ui/core'
import Navbar from './component/layout/Navbar'
import theme from './theme'
import { HomePage } from './component/pages/AsyncList'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div className="App">
            <Container maxWidth="lg">
              <Switch>
                <Route exact path="/home" component={HomePage} />
              </Switch>
            </Container>
          </div>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
