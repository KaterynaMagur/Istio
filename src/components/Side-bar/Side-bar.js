import React from 'react';
import Box from '@mui/material/Box';

import './Side-bar-style.css';
import IncomeMenu from "./Income-menu/Income-menu";
import RetailMenu from "./Retail-menu/Retail-menu";
import PurposesMenu from "./Purposes-menu/Purposes-menu";
import List from '@mui/material/List';


const SideBar = () => {
    return (
        <Box sx={{
                width: '100%',
                minHeight: '100vh',
                background: '#B9F6CA',
            }}
        >
            <div className={'sideBar-text'}>Menu</div>

            <List sx={{
                width: '100%',
                background: 'red',
            }}
            >
            <IncomeMenu/>
            <RetailMenu/>
            <PurposesMenu/>
            </List>


        </Box>
    );
};

export default SideBar;