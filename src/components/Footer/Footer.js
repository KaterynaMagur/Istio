import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BottomNavigation from "@mui/material/BottomNavigation";
import { Typography } from "@mui/material";

const Footer = () => {

    return (
      <AppBar 
      elevation={4}
      sx={{ position: 'static', bottom: 0, left: 0, right: 0, }}>
      <Toolbar>
      <BottomNavigation sx={{ flexGrow: 1, backgroundColor:'#5E35B1' }}>
        <Typography
          variant="h5" 
          sx={{
            fontWeight:'700',
            fontFamily: 'monospace',
            letterSpacing: '.2rem',
            textAlign:'center',
            }}
            >
          IstIo SoftWare
        </Typography>
        <img src='IstioLogo.png' alt=''></img>
      </BottomNavigation>
      </Toolbar>
    </AppBar>
    );
}
export default Footer;