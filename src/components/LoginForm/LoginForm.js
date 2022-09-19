import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {signInWithGoogle} from '../../firebase-config';

import {useForm} from 'react-hook-form';
import { useState } from 'react';
import './../LoginForm/LoginForm.css';

export default function LoginForm() {

    const [authMode, setAuthMode] = useState("signin");

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
        reset();
    };

    const changeLoginToResetPass = () => {
        setAuthMode(authMode === "signin" ? "resetPassForm" : "signin");
        reset();
    }

    const loginWithGoogle = () => {
      setAuthMode(authMode === "signin" ? "loginwithGoogle" : "signin");
      reset();
  }

    //react-hook-form settings
    const {
        register,
        formState : {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onChange'
    });

    //sent data to server on buttonClick
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }

    // render SignIn form
    if (authMode === "signin") {
        return (
            <Container component="main"  sx={{
                mt: 1, mb: 1 , 
                float: 'right',
                width: '300px',
                padding: '0 !important',
                zIndex: 1
            }} >
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                marginTop: 7,
                bgcolor: '#e3f2fd',
                padding: '10px 20px',
                borderRadius: '20px',
                boxShadow: `0px 10px 13px -6px rgb(0 0 0 / 20%),
                            0px 20px 31px 3px rgb(0 0 0 / 14%),
                            0px 8px 38px 7px rgb(0 0 0 / 12%)`,
                zIndex: 1,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" >
                Sign in
              </Typography>
    
              <Box component="form" onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1 }}>
                <TextField 
                  margin="dense"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  autoFocus
                  size="small"
                  {...register('userLogin', {
                    required : "Обовязкове поле для заповнення",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Введіть валідну пошту"
                    }
                  })}
                />
                {errors.userLogin && <p className="errorMessage">{errors?.userLogin?.message}</p>}
    
                <TextField
                  margin="dense"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  size="small"
                  {...register('userPassword', {required : true})}
                />
                {errors.userPassword && <p className="errorMessage">Обовязкове поле для заповнення</p>}
    
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Запам'ятати мене"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                    Увійти
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" onClick={changeLoginToResetPass} >
                      Забули пароль ?
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link href="#" variant="body2" onClick={loginWithGoogle} >
                      Google логінація 
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" onClick={changeAuthMode} variant="body2">
                      {"Немаєте акаунту ? Зареєструйтесь"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
            
        )
    };

    //render resetPass form
    if (authMode === "resetPassForm") {
        return (
            <Container component="main"  sx={{
                mt: 1, mb: 1 , 
                float: 'right',
                width: '300px',
                padding: '0 !important',
                zIndex: 1
            }} >
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                marginTop: 7,
                bgcolor: '#e3f2fd',
                padding: '10px 20px',
                borderRadius: '20px',
                boxShadow: `0px 10px 13px -6px rgb(0 0 0 / 20%),
                            0px 20px 31px 3px rgb(0 0 0 / 14%),
                            0px 8px 38px 7px rgb(0 0 0 / 12%)`,
                zIndex: 1,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" >
               Reset Password
              </Typography>
    
              <Box component="form" onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1 }}>
                <TextField 
                  margin="dense"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  autoFocus
                  size="small"
                  {...register('userLogin', {
                    required : "Обовязкове поле для заповнення",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Введіть валідну пошту"
                    }
                  })}
                />
                {errors.userLogin && <p className="errorMessage">{errors?.userLogin?.message}</p>}
    
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                    Скинути пароль
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" onClick={changeLoginToResetPass} >
                      {"Повернутись до входу"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        )
    }

    // render SignUp form
    if (authMode === "signup") {
        return (

            <Container component="main"  sx={{
                    mt: 1, mb: 1 , 
                    float: 'right',
                    width: '300px',
                    padding: '0 !important'
                    
                }} >
                    
                <CssBaseline />
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    marginTop: 7,
                    bgcolor: '#e3f2fd',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    boxShadow: '0px 10px 13px -6px rgb(0 0 0 / 20%), 0px 20px 31px 3px rgb(0 0 0 / 14%), 0px 8px 38px 7px rgb(0 0 0 / 12%)',
                    zIndex: 1,
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" >
                    Sign Up
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1 }}>
                <TextField 
                    margin="dense"
                    fullWidth
                    id="UserName"
                    label="User Name"
                    name="userName"
                    autoComplete="off"
                    autoFocus
                    size="small"
                    {...register('UserName', {
                        required : "Обовязкове поле для заповнення",
                    })}
                    />
                    {errors.UserName && <p className="errorMessage">{errors.UserName.message}</p>}
                    
                    <TextField 
                    margin="dense"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="off"
                    autoFocus
                    size="small"
                    {...register('userLogin', {
                        required : "Обовязкове поле для заповнення",
                        pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Введіть валідну пошту"
                        }
                    })}
                    />
                    {errors.userLogin && <p className="errorMessage">{errors?.userLogin?.message}</p>}

                    <TextField
                    margin="dense"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                    {...register('userPassword', {required : true})}
                    />
                    {errors.userPassword && <p className="errorMessage">Обовязкове поле для заповнення</p>}

                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Запам'ятати мене"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Зареєструватись
                    </Button>
                    <Grid container>
                    <Grid item>
                        <Link href="#" onClick={changeAuthMode} variant="body2">
                        {"Повернутись до Входу"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
            
        );
    }   



    if (authMode === "loginwithGoogle") {
      return (
          <Container component="main"  sx={{
              mt: 1, mb: 1 , 
              float: 'right',
              width: '300px',
              padding: '0 !important',
              zIndex: 1
          }} >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              marginTop: 7,
              bgcolor: '#e3f2fd',
              padding: '10px 20px',
              borderRadius: '20px',
              boxShadow: `0px 10px 13px -6px rgb(0 0 0 / 20%),
                          0px 20px 31px 3px rgb(0 0 0 / 14%),
                          0px 8px 38px 7px rgb(0 0 0 / 12%)`,
              zIndex: 1,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" >
              Google логінація
            </Typography>
  
            <Box component="form" onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={signInWithGoogle}

                sx={{ mt: 3, mb: 2 }}
              >
                  Увійти з допомогою Google акаунту
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" onClick={changeAuthMode} variant="body2">
                    {"Повернутися на сторінку входу"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
          
      )
  };
}