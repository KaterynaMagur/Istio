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
import {NavLink} from "react-router-dom";

import './RetailMenuStyle.css';
import {colors as palette} from "../../../theme";


const RetailMenu = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <List
            sx={{width: '100%'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div"
                               id="nested-list-subheader"
                               className={'retail-text'}
                               sx={{
                                   fontWeight: "bold",
                                   fontSize: '1.5rem',
                               }}
                >
                    <NavLink to={'/RetailToogleMenu'}>
                    Розхід
                    </NavLink>
                </ListSubheader>
            }>

            <ListItemButton sx={{
                '&:hover': {
                    borderRadius: 4,
                    color: theme => palette.primary.main,
                    background: theme => palette.primary.light,
                }
            }}>

                <ListItemIcon>
                    <ProductionQuantityLimitsIcon
                        sx={{
                            color: theme => palette.GreyColor.main,
                            '&:hover': {
                                color: theme => palette.primary.dark
                            }
                        }}
                    />
                </ListItemIcon>

                <NavLink to={"/RetailProducts"}>
                    <ListItemText primary="Продукти"
                                  sx={{
                                      color: theme => palette.GreyColor.main,
                                      '&:hover': {
                                          color: theme => palette.primary.dark
                                      }
                                  }}/>
                </NavLink>
            </ListItemButton>

            <ListItemButton sx={{
                '&:hover': {
                    borderRadius: 4,
                    color: theme => palette.primary.main,
                    background: theme => palette.primary.light,
                }
            }}>

                <ListItemIcon>
                    <MarkUnreadChatAltIcon
                        sx={{
                            color: theme => palette.GreyColor.main,
                            '&:hover': {
                                color: theme => palette.primary.dark
                            }
                        }}
                    />
                </ListItemIcon>

                <NavLink to={"/RetailPayments"}>
                    <ListItemText primary="Комунальні платежі"
                                  sx={{
                                      color: theme => palette.GreyColor.main,
                                      '&:hover': {
                                          color: theme => palette.primary.dark
                                      }
                                  }}/>
                </NavLink>
            </ListItemButton>

            <ListItemButton onClick={handleClick}
                            sx={{
                                '&:hover': {
                                    borderRadius: 4,
                                    color: theme => palette.primary.main,
                                    background: theme => palette.primary.light,
                                }
                            }}>

                <ListItemIcon>
                    <AnnouncementIcon
                        sx={{
                            color: theme => palette.GreyColor.main,
                            '&:hover': {
                                color: theme => palette.primary.dark
                            }
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary="Інші витрати" sx={{
                    color: theme => palette.GreyColor.main,
                    '&:hover': {
                        color: theme => palette.primary.dark
                    }
                }}/>
                {open ? <ExpandLess sx={{color: theme => palette.primary.dark}}/> :
                    <ExpandMore sx={{color: theme => palette.GreyColor.main}}/>}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>
                    <ListItemButton
                        sx={{
                            pl: 4,
                            '&:hover': {
                                borderRadius: 4,
                                background: theme => palette.primary.light,
                            }
                        }}>

                        <ListItemIcon>
                            <OfflineBoltIcon
                                sx={{
                                    color: theme => palette.GreyColor.main,
                                    '&:hover': {
                                        color: theme => palette.primary.dark
                                    }
                                }}/>
                        </ListItemIcon>

                        <NavLink to={"/RetailClothing"}>
                            <ListItemText primary="Одяг"
                                          sx={{
                                              color: theme => palette.GreyColor.main,
                                              margin: 0,
                                              padding: 0,
                                              '&:hover': {
                                                  color: theme => palette.primary.dark
                                              }
                                          }}/>
                        </NavLink>
                    </ListItemButton>
                </List>

                <List component="div" disablePadding>
                    <ListItemButton
                        sx={{
                            pl: 4,
                            '&:hover': {
                                borderRadius: 4,
                                background: theme => palette.primary.light
                            }
                        }}>
                        <ListItemIcon>
                            <BrightnessHighIcon
                                sx={{
                                    color: theme => palette.GreyColor.main,
                                    '&:hover': {
                                        color: theme => palette.primary.dark
                                    }
                                }}/>
                        </ListItemIcon>

                        <NavLink to={"/RetailVacation"}>
                            <ListItemText primary="Відпочинок"
                                          sx={{
                                              color: theme => palette.GreyColor.main,
                                              '&:hover': {
                                                  color: theme => palette.primary.dark
                                              }
                                          }}/>
                        </NavLink>
                    </ListItemButton>
                </List>
            </Collapse>

        </List>
    );
};

export default RetailMenu;