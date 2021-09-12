// ~IMPORT LAYOUT
import AppBarOnly from "Layout/AppBarOnly";

// ~IMPORT PAGES 
import Login from "Pages/Auth/Login";
import Register from "Pages/Auth/Register";
import Home from "Pages/Home";
import Scanner from "Pages/Scanner";
import Notfound from "Pages/Notfound";
import Admin from "Pages/Admin";
import AdminDashboard from "Pages/Admin/Dashboard";
import PreviousEntries from "Pages/Admin/PreviousEntries";

const routes = [
  {
    path: '/scanner',
    component: Scanner
  },
  {
    path: '/admin',
    component: Admin,
    routes: [
      {
        path: '/admin',
        component: AdminDashboard,
        exact: true
      },
      {
        path: '/admin/entries',
        component: PreviousEntries,
        exact: true
      },
    ]
  },
  {
    path: '/',
    component: AppBarOnly,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/login',
        component: Login,
        exact: true
      },
      {
        path: '/register',
        component: Register,
        exact: true,
      },
      {
        path: "*",
        component: Notfound
      }
    ]
  },

]

export default routes;