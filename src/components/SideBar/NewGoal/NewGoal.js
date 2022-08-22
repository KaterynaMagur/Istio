import React from 'react';
import {useForm} from "react-hook-form";

import './NewGoalStyle.css';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";


const NewGoal = () => {
    const {register, formState: {errors}, handleSubmit, reset,} = useForm({mode: 'onChange'});


    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }

    return (
        <Container component="main" className={'NewGoal'}
                   sx={{
                       float: 'right',
                       width: '40rem',
                       padding: '0 !important',
                       zIndex: 1
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
                    boxShadow: `0px 10px 13px -6px rgb(0 0 0 / 20%),
                            0px 20px 31px 3px rgb(0 0 0 / 14%),
                            0px 8px 38px 7px rgb(0 0 0 / 12%)`,
                    zIndex: 1,
                }}
            >

                <Typography component="h1" variant="h5">
                    назва цілі
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 1}}>
                    <TextField
                        margin="dense"
                        fullWidth
                        name="Password"
                        label="назва цілі"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        size="small"
                        {...register('userPassword', {required: true})}
                    />
                    {errors.userPassword && <p className="errorMessage">Обовязкове поле для заповнення</p>}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Увійти
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default NewGoal;