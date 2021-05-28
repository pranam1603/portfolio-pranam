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
  ERROR
} from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <HOME />
        </Route>
        <Route path='/about' >
          <ABOUT />
        </Route>
        <Route path='/contact' >
          <CONTACT />
        </Route>
        <Route path='/projects' >
          <PROJECTS />
        </Route>
        <Route path='/blog' >
          <BLOG />
        </Route>
        <Route path='*' >
          <ERROR />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
