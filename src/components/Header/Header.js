import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip  from '@mui/material/Tooltip';
import {NavLink} from "react-router-dom";
import LoginForm from '../LoginForm/LoginForm'


const routes = [
  {label: "IstIo", url: "dashboard"},
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const Nav = styled('nav')`
  margin: 0 20px;
  ul {
    margin: 0;
  }
  a {
    text-decoration: none;
    user-select: none;
    font-size: .9  rem;
    color: #FFFFFF;
  }
`;


 const Header = (props) => {

  const [showLoginForm, setShowLoginForm] = React.useState(false);

  const showForm = () => {
    setShowLoginForm(showForm => !showForm);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={props.toggleSideBar}
          >
            <MenuIcon />
          </IconButton>
          <Nav
              sx={{ 
              fontWeight: 700,
              letterSpacing:'.2rem', 
              }}
              >
                <ul>
              {routes.map(route =>
                <li key={route.url}><NavLink to={route.url}>{route.label}</NavLink></li>
              )}
            </ul>
          </Nav> 
          <Search aria-label="Search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
            />
          </Search> 
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <Tooltip title="Open Notifications">
            <IconButton
              size="large"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton color="inherit" onClick={showForm } >
                <AccountCircle   />
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </AppBar>
      {showLoginForm && <LoginForm />  }
    </Box>
  );
}
export default Header;