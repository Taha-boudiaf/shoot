import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, ThemeProvider } from '@material-ui/core'

import Navbar from './component/layout/Navbar'
import theme from './theme'
import {
  HomePage,
  AboutPage,
  NotFoundPage,
  FooterPage
} from './component/pages/AsyncList'
import ShootState from './context/shoot/ShootState'
import ScrollToTop from './component/layout/ScrollToTop'

import './App.css'

function App() {
  return (
    <ShootState>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Container bgcolor="primary.main" style={{ minHeight: '60vh' }}>
            <div className="App">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </Container>
          <ScrollToTop />
          <FooterPage />
        </Router>
      </ThemeProvider>
    </ShootState>
  )
}

export default App
