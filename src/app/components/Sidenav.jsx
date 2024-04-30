"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';
import { Dashboard, ExpandLess, ExpandMore } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

function Sidenav(props) {
  const { window } = props;
  const { children } = props;
const router=useRouter()
const pathname=usePathname()

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleCollapse = () => {
    
      setIsCollapse(!isCollapse);
     
  };

  const drawer = (
    <div>
      <Toolbar>
        <Image src={"/vercel.svg"} height={45} width={45} alt='logo' className='ml-2 mr-2' />
      <Typography variant="h6" noWrap component="div">
         Lybley CRM
          </Typography>
      </Toolbar>
      <Divider />
      <List>
        {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding
          onClick={()=>{router.push("/" +text.toLocaleLowerCase())}}
          className={pathname.startsWith("/" +text.toLocaleLowerCase())? "bg-[#f1f5f9] text-sky-600":"text-slate-700"}
          >
            <ListItemButton>
              <ListItemIcon  className={pathname.startsWith("/" +text.toLocaleLowerCase())? "bg-[#f1f5f9] text-sky-600":"text-slate-700"}>
                {index   === 0 && <Dashboard /> }
                {index   === 1 && <InboxIcon /> }
                {index   === 2 && <InboxIcon /> }
                {index   === 3 && <InboxIcon /> }
                {index   === 4 && <InboxIcon /> }
               
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
        
          <ListItem   disablePadding onClick={handleCollapse}>
            <ListItemButton>
              <ListItemIcon>
                 <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Support"} />
              {isCollapse ? <ExpandLess />  : <ExpandMore />}
            </ListItemButton>
          </ListItem>
        
      <Divider />
      <Collapse in={isCollapse} timeout={"auto"} unmountOnExit >
      <List className='ml-4'>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Collapse>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor:"#ffffff",
          color:"#2F2F2F"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <main>{children}</main>
      </Box>
    </Box>
  );
}

Sidenav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
  children:PropTypes.array,
};

export default Sidenav;
