import { Switch } from 'react-router-dom'
import NavBar from 'Components/Navbar'
import React from 'react'
import RouteWithSubRoutes from 'RouteWithSubRoutes'

const AppBarOnly = ({ routes }) => {
  return (
    <div>
      <NavBar />
      <Switch>
        {routes && routes.length > 0 && routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default AppBarOnly
