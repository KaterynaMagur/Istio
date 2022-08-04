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
import {NavLink} from "react-router-dom";

import './IncomeMenuStyle.css';
import {colors as palette, theme} from "../../../theme";


const IncomeMenu = () => {
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
                    color: theme => palette.primary.main
                }
            }}>

                <ListItemIcon>
                    <AttachMoneyIcon
                        sx={{
                            color: theme => palette.GreyColor.main,
                            '&:hover': {
                                color: theme => palette.primary.dark
                            }
                        }}
                    />
                </ListItemIcon>

                <NavLink to={'/IncomeSalary'}>
                    <ListItemText primary="Заробітня плата"
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
                    <PercentIcon
                        sx={{
                            color: theme => palette.GreyColor.main,
                            '&:hover': {
                                color: theme => palette.primary.dark
                            }
                        }}/>
                </ListItemIcon>

                <NavLink to={"/IncomeDeposits"}>
                    <ListItemText primary="Відсотки з вкладів"
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
                                    color: theme => palette.primary.main
                                }
                            }}>

                <ListItemIcon>
                    <AccessibilityNewIcon
                        sx={{
                            color: theme => palette.GreyColor.main,
                            '&:hover': {
                                color: theme => palette.primary.dark
                            }
                        }}/>
                </ListItemIcon>

                <ListItemText primary="Додаткові доходи" sx={{
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
                    <ListItemButton sx={{
                        pl: 4,
                        '&:hover': {
                            borderRadius: 4,
                            background: theme => palette.primary.light
                        }
                    }}>

                        <ListItemIcon>
                            <AccountBalanceWalletIcon
                                sx={{
                                    color: theme => palette.GreyColor.main,
                                    '&:hover': {
                                        color: theme => palette.primary.dark
                                    }
                                }}/>
                        </ListItemIcon>

                        <NavLink to={"/IncomeSelling"}>
                            <ListItemText primary="Продаж товарів"
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
                            <ControlCameraIcon
                                sx={{
                                    color: theme => palette.GreyColor.main,
                                    '&:hover': {
                                        color: theme => palette.primary.dark
                                    }
                                }}/>
                        </ListItemIcon>

                        <NavLink to={"/IncomeFreeMoney"}>
                            <ListItemText primary="Кошти з неба"
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

export default IncomeMenu;




