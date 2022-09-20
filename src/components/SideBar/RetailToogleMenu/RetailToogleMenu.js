import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import moment from 'moment';
import {momentConfig} from '../../../momentConfig';
import Button from '@mui/material/Button';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CottageIcon from '@mui/icons-material/Cottage';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FunctionsIcon from '@mui/icons-material/Functions';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import './RetailToogleMenu.css';

import {collection,  doc, setDoc} from "firebase/firestore"; 
import {db} from "../../../firebase-config";





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
    retail: '12342',
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
];

const findCurrentMonthValue  = (currentSearch) =>{
  return (currentSearch.month === String(now));
}

const now = moment().format('MMMM');
const searchNow = months.find(findCurrentMonthValue);




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    lineHeight: '60px',
  }));

  

const RetailToogleMenu = () => {

  
 
  const [changedMonths,setChangedMonths]=useState(searchNow.month);
  const [changedRetail,setChangedRetail]=useState(searchNow.retail);

  const [displayDetails, setDisplayDetails] = useState(false);
  
  const products1 = 2101;
  const products2 = 734;
  const products3 = 241;

  const comunalsWater = 451;
  const comunalsGas = 1234;
  const comunalsElectrisity = 321;

  const other1 = 2530;
  const other2 = 210;
  const other3 = 520;

  const productsRetail = products1 + products2 + products3; 
  const comunalsRetail = comunalsElectrisity + comunalsGas + comunalsWater; 
  const otherRetail = other1 + other2+ other3;

 
  const sumRetail = productsRetail + comunalsRetail + otherRetail;

  const getDataToDB = async () =>{
    const usersRef = collection(db, "usersRetail");
  await setDoc(doc(usersRef, localStorage.getItem('uid')), {
    retailProducts1: products1,
    retailProducts2: products2,
    retailProducts3: products3,
    retailProducts: productsRetail,

    retailComunals1: comunalsWater,
    retailComunals2: comunalsGas,
    retailComunals3: comunalsElectrisity,
    retailComunals: comunalsRetail,
    
    retailOther1: other1,
    retailOther2: other2,
    retailOther3: other3,
    retailOther: otherRetail,

    retailzOverAll: sumRetail,
  });
}
  
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
                    <div  
                      className='currentMonth'>
                      
                      <div 
                        className='retailCurrentMonth'>
                          Розсхід за {changedMonths}
                      </div>
                        <div
                        className='retailProducts'>
                        <div>Продукти <BakeryDiningIcon className='iconMargin'></BakeryDiningIcon></div>
                        
                        <div>{productsRetail}</div>
                        </div>
                        <div 
                        className='retailComunals'>
                        <div>Комунальні <CottageIcon className='iconMargin'></CottageIcon></div>
                        
                        <div>{comunalsRetail}</div>
                        </div>
                        <div 
                        className='retailOther'>
                        <div>Інше <CelebrationIcon className='iconMargin'></CelebrationIcon></div>
                        <div>{otherRetail}</div>
                        </div>
                        <div 
                        className='retailSum'>
                        <div>Разом <FunctionsIcon className='iconMargin'></FunctionsIcon></div>
                        <div>{sumRetail}</div>
                        </div>
                        <div className='buttonForDetails'>
                          <button 
                          className='buttonStyle'
                          onClick={()=>setDisplayDetails(!displayDetails) & getDataToDB()}
                          >
                            Детальніше
                          </button>
                        </div>
                    </div>

                    {displayDetails ?
                    <div className='detailsContainer'>
                    <div className='productsDetailsRetail'>
                      <div className='productsDetailsRetailTitle'>Продукти</div>
                      <div className='productsDetailsRetailListContainer'>
                        <ul className='productsDetailsRetailList'>
                          <li className='productsDetailRetailListItem'><div>Сільпо</div><div>{products1}</div></li>
                          <li className='productsDetailRetailListItem'><div>Ашан</div><div>{products2}</div></li>
                          <li className='productsDetailRetailListItem'><div>АТБ</div><div>{products3}</div></li>
                        </ul>
                      </div>
                      
                    </div>
                    <div className='comunalsDetailsRetail'>
                    <div className='productsDetailsRetailTitle'>Комунальні</div>
                    <div className='productsDetailsRetailListContainer'>
                        <ul className='productsDetailsRetailList'>
                          <li className='productsDetailRetailListItem'><div>Газ</div><div>{comunalsWater}</div></li>
                          <li className='productsDetailRetailListItem'><div>Вода</div><div>{comunalsGas}</div></li>
                          <li className='productsDetailRetailListItem'><div>Елекроенергія</div><div>{comunalsElectrisity}</div></li>
                        </ul>
                      </div>
                    </div>
                    <div className='otherDetailsRetail'>
                    <div className='productsDetailsRetailTitle'>Інше</div>
                    <div className='productsDetailsRetailListContainer'>
                        <ul className='productsDetailsRetailList'>
                          <li className='productsDetailRetailListItem'><div>Подорож у карпати</div><div>{other1}</div></li>
                          <li className='productsDetailRetailListItem'><div>Мийка машини</div><div>{other2}</div></li>
                          <li className='productsDetailRetailListItem'><div>Стрижка</div><div>{other3}</div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                    : null}
                    
              </Box>
          </Grid>
        </Grid>
      );
};

export default RetailToogleMenu;