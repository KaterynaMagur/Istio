import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';





const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
      position="static"
      elevation={4}
      sx={{
      backgroundColor:'#FFFFFF',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex',flexDirection: 'row',}}>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#212121',
              textDecoration: 'none',
              marginLeft:'-10%',
            }}
          >
            Istio
          </Typography>
          
          
          <Box sx={{marginLeft:'10%'}}>
          <Tooltip title="Open menu">
          <IconButton aria-label="Menu">
            <MenuIcon sx={{
              color: '#4527A0',
              backgroundColor: '#EDE7F6',
              borderRadius:'12px',
              padding: '5px',
              width:'30px',
              height:'30px',
              }}
              />
          </IconButton>
          </Tooltip>
          <Menu>...OnClick Menu...</Menu>
          </Box>

          
        <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#212121',
              textDecoration: 'none',
              marginLeft:'5%',
            }}
          >
            100000UAH
          </Typography>
          

          <Box sx={{ marginLeft:'65%'}}>
          <Tooltip title="Notifications">
          <IconButton aria-label="Menu">
            <NotificationsNoneIcon sx={{
              color: '#4527A0',
              justifyContent:'flex-',
              backgroundColor: '#EDE7F6',
              borderRadius:'12px',
              padding: '5px',
              width:'30px',
              height:'30px',
              }}
              
              />
          </IconButton>
          </Tooltip>
          <Menu>...OnClick Menu...</Menu>
          </Box>


          <Box sx={{ flexGrow: 0, justifyContent:'flex-end'}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} >
                <Avatar 
                sx={{ backgroundColor:'yellow', width:'35px',height:'35px'}} 
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
