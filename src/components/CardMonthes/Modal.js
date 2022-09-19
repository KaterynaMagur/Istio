import React, {useRef, useState} from "react";
import './style.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import moment from 'moment';

import { addDoc, collection, doc, setDoc} from "firebase/firestore"; 
import {db} from "../../firebase-config";

const ariaLabel = {'aria-label': 'description'};

moment.locale('uk');
moment.updateLocale('uk');
const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');



const Modal = ({active, setActive}) => {
    const [showSelect, setShowSelect] = useState('Дохід');
    const [message, setMessage] = useState();

const hadleChange = (event) =>{
    setMessage(event.target.value)
}

    const getDataToDB = async () =>{
    
        const usersRef = collection(db,'users');
        
            const usersRefInccome =collection(db, `users/${localStorage.getItem('uid')}/incomes`);
            const usersRefGoal = collection(db, `users/${localStorage.getItem('uid')}/goals`);
            const usersRefCosts = collection(db, `users/${localStorage.getItem('uid')}/costs`);
        
        
    
        await  setDoc(doc(usersRef, localStorage.getItem('uid')),{
            email: localStorage.getItem('email'),
            password: 321,
            userName: localStorage.getItem('name'),
        });
        {showSelect === 'Дохід' &&
         await addDoc(usersRefInccome,  {
             incomeName: showSelect,
             currency: 'UAH',
             date: currentDate,
             sumOfIncome: message,
         })};
         {showSelect === 'Ціль' &&
         await addDoc(usersRefGoal,  {
             goalImg: showSelect,
             goalName: 'UAH',
             date: currentDate,
             sumOfGoals: message,
         })};
         {showSelect === 'Витрата' &&
         await addDoc(usersRefCosts,  {
             costName: showSelect,
             date: currentDate,
             kindOfCost: 'setKindCost',
             sumOfCost: message,
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
                    onClick={() => getDataToDB()}
                    >
                    Зберегти</Button>
            </div>
        </div>
    )
};

export default Modal;