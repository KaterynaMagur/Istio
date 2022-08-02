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
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

import './RetailMenuStyle.css';
import {colors as palette} from "../../../theme";


const RetailMenu = () => {
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
                               className={'retail-text'}
                               sx={{color: '#616161',
                                   fontWeight: "bold",
                                   fontSize: '1.5rem',
                               }}
                >
                    Розхід
                </ListSubheader>
            }>
            <ListItemButton>
                <ListItemIcon>
                    <ProductionQuantityLimitsIcon sx={{color: '#9E9E9E'}}/>
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
                    <MarkUnreadChatAltIcon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Комунальні платежі" sx={{
                    color: '#9E9E9E', '&:hover': {
                        color: '#673AB7'
                    }
                }}/>
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <AnnouncementIcon sx={{color: '#9E9E9E'}}/>
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
                            <OfflineBoltIcon sx={{color: '#9E9E9E'}}/>
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
                            <BrightnessHighIcon sx={{color: '#9E9E9E'}}/>
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