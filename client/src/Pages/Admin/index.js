import React from 'react'
import { Switch } from 'react-router-dom'
import RouteWithSubRoutes from 'RouteWithSubRoutes'
import Dashboard from 'Layout/Dashboard'
import { Dashboard as DashboardIcon, History } from '@mui/icons-material'

const Admin = ({ routes, ...props }) => {

  const drawerItems = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: DashboardIcon
    },
    {
      title: 'Preivous Entries',
      path: '/admin/entries',
      icon: History
    }
  ]

  return (
    <>
      <Dashboard drawerItems={drawerItems} {...props}>
        <Switch>
          {routes && routes.length > 0 && routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Dashboard>
    </>
  )
}

export default Admin
