import React from 'react';
import {Box, Typography} from "@mui/material";
import List from "@mui/material/List";

import './IncomeDepositsStyle.css';
import {colors as palette} from "../../../theme";
import {useData} from "../../../context/DataProvider";


const IncomeDeposits = () => {

    const {
        incomeDepositsJanuary,
        incomeDepositsFebruary,
        incomeDepositsMarch,
        incomeDepositsApril,
        incomeDepositsMay,
        incomeDepositsJune,
        incomeDepositsJuly,
        incomeDepositsAugust,
        incomeDepositsSeptember,
        incomeDepositsOctober,
        incomeDepositsNovember,
        incomeDepositsDecember
    } = useData();

    const incomeSumma = incomeDepositsJanuary +
        incomeDepositsFebruary +
        incomeDepositsMarch +
        incomeDepositsApril +
        incomeDepositsMay +
        incomeDepositsJune +
        incomeDepositsJuly +
        incomeDepositsAugust +
        incomeDepositsSeptember +
        incomeDepositsOctober +
        incomeDepositsNovember +
        incomeDepositsDecember

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
                відсотки з вкладів
            </Typography>


            <Box display="flex" justifyContent="center" alignItems="center" className={'IncomeDeposits'}>
                <Box className={'IncomeDeposits-block'}
                     sx={{
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
                        }}>{incomeDepositsJanuary}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsFebruary}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsMarch}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsApril}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsMay}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsJune}</Typography>
                    </List>
                </Box>

                <Box className={'IncomeDeposits-block'}
                     sx={{
                         background: theme => palette.GreyColor.light,
                         borderRadius: 4,
                         height: '100vh',
                         mr: 5,
                         p: 2,
                         width: '48%'
                     }}>
                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsJuly}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsAugust}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsSeptember}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsOctober}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsNovember}</Typography>
                    </List>

                    <List
                        className={'IncomeDeposits-block1'}
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
                        }}>{incomeDepositsDecember}</Typography>
                    </List>
                </Box>
            </Box>

            <Typography variant="h6" component="div" gutterBottom sx={{fontWeight: "bold", mt: 1}}>
                відсотки від вкладів за рік: {incomeSumma}
            </Typography>
            <Typography variant="h6" component="div" gutterBottom sx={{fontWeight: "bold"}}>
                Середні відсотки від вкладів за місяць: {incomeAverage}
            </Typography>
        </Box>
    );
};

export default IncomeDeposits;