import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, ThemeProvider } from '@material-ui/core'
import axios from 'axios'

import Navbar from './component/layout/Navbar'
import theme from './theme'
import { HomePage, AboutPage, NotFoundPage } from './component/pages/AsyncList'
import ShootState from './context/shoot/ShootState'

import './App.css'

function App() {
  const searchPhoto = async () => {
    const res = await axios.get({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      data: {
        id: 1,
        userId: 1,
        title: 'A new title',
        body: 'Update this post'
      }
    })
    console.log(res.data)
  }

  return (
    <ShootState>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Container maxWidth="lg" bgcolor="primary.main">
            <div className="App">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </Container>
        </Router>
      </ThemeProvider>
    </ShootState>
  )
}

export default App
