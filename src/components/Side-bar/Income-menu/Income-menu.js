import React, {useState} from 'react';
import List from "@mui/material/List";
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import './Income-menu-style.css';


const IncomeMenu = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <List
            sx={{width: '100%', background: '#E0E0E0'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div"
                               id="nested-list-subheader"
                               className={'income-text'}
                               sx={{color: '#616161', fontWeight: "bold", fontSize: '1.5rem', background: '#E0E0E0'}}
                >
                    Дохід
                </ListSubheader>
            }>
            <ListItemButton>
                <ListItemIcon>
                    <AttachMoneyIcon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Заробітня плата" sx={{
                    color: '#9E9E9E',
                    '&:hover': {
                        color: '#673AB7'
                    }
                }}/>
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <AttachMoneyIcon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Відсотки з вкладів" sx={{
                    color: '#9E9E9E', '&:hover': {
                        color: '#673AB7'
                    }
                }}/>
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <AttachMoneyIcon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Додаткові доходи" sx={{
                    color: '#9E9E9E', '&:hover': {
                        color: '#673AB7'
                    }
                }}/>
                {open ? <ExpandLess sx={{color: '#673AB7'}}/> : <ExpandMore sx={{color: '#9E9E9E'}}/>}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon>
                            <AttachMoneyIcon sx={{color: '#9E9E9E'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Продаж товарів" sx={{
                            color: '#9E9E9E', margin: 0, padding: 0,
                            '&:hover': {
                                color: '#673AB7'
                            }
                        }}/>
                    </ListItemButton>
                </List>

                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <ListItemIcon>
                            <AttachMoneyIcon sx={{color: '#9E9E9E'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Кошти з неба" sx={{
                            color: '#9E9E9E', '&:hover': {
                                color: '#673AB7'
                            }
                        }}/>
                    </ListItemButton>
                </List>
            </Collapse>

        </List>
    );
};

export default IncomeMenu;