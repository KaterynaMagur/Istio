import React from "react";
import './style.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const ariaLabel = { 'aria-label': 'description' };

const incomesValue = 1;
const costsValue = 0;

const moneyOptions = [
   {
      label: "Заробітня плата",
      value: 0,
      filterKey: incomesValue,
   },
   {
      label: "Відсотки з вкладів",
      value: 1,
      filterKey: incomesValue,
   },
   {
      label: "Продаж товарів",
      value: 2,
      filterKey: incomesValue,
   },
   {
      label: "Кошти з неба",
      value: 3,
      filterKey: incomesValue,
   },
   {
      label: "Продукти",
      value: 4,
      filterKey: costsValue,
   },
   {
      label: "Комунальні платежі",
      value: 5,
      filterKey: costsValue,
   },{
      label: "Одяг",
      value: 6,
      filterKey: costsValue,
   },{
      label: "Відпочинок",
      value: 7,
      filterKey: costsValue,
   }
]





const Modal = ({ active, setActive }) => {
   return (
      <div className={active ? "modal active" : "modal"}>
         <div className="modal-content" onClick={e => e.stopPropagation()}>
            <Input placeholder="Сума" inputProps={ariaLabel} sx={{ width: '100%', marginTop: "15px" }} />

            <FormControl fullWidth sx={{ marginTop: "10px" }}>
               <NativeSelect>
               
                  <option>Дохід</option>
                  <option>Витрата</option>

               </NativeSelect>
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: "15px" }}>
               <NativeSelect>

                  {moneyOptions.map(option =>
                     <option>1</option>
                  )}
               </NativeSelect>

            </FormControl>
            <Button sx={{ borderRadius: '12px', width: "100%", marginTop: "15px" }} variant="text">Зберегти</Button>
         </div>
      </div>
   )
};

export default Modal;