import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import "./style.css";


const CardMonth = () => {
   return (
      <Grid
         item xs={4}>

         <Paper sx={{ borderRadius: "20px", backgroundColor: "#aedbf0" }} elevation={20}>
            <Box paddingX={2}>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between"
                  }}
               >
                  <Typography sx={{ paddingTop: "5px" }} variant='h4' component="h4">Січень</Typography>
                  <Typography sx={{ display: "flex", paddingTop: "10px" }}><div className='text'>Бюджет:</div><span>100000</span></Typography>
               </Box>
               <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{
                     display: "flex",
                     paddingTop: "5px"
                  }}>
                     <div className="text">Обов'язкові витрати:</div><span>20000</span>
                  </Typography>
                  <Button sx={{ borderRadius: '50px', border: '0px', minWidth: '0px', padding: '0px' }} variant="outlined"><ControlPointIcon /></Button>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "flex-end"
                  }}
               >
                  <Typography
                     sx={{
                        padding: "0px",
                        display: "flex",
                        flex: "auto",
                        flexDirection: "column"
                     }}
                  >
                     <h3>Дохід</h3>
                     <Box sx={{ display: 'flex' }}>
                        <div className='income'>Джерело:</div>
                        <span className='inc-value'>+1000</span>
                     </Box>
                     <Box sx={{ display: 'flex' }}>
                        <div className='income'>Джерело:</div>
                        <span className='inc-value'>+1000</span>
                     </Box>
                     <Box sx={{ display: 'flex' }}>
                        <div className='income'>Джерело:</div>
                        <span className='inc-value'>+1000</span>
                     </Box>
                  </Typography>
                  <Typography
                     sx={{
                        padding: "0px",
                        display: "flex",
                        flexDirection: "column"
                     }}
                  >
                     <h3>Витрати</h3>
                     <Box sx={{ display: 'flex', justifyContent: "flex-end" }}>
                        <div className='cost'>Категорія:</div>
                        <span className='cost-value'>-500</span>
                     </Box>
                     <Box sx={{ display: 'flex', justifyContent: "flex-end" }}>
                        <div className='cost'>Категорія:</div>
                        <span className='cost-value'>-500</span>
                     </Box>
                     <Box sx={{ display: 'flex', justifyContent: "flex-end" }}>
                        <div className='cost'>Категорія:</div>
                        <span className='cost-value'>-500</span>
                     </Box>
                  </Typography>
               </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
               <Typography>
                  <div className='general'>Загальний дохід:</div>
                  <span className='gen-income'>3000</span>
               </Typography>
               <Typography>
                  <div className='general'>Загальні витрати:</div>
                  <span className='gen-cost'>1500</span>
               </Typography>

            </Box>
            <Box>
               <Typography sx={{
                  display: "flex",
                  justifyContent: "center"
               }}>
                  <div className="text">Залишок:</div><span>98630</span>
               </Typography>
            </Box>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "space-between"
               }}
            >
               <Button sx={{ borderRadius: '0px 0px 20px 20px', width: "100%" }} variant="contained">Перенести залишок на ціль</Button>
            </Box>
         </Paper>
      </Grid>
   )
};


export default CardMonth;