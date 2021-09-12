import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';
import { ListItemButton } from '@mui/material';

const drawerWidth = 240;

function ResponsiveDrawer({ drawerItems, children, ...props }) {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {drawerItems.map((item, index) => (
          <ListItemButton
            component={NavLink}
            to={item.path}
            key={index}
          >
            <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
            <ListItemText disableTypography primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component={NavLink} to="/" sx={{ color: 'white', textDecoration: 'none' }}>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar
        drawerItems={drawer}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        {...props}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}



export default ResponsiveDrawer;
