import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// ~ IMPORT COMPONENTS
import Scanner from "Pages/Scanner";
import Login from 'Pages/Auth/Login';
import NavBar from 'Components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/scanner" component={Scanner} />
          <Redirect path="/" to="login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
