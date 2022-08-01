import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Typography } from "@mui/material";

const Footer = () => {

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, }} 
        elevation={5}>
        <BottomNavigation sx={{backgroundColor:'#212121'}}>
        <Typography variant="h5" sx={{
          width:'300px', 
          heigh:'300px',
          color:'#FFFFFF', 
          fontWeight:'700',
          fontFamily: 'monospace',
          letterSpacing: '.2rem',
          textAlign:'center',

          }}>
        Istio software
        </Typography>
        </BottomNavigation>
      </Paper>
    );
}
export default Footer;