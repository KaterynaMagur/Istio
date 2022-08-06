import React from 'react';
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import Button from '@mui/material/Button';

import './SideBarStyle.css';
import TextMenu from "./TextMenu/TextMenu";
import {colors as palette} from "../../theme";


const SideBar = () => {

    const addNewPurposes = () => {
    };

    return (
        <Box className={'scroll'} sx={{
            width: 250,
            minHeight: '100vh',
            background: "white",
            marginBottom: 2,
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

            <div className={'btnSideBar'}>
                <Button onClick={addNewPurposes} variant="contained"
                        sx={{
                            width: 200,
                            borderRadius: 4,
                            background: theme => palette.primary.main,
                            margin: '3rem 0.5rem 0 1.2rem',
                            '&:hover': {
                                color: theme => palette.primary.dark
                            }
                        }}
                >
                    <span className={'btnSideBarText'}>Нова ціль</span>
                </Button>
            </div>

        </Box>
    );
};

export default SideBar;