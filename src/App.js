import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleImage from './pages/SingleImage'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { Palette } from '@material-ui/icons'
import MobileMenu from './components/MobileMenu'



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222222",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/image/:id">
            <SingleImage />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App
