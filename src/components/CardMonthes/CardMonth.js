import React, {useCallback, useEffect,  useState} from "react";
import {Typography,Button,CardHeader,Paper,Grid,Box} from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Modal from './Modal.js';

import { collection, getDocs, query, where} from "firebase/firestore"; 
import {db} from "../../firebase-config";
import {useAuth} from "../../context/AuthContext"; 

import "./style.css";





const CardMonth = () => {
   const [modalActive, setModalActive] = useState(false);

   const {currentUser} = useAuth();

   const [incomes,setIncomes] = useState([]);
   const [goals,setGoals] = useState([]);
   const [costs,setCosts] = useState([]);

   
 
  
  
   const getDataFromDB =  useCallback (async ()=>{

      const usersRefIncome = collection(db, `users/${currentUser.uid}/incomes`);
      const usersRefGoal = collection(db, `users/${currentUser.uid}/goals`);
      const usersRefCosts = collection(db, `users/${currentUser.uid}/costs`); 
      
         const income = await  getDocs(usersRefIncome);
            setIncomes(income.docs
               .map( doc =>({id:doc.id, ...doc.data()}))
               );
               // const goals = await  getDocs(usersRefGoal);
               // setGoals(goals.docs
               //     .map(doc =>({id:doc.id, ...doc.data()}))
               //     );
              const costs = await  getDocs(usersRefCosts );
              setCosts(costs.docs
                  .map(doc =>({id:doc.id, ...doc.data()}))
                  );
                 
         },[setIncomes, setCosts]);
               
          
                   //  useEffect(()=>{
                   //     getDataFromDB().finally();
                   //    console.log(incomes); 
                   //      console.log(costs); 
                   //  },[getDataFromDB]);

         




           


   return (
      <Grid
         item xs={4}>
         <Paper sx={{
            background: "#FFF",
            borderRadius: "4px",
            padding: "5px"
            }} 
         >
            <Box paddingX={0}>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between"
                  }}
               >
                  <CardHeader
                     title="Січень"
                  />
                  <Typography sx={{ display: "flex", paddingTop: "10px" }}>Бюджет:100000</Typography>
               </Box>
               <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{
                     display: "flex",
                     paddingTop: "5px"
                  }}>
                    
                  </Typography>
                  <Button sx={{ borderRadius: '50px', border: '0px', minWidth: '0px', padding: '0px'}}
                     variant="text"
                     onClick={() =>  setModalActive (!modalActive)}> 
                     <ControlPointIcon/>
                     
                  </Button>
               </Box>

               <Modal active={modalActive} setActive={setModalActive}/> 

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
                        flexDirection: "column",
                        margin:"20px"
                     }}
                  >
                     Дохід
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
                        flexDirection: "column",
                        margin:"20px"
                     }}
                  >
                     Витрати
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
                  Загалний Дохід: 
                  10000
               </Typography>
               <Typography>
                  Загальні витрати:
                  1500
               </Typography>

            </Box>
            <Box>
               <Typography sx={{
                  display: "flex",
                  justifyContent: "center",
                  textTransform:"uppercase"
               }}
               >
                  Залишок:98630
               </Typography>
            </Box>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "space-between"
               }}
            >
               <Button size="medium" color="primary">Перенести залишок на ціль</Button>
            </Box>
         </Paper>
      </Grid>
   )
};


export default CardMonth;