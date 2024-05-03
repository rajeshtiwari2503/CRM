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
import { AccountBalance, AccountCircle, Analytics, BrandingWatermark, Chat, Dashboard, ExpandLess, ExpandMore, Person,  Report, Settings, Support, SupportAgent, UsbRounded, VerifiedUserRounded } from '@mui/icons-material';
import Image from 'next/image'; 
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

function Sidenav(props) {
  const { window } = props;
  const { children } = props;
  const router = useRouter()
  const pathname = usePathname()

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
  const text1 = "s"
  const drawer = (
    <div>
      <Toolbar>
        <Image src={"/logo.png"} height={40} width={60} alt='logo' className='ml-2    rounded-lg' />

      </Toolbar>
      <Divider />
      <List>
        {['Dashboard', 'Analytics', 'Brand', 'User', 'Product', 'Complaints', 'Accounts', 'Reports', 'Settings', 'Chat'].map((text, index) => (
          <ListItem key={text} disablePadding
            onClick={() => { router.push("/" + text.toLocaleLowerCase()) }}
            className={pathname.startsWith("/" + text.toLocaleLowerCase()) ? "bg-[#f1f5f9] text-sky-600" : "text-slate-700"}
          >
            <ListItemButton>
              <ListItemIcon className={pathname.startsWith("/" + text.toLocaleLowerCase()) ? "bg-[#f1f5f9]  text-sky-600" : "text-slate-700"}>
                {index === 0 && <Dashboard />}
                {index === 1 && <Analytics />}
                {index === 2 && <BrandingWatermark />}
                {index === 3 && <AccountCircle />}
                {index === 4 && <Person />}
                {index === 5 && <Person />}
                {index === 6 && <AccountBalance />}
                {index === 7 && <Report />}
                {index === 8 && <Settings />}
                {index === 9 && <Chat />}



              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>


      <ListItem disablePadding onClick={handleCollapse} className={pathname.startsWith("/" + text1.toLocaleLowerCase()) ? "bg-[#f1f5f9] text-sky-600" : "text-slate-700"}>
        <ListItemButton>
          <ListItemIcon className={pathname.startsWith("/" + text1.toLocaleLowerCase()) ? "bg-[#f1f5f9] text-sky-600" : "text-slate-700"}>
            <Support />
          </ListItemIcon>
          <ListItemText primary={"Support"} />
          {isCollapse ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Divider />
      <Collapse in={isCollapse} timeout={"auto"} unmountOnExit >
        <List className='ml-4'>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <SupportAgent /> : <SupportAgent />}
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
          bgcolor: "#ffffff",
          color: "#2F2F2F"
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
          <div className='w-full flex justify-between'>
            <div  className='font-bold text-2xl'  >
              Dashboard
            </div>
            <div className='text-red-400 font-semibold cursor-pointer rounded-md'>
              Logout
            <ExitToAppIcon  className='ml-2' />
           
            </div>
          </div>
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
  children: PropTypes.array,
};

export default Sidenav;
