import React from 'react';
import {Box, Typography} from "@mui/material";
import List from "@mui/material/List";

import './IncomeFreeMoneyStyle.css';
import {colors as palette} from "../../../theme";
import {useData} from "../../../context/DataProvider";


const IncomeFreeMoney = () => {

    const {
        incomeFreeMoneyJanuary,
        incomeFreeMoneyFebruary,
        incomeFreeMoneyMarch,
        incomeFreeMoneyApril,
        incomeFreeMoneyMay,
        incomeFreeMoneyJune,
        incomeFreeMoneyJuly,
        incomeFreeMoneyAugust,
        incomeFreeMoneySeptember,
        incomeFreeMoneyOctober,
        incomeFreeMoneyNovember,
        incomeFreeMoneyDecember
    } = useData();

    const incomeSumma =
        incomeFreeMoneyJanuary +
        incomeFreeMoneyFebruary +
        incomeFreeMoneyMarch +
        incomeFreeMoneyApril +
        incomeFreeMoneyMay +
        incomeFreeMoneyJune +
        incomeFreeMoneyJuly +
        incomeFreeMoneyAugust +
        incomeFreeMoneySeptember +
        incomeFreeMoneyOctober +
        incomeFreeMoneyNovember +
        incomeFreeMoneyDecember

    const incomeAverage = incomeSumma / 12;

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
                кошти з неба
            </Typography>


            <Box display="flex" justifyContent="center" alignItems="center" className={'IncomeFreeMoney'}>
                <Box className={'IncomeFreeMoney-block'}
                     sx={{
                         background: theme => palette.GreyColor.light,
                         borderRadius: 4,
                         height: '100vh',
                         mr: 5,
                         p: 2,
                         width: '48%'
                     }}>
                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyJanuary}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyFebruary}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyMarch}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyApril}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyMay}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyJune}</Typography>
                    </List>
                </Box>

                <Box className={'IncomeFreeMoney-block'} sx={{
                    background: theme => palette.GreyColor.light,
                    borderRadius: 4,
                    height: '100vh',
                    mr: 5,
                    p: 2,
                    width: '48%'
                }}>
                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyJuly}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyAugust}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneySeptember}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyOctober}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyNovember}</Typography>
                    </List>

                    <List
                        className={'IncomeFreeMoney-block1'}
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
                        }}>{incomeFreeMoneyDecember}</Typography>
                    </List>
                </Box>
            </Box>

            <Typography variant="h6" component="div" gutterBottom sx={{fontWeight: "bold", mt: 1}}>
                кошти з неба за рік: {incomeSumma}
            </Typography>
            <Typography variant="h6" component="div" gutterBottom sx={{fontWeight: "bold"}}>
                Середній дохід від коштів з неба за місяць: {incomeAverage}
            </Typography>
        </Box>
    );
};

export default IncomeFreeMoney;