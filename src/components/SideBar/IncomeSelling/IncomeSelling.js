import React from 'react';
import {Box, Typography} from "@mui/material";
import List from "@mui/material/List";

import './IncomeSellingstyle.css';
import {colors as palette} from "../../../theme";
import {useData} from "../../../context/DataProvider";


const IncomeSelling = () => {

    const {
        incomeSellingJanuary,
        incomeSellingFebruary,
        incomeSellingMarch,
        incomeSellingApril,
        incomeSellingMay,
        incomeSellingJune,
        incomeSellingJuly,
        incomeSellingAugust,
        incomeSellingSeptember,
        incomeSellingOctober,
        incomeSellingNovember,
        incomeSellingDecember
    } = useData();

    const incomeSumma =
        incomeSellingJanuary +
        incomeSellingFebruary +
        incomeSellingMarch +
        incomeSellingApril +
        incomeSellingMay +
        incomeSellingJune +
        incomeSellingJuly +
        incomeSellingAugust +
        incomeSellingSeptember +
        incomeSellingOctober +
        incomeSellingNovember +
        incomeSellingDecember

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
                дохід від продажу товарів
            </Typography>


            <Box display="flex" justifyContent="center" alignItems="center" className={'IncomeSelling'}>
                <Box className={'IncomeSelling-block'}
                     sx={{
                         background: theme => palette.GreyColor.light,
                         borderRadius: 4,
                         height: '100vh',
                         mr: 5,
                         p: 2,
                         width: '48%'
                     }}>
                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingJanuary}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingFebruary}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingMarch}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingApril}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingMay}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingJune}</Typography>
                    </List>
                </Box>

                <Box className={'IncomeSelling-block'} sx={{
                    background: theme => palette.GreyColor.light,
                    borderRadius: 4,
                    height: '100vh',
                    mr: 5,
                    p: 2,
                    width: '48%'
                }}>
                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingJuly}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingAugust}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingSeptember}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingOctober}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingNovember}</Typography>
                    </List>

                    <List
                        className={'IncomeSelling-block1'}
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
                        }}>{incomeSellingDecember}</Typography>
                    </List>
                </Box>
            </Box>

            <Typography variant="h6" component="div" gutterBottom sx={{fontWeight: "bold", mt: 1}}>
                відсотки від продажу товарів за рік: {incomeSumma}
            </Typography>
            <Typography variant="h6" component="div" gutterBottom sx={{fontWeight: "bold"}}>
                Середні відсотки від продажу товарів за місяць: {incomeAverage}
            </Typography>
        </Box>
    );
};

export default IncomeSelling;