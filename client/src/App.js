import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routes from "Routes";
import RouteWithSubRoutes from 'RouteWithSubRoutes';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
