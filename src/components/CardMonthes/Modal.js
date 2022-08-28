import React from "react";
import './style.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const ariaLabel = { 'aria-label': 'description' };


const Modal = ({ active, setActive }) => {
   return (
      <div className={active ? "modal active" : "modal"}>
         <div className="modal-content" onClick={e => e.stopPropagation()}>
            <Input placeholder="Сума" inputProps={ariaLabel} sx={{ width: '100%', marginTop: "15px" }} />

            <FormControl fullWidth sx={{ marginTop: "10px" }}>
               <NativeSelect
                  inputProps={{
                     id: 'uncontrolled-native',
                  }}
               >
                  <option>Дохід</option>
                  <option>Витрата</option>

               </NativeSelect>
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: "15px" }}>
               <NativeSelect
                  inputProps={{
                     id: 'uncontrolled-native',
                  }}
               >
                  <option>Заробітня плата</option>
                  <option>Відсотки з вкладів</option>
                  <option>Продаж товарів</option>
                  <option>Кошти з неба</option>
               </NativeSelect>

            </FormControl>
            <Button sx={{ borderRadius: '12px', width: "100%", marginTop: "15px" }} variant="text">Зберегти</Button>
         </div>
      </div>
   )
};

export default Modal;