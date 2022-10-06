import React, {useRef, useState} from "react";
import './style.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import moment from 'moment';



import { addDoc, collection, doc, getDocs, setDoc, query, where} from "firebase/firestore"; 
import {db} from "../../firebase-config";
import { useAuth } from "../../context/AuthContext";


const ariaLabel = {'aria-label': 'description'};


const currentDate = moment().format('LLLL');






const Modal = ({active, setActive}) => {
    const {currentUser} = useAuth();
    const [showSelect, setShowSelect] = useState('Дохід');
    const [selectIncome,setSelectIncome]=useState('Заробітня Плата');
    const [selectCost,setSelectCost]=useState('Продукти');
    const [message, setMessage] = useState(Number);


const hadleChange = (event) =>{
    setMessage(event.target.value)
}

    const getDataToDB = async () =>{
    
        const usersRef = collection(db,'users');
        

            const usersRefInccome =collection(db, `users/${currentUser.uid}/incomes`);
            const usersRefGoal = collection(db, `users/${currentUser.uid}/goals`);
            const usersRefCosts = collection(db, `users/${currentUser.uid}/costs`);
        
        
    
        await  setDoc(doc(usersRef, currentUser.uid),{
            email: currentUser.email,
            password: 321,
            userName: currentUser.displayName,
        });
        {showSelect === 'Дохід' &&
         await addDoc(usersRefInccome,  {
             incomeName: showSelect,
             currency: 'UAH',
             kindOfIncome: selectIncome,
             date: currentDate,
             sumOfIncome: Number(message),
         })};
         {showSelect === 'Ціль' &&
         await addDoc(usersRefGoal,  {
             goalImg: showSelect,
             goalName: 'UAH',
             date: currentDate,
             sumOfGoals: Number(message),
         })};
         {showSelect === 'Витрата' &&
         await addDoc(usersRefCosts,  {
             costName: showSelect,
             date: currentDate,
             kindOfCost: selectCost,
             sumOfCost: Number(message),
         })};
    }

   
    

    return (
        <div className={active ? "modal active" : "modal"}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <Input 
                    onChange = {hadleChange}
                    value = {message}
                    placeholder="Сума"
                    inputProps={ariaLabel}
                    sx={{width: '100%', marginTop: "15px"}}/>

                <FormControl fullWidth sx={{marginTop: "10px"}}>
                    <NativeSelect
                        inputProps={{
                            id: 'uncontrolled-native',
                        }}
                        onChange={(e) => setShowSelect(e.target.value)}
                    >
                        <option>Дохід</option>
                        <option>Витрата</option>

                    </NativeSelect>
                </FormControl>

                <FormControl fullWidth sx={{marginTop: "15px"}}>
                    {showSelect === 'Дохід' && <NativeSelect
                        inputProps={{
                            id: 'uncontrolled-native',
                        }}
                        onChange={(e) => setSelectIncome(e.target.value)}
                    >
                        <option>Заробітня плата</option>
                        <option>Відсотки з вкладів</option>
                        <option>Продаж товарів</option>
                        <option>Кошти з неба</option>
                    </NativeSelect>}

                    {showSelect === 'Витрата' && <NativeSelect
                        inputProps={{
                            id: 'uncontrolled-native',
                        }}
                        onChange={(e) => setSelectCost(e.target.value)}
                    >
                        <option>Продукти</option>
                        <option>Комунальні платежі</option>
                        <option>Одяг</option>
                        <option>Відпочинок</option>
                    </NativeSelect>}

                </FormControl>
                <Button 
                    sx={{borderRadius: '12px', width: "100%", marginTop: "15px"}} 
                    variant="text"
                    onClick={() => getDataToDB() }
                    >
                    Зберегти</Button>
            </div>
        </div>
    )
};

export default Modal;