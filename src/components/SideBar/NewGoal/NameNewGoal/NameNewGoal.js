import React from 'react';
import {useForm} from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import './NameNewGoalStyle.css';
import {colors as palette} from "../../../../theme";


const NameNewGoal = ({setCurrentForm}) => {
    const {register, formState: {errors}, handleSubmit, reset,} = useForm();

    const onSubmit = (data) => {
        if (data) {
            setCurrentForm('photoGoal')
        }
        reset();
    }

    return (
        <Container component="main" className={'NameNewGoal'}
                   sx={{
                       width: '50rem',
                       padding: '0 !important',
                       zIndex: 10,
                       borderRadius: '20px',
                       background: theme => palette.GreyColor.light,
                       boxShadow: '2px 2px purple, -2px -2px purple',
                   }}>
            <CssBaseline/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    marginTop: 7,
                    background: '#e3f2fd',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    mt: 0
                }}>
                <Typography component="h1" variant="h5" sx={{fontWeight: 'bold'}} className={'NameNewGoalText'}>
                    назва цілі
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 1, width: '100%'}}>
                    <TextField
                        margin="dense"
                        fullWidth
                        className={'inputNameGoal'}
                        name="Password"
                        label="назва цілі"
                        type="password"
                        autoComplete="current-password"
                        {...register('nameGoal', {required: true})}
                    />
                    {errors.nameGoal && <p className="errorMessage">Обов'язкове поле для заповнення</p>}

                    <Typography component="h1" variant="h5" sx={{fontWeight: 'bold'}} className={'NameNewGoalText'}>
                        запланована сума
                    </Typography>
                    <TextField
                        margin="dense"
                        fullWidth
                        className={'inputNameGoal'}
                        name="Password"
                        label="запланована сума"
                        type="password"
                        autoComplete="current-password"
                        {...register('priceGoal', {required: true})}
                    />
                    {errors.priceGoal && <p className="errorMessage">Обов'язкове поле для заповнення</p>}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, pt: 1, pb: 1, fontSize: 20}}
                    >
                        додати ціль
                    </Button>

                </Box>
            </Box>
        </Container>
    );
};

export default NameNewGoal;