import React from 'react';
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";

import './SideBarStyle.css';
import TextMenu from "./TextMenu/TextMenu";
import {colors as palette} from "../../theme";


const SideBar = () => {
    return (
        <Box sx={{
            width: 250,
            minHeight: '100vh',
            background: theme => palette.primary.light,
        }}>


            <Typography variant="h4" component="div" gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: '1.2rem 0 0.5rem 0',
                        }}>
                МЕНЮ
            </Typography>

            <TextMenu/>
        </Box>
    );
};

export default SideBar;