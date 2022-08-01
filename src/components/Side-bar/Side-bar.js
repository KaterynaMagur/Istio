import React from 'react';
import Box from '@mui/material/Box';
import ListSubheader from "@mui/material/ListSubheader";

import './Side-bar-style.css';
import TextMenu from "./Text-menu/Text-menu";


const SideBar = () => {
    return (
        <Box sx={{
            width: 250,
            minHeight: '100vh',
            background: '#E0E0E0',
        }}>

            <div className={'box-text-menu'}>Menu</div>

            <TextMenu/>
        </Box>
    );
};

export default SideBar;