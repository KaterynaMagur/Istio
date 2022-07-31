import React, {useState} from 'react';
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

import './Retail-menu-style.css';


const RetailMenu = () => {
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
                               className={'retail-text'}
                               sx={{color: '#616161', fontWeight: "bold", fontSize: '1.5rem', background: '#E0E0E0'}}
                >
                    Розхід
                </ListSubheader>
            }>
            <ListItemButton>
                <ListItemIcon>
                    <MoneyOffIcon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Продукти" sx={{
                    color: '#9E9E9E',
                    '&:hover': {
                        color: '#673AB7'
                    }
                }}/>
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <MoneyOffIcon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Комунальні платежі" sx={{
                    color: '#9E9E9E', '&:hover': {
                        color: '#673AB7'
                    }
                }}/>
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <MoneyOffIcon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Інші витрати" sx={{
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
                            <MoneyOffIcon sx={{color: '#9E9E9E'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Одяг" sx={{
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
                            <MoneyOffIcon sx={{color: '#9E9E9E'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Відпочинок" sx={{
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

export default RetailMenu;