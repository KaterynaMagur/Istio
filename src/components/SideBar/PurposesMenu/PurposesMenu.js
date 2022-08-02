import React, {useState} from 'react';
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Brightness3Icon from '@mui/icons-material/Brightness3';

import './PurposesMenuStyle.css';
import {colors as palette} from "../../../theme";


const PurposesMenu = () => {

    return (
        <List
            sx={{width: '100%', background: theme => palette.primary.light}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div"
                               id="nested-list-subheader"
                               className={'purposes-text'}
                               sx={{color: '#616161',
                                   fontWeight: "bold",
                                   fontSize: '1.5rem',
                               }}
                >
                    Мої цілі
                </ListSubheader>
            }>
            <ListItemButton>
                <ListItemIcon>
                    <StarPurple500Icon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Політ на Марс" sx={{
                    color: '#9E9E9E',
                    '&:hover': {
                        color: '#673AB7'
                    }
                }}/>
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <Brightness3Icon sx={{color: '#9E9E9E'}}/>
                </ListItemIcon>
                <ListItemText primary="Політ на Місяць" sx={{
                    color: '#9E9E9E', '&:hover': {
                        color: '#673AB7'
                    }
                }}/>
            </ListItemButton>
        </List>
    );
};

export default PurposesMenu;