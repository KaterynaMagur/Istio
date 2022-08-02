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
import PercentIcon from '@mui/icons-material/Percent';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import {colors as palette, theme} from "../../../theme";

import './IncomeMenuStyle.css';


const IncomeMenu = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <List
            sx={{width: '100%', background: theme => palette.primary.light}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div"
                               id="nested-list-subheader"
                               className={'income-text'}
                               sx={{
                                   fontWeight: "bold",
                                   fontSize: '1.5rem',
                               }}
                >
                    Дохід
                </ListSubheader>
            }>

            <ListItemButton sx={{
                '&:hover': {
                    borderRadius: 4,
                }
            }}>

                <ListItemIcon>
                    <AttachMoneyIcon
                        sx={{
                            color: '#9E9E9E',
                            '&:hover': {
                                color: '#673AB7'
                            },
                        }}
                    />
                </ListItemIcon>


                <ListItemText primary="Заробітня плата"
                              sx={{
                                  color: '#9E9E9E',
                                  '&:hover': {
                                      color: '#673AB7'
                                  }
                              }}
                />

            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <PercentIcon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Відсотки з вкладів" sx={{
                    color: '#9E9E9E', '&:hover': {
                        color: '#673AB7'
                    }
                }}/>
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <AccessibilityNewIcon sx={{color: '#9E9E9E'}}/>
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
                            <AccountBalanceWalletIcon sx={{color: '#9E9E9E'}}/>
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
                            <ControlCameraIcon sx={{color: '#9E9E9E'}}/>
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




