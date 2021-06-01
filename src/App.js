import React from 'react'
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  HOME,
  ABOUT,
  PROJECTS,
  BLOG,
  CONTACT,
  ERROR,
  BLOG1,
  BLOG2,
} from './pages'
import {
  Footer
} from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <HOME />
        </Route>
        <Route path='/about' exact>
          <ABOUT />
        </Route>
        <Route path='/contact' exact>
          <CONTACT />
        </Route>
        <Route path='/projects' exact>
          <PROJECTS />
        </Route>
        <Route path='/blog' exact>
          <BLOG />
        </Route>
        <Route path='/blog/1' exact>
          <BLOG1 />
        </Route>
        <Route path='/blog/2' exact>
          <BLOG2 />
        </Route>
        <Route path="*" >
          <ERROR />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
