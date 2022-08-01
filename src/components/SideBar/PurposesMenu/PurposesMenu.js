import React, {useState} from 'react';
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

import './PurposesMenuStyle.css';


const PurposesMenu = () => {

    return (
        <List
            sx={{width: '100%', background: '#E0E0E0'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div"
                               id="nested-list-subheader"
                               className={'purposes-text'}
                               sx={{color: '#616161', fontWeight: "bold", fontSize: '1.5rem', background: '#E0E0E0'}}
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
                    <StarPurple500Icon sx={{color: '#9E9E9E'}}/>
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