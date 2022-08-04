import React, {useState} from 'react';
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import {NavLink} from "react-router-dom";

import './PurposesMenuStyle.css';
import {colors as palette} from "../../../theme";


const PurposesMenu = () => {

    return (
        <List
            sx={{width: '100%'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div"
                               id="nested-list-subheader"
                               className={'purposes-text'}
                               sx={{
                                   fontWeight: "bold",
                                   fontSize: '1.5rem',
                               }}
                >
                    Мої цілі
                </ListSubheader>
            }>
            <ListItemButton
                sx={{
                    '&:hover': {
                        borderRadius: 4,
                        color: theme => palette.primary.main
                    }
                }}>
                <ListItemIcon>
                    <StarPurple500Icon
                        sx={{
                            color: theme => palette.GreyColor.main,
                            '&:hover': {
                                color: theme => palette.primary.dark
                            }
                        }}/>
                </ListItemIcon>

                <NavLink to={"/PurposesTarget1"}>
                    <ListItemText primary="Політ на Марс"
                                  sx={{
                                      color: theme => palette.GreyColor.main,
                                      '&:hover': {
                                          color: theme => palette.primary.dark
                                      }
                                  }}/>
                </NavLink>
            </ListItemButton>

            <ListItemButton
                sx={{
                    '&:hover': {
                        borderRadius: 4,
                        color: theme => palette.primary.main
                    }
                }}>
                <ListItemIcon>
                    <Brightness3Icon
                        sx={{
                            color: theme => palette.GreyColor.main,
                            '&:hover': {
                                color: theme => palette.primary.dark
                            }
                        }}/>
                </ListItemIcon>
                <NavLink to={"/PurposesTarget2"}>
                    <ListItemText primary="Політ на Місяць"
                                  sx={{
                                      color: theme => palette.GreyColor.main,
                                      '&:hover': {
                                          color: theme => palette.primary.dark
                                      }
                                  }}/>
                </NavLink>
            </ListItemButton>
        </List>
    );
};

export default PurposesMenu;