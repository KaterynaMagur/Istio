import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CottageIcon from '@mui/icons-material/Cottage';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FunctionsIcon from '@mui/icons-material/Functions';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import './RetailToogleMenu.css';





const months =[
  {
    month: 'Січень',
    retail: '12652',
  },
  {
    month: 'Лютий',
    retail: '9465',
  },
  {
    month: 'Березень',
    retail: '13684',
  },
  {
    month: 'Квітень',
    retail: '17340',
  },
  {
    month: 'Травень',
    retail: '11398',
  },
  {
    month: 'Червень',
    retail: '16221',
  },
  {
    month: 'Липень',
    retail: '21432',
  },
  {
    month: 'Серпень',
    retail: '14230',
  },
  {
    month: 'Вересень',
    retail: '0',
  },
  {
    month: 'Жовтень',
    retail: '0',
  },
  {
    month: 'Листопад',
    retail: '0',
  },
  {
    month: 'Грудень',
    retail: '0',
  }
]





const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    lineHeight: '60px',
  }));

const RetailToogleMenu = () => {


  const [changedMonths,setChangedMonths]=useState('');
  const [changedRetail,setChangedRetail]=useState('');

  const [displayDetails, setDisplayDetails] = useState(true);
  
  const productsRetail = changedRetail/2;
  const comunalsRetail = changedRetail/8;
  const otherRetail = changedRetail/4;
  const sumRetail = productsRetail + comunalsRetail + otherRetail;

  
  return (


      <Grid container spacing={2}>
          
          <Grid item columns={2} xs={6}>
              <Box 
                sx={{
                  p: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gap: 2,
                }}>
              {months.map((currentMonth,index) => (
                <Item key={index} elevation={6}>
                      <Button 
                          onClick={ ()=> 
                            setChangedMonths(currentMonth.month) &
                            setChangedRetail(currentMonth.retail)
                          }
                         >
                          {currentMonth.month +' - '+ currentMonth.retail}
                      </Button>
                </Item>))}
                </Box>
          </Grid>
                
          <Grid item xs={6}>
              <Box 
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gap: 2,
                    width:'100%'
                  }}>
                    {months.slice(0,1).map((currentMonth,index) => (
                    <div  
                      className='currentMonth'>
                      
                      <div 
                        key={index} 
                        className='retailCurrentMonth'>
                          Розсхід за {changedMonths}
                      </div>
                        <div
                        className='retailProducts'>
                        <div>Продукти <BakeryDiningIcon ></BakeryDiningIcon></div>
                        
                        <div>{productsRetail}</div>
                        </div>
                        <div 
                        className='retailComunals'>
                        <div>Комунальні <CottageIcon></CottageIcon></div>
                        
                        <div>{comunalsRetail}</div>
                        </div>
                        <div 
                        className='retailOther'>
                        <div>Інше <CelebrationIcon></CelebrationIcon></div>
                        <div>{otherRetail}</div>
                        </div>
                        <div 
                        className='retailSum'>
                        <div>Разом <FunctionsIcon></FunctionsIcon></div>
                        <div>{sumRetail}</div>
                        </div>
                        <div className='buttonForDetails'>
                          <button 
                          className='buttonStyle'
                          onClick={()=>setDisplayDetails(!displayDetails)}
                          >
                            Детальніше
                          </button>
                        </div>
                    </div>
                    ))}

                    {displayDetails ?
                    <div className='detailsContainer'>
                    <div className='productsDetailsRetail'>
                      <div className='productsDetailsRetailTitle'>Продукти</div>
                    </div>
                    <div className='comunalsDetailsRetail'>
                    <div className='productsDetailsRetailTitle'>Комунальні</div>
                    </div>
                    <div className='otherDetailsRetail'>
                    <div className='productsDetailsRetailTitle'>Інше</div>
                    </div>
                  </div>
                    : null}
                    
              </Box>
          </Grid>
        </Grid>
      );
};

export default RetailToogleMenu;