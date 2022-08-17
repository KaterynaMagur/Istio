import React from 'react';
import {Box, Typography} from "@mui/material";
import List from "@mui/material/List";
import Button from "@mui/material/Button";

import './IncomeSalaryStyle.css';
import {colors as palette} from "../../../theme";


const IncomeSalary = (props) => {
    const {
        incomeJanuary,
        incomeFebruary,
        incomeMarch,
        incomeApril,
        incomeMay,
        incomeJune,
        incomeJuly,
        incomeAugust,
        incomeSeptember,
        incomeOctober,
        incomeNovember,
        incomeDecember,
        incomeSalaryYear,
        setIncomeSalaryYear,
    } = props;


    const arrProps = [];
    for (const propKey in props) {
        if (propKey !== 'incomeSalaryYear' && propKey !== 'setIncomeSalaryYear') {
            arrProps.push(props[propKey]);
        }
    }

    const incomeSumma = arrProps.reduce((acum, secv) => acum + secv);
    const incomeAverage = incomeSumma / arrProps.length;


    const prevYear = () => {
        if (incomeSalaryYear > 2020){
        setIncomeSalaryYear(incomeSalaryYear - 1);
        } else {
            alert('Застарілий рік!!!');
        }
    }

    const nextYear = () => {
        if (incomeSalaryYear <= 2021){
        setIncomeSalaryYear(incomeSalaryYear + 1);
        } else {
            alert('Такий рік ще не настав!!!');
        }
    }


    return (
        <Box>
            <Typography variant="h4" component="div" gutterBottom
                        sx={{
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet',
                            fontWeight: 'bold',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: '0.5rem 0 0.5rem 0',
                            textTransform: "uppercase"
                        }}>
                заробітня плата
            </Typography>

            <Typography variant="h6" component="div" gutterBottom
                        sx={{
                            color: theme => palette.primary.main,
                            fontWeight: 'bold',
                            display: "flex",
                            margin: '0.5rem 0 0.5rem 0',
                            justifyContent: "start",
                            alignItems: "center",
                            padding: '0.5rem 0 0.5rem 0',
                            textTransform: "uppercase"
                        }}>

                <Button onClick={prevYear} variant="contained"
                        sx={{
                            width: 100,
                            borderRadius: 4,
                            mr: 2,
                            background: theme => palette.primary.main,
                        }}>
                    prevYear</Button>

                year: {incomeSalaryYear}

                <Button onClick={nextYear} variant="contained"
                        sx={{
                            width: 100,
                            borderRadius: 4,
                            ml: 2,
                            background: theme => palette.primary.main,
                        }}>
                    nextYear</Button>

            </Typography>


            <Box display="flex" justifyContent="center" alignItems="center" className={'incomeSalary'}>
                <Box className={'block'} sx={{
                    background: theme => palette.GreyColor.light,
                    borderRadius: 4,
                    height: '100vh',
                    mr: 5,
                    p: 2,
                    width: '48%'
                }}>
                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>Січень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeJanuary}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>Лютий:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeFebruary}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>Березень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeMarch}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>квітень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeApril}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>травень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeMay}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>червень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeJune}</Typography>
                    </List>
                </Box>

                <Box className={'block'} sx={{
                    background: theme => palette.GreyColor.light,
                    borderRadius: 4,
                    height: '100vh',
                    mr: 5,
                    p: 2,
                    width: '48%'
                }}>
                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>липень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeJuly}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>серпень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeAugust}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>вересень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeSeptember}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>жовтень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeOctober}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>листопад:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeNovember}</Typography>
                    </List>

                    <List
                        className={'block1'}
                        sx={{
                            background: theme => palette.primary.light,
                            p: 2,
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: '2px 2px purple',
                        }}
                        aria-label="contacts"
                    >
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.GreyColor.main
                        }}>грудень:</Typography>
                        <Typography variant="h5" gutterBottom sx={{
                            fontWeight: "bold",
                            color: theme => palette.primary.main,
                            textShadow: '2px 2px blueviolet'
                        }}>{incomeDecember}</Typography>
                    </List>
                </Box>
            </Box>

            <Typography variant="h6" component="div" gutterBottom sx={{fontWeight: "bold", mt: 1}}>
                Заробітня плата за рік: {incomeSumma}
            </Typography>
            <Typography variant="h6" component="div" gutterBottom sx={{fontWeight: "bold"}}>
                Середня заробітня плата за місяць: {incomeAverage}
            </Typography>
        </Box>
    );
};

export default IncomeSalary;


