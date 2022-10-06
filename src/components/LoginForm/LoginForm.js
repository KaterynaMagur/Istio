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
import { useAuth } from '../../context/AuthContext';

import {useForm} from 'react-hook-form';
import { useState, useEffect } from 'react';
import './../LoginForm/LoginForm.css';


  const clearUserState = { email: '', password: '', password2: '' };
  const initialLoginForm = {email: '', password: ''};

export default function LoginForm() {

    const [authMode, setAuthMode] = useState("signin");

    const { signUp } = useAuth();
    const {login} = useAuth();
    const {signInWithGoogle} = useAuth();

    const [userForm, setUserForm] = useState(clearUserState);
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
    

   

    useEffect(() => {
      setUserForm(clearUserState);
    }, []);
  
    const handleLogin = async () => {
      const {email, password} = loginForm;
      if (!password || !email) {
        return setError("Please input credentials");
      }
      setError('');
      setLoading(true);
      try {
        await login({email, password});
      } catch (e) {
        const err = e;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  
    const handleChange = ({target: {value, name}}) => {
      setError('');
      setLoginForm({...loginForm, [name]: value});
    }
    const handleChangeSign = ({ target: { value, name } }) => {
      setError('');
      setUserForm({ ...userForm, [name]: value });
    }

    //react-hook-form settings
    const {
        register,
        reset,
    } = useForm({
        mode: 'onChange'
    });

    //sent data to server on buttonClick
    const handleSubmit = async() => {
      const { email, password, password2 } = userForm;
      if (password !== password2) {
        return setError("Passwords do not match");
      }
      setLoading(true);
      setError('');
      try {
        await signUp({ email, password });
      } catch (e) {
        const err = e;
        setError(err.message);
      } finally {
        setLoading(false);
      }
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
                 Login
              </Typography>
    
              <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
                <TextField 
                  margin="dense"
                  fullWidth
                  name="email"
                  type='email'
                  onChange={handleChange}
                  value={loginForm.email}
                  id="email"
                  label="Email Address"
                  
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
                
    
                <TextField
                  margin="dense"
                  fullWidth
                  onChange={handleChange}
                  value={loginForm.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  size="small"
                  {...register('userPassword', {required : true})}
                />
                
    
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Запам'ятати мене"
                />
                <Button
                  disabled={loading}
                  type="submit"
                  onClick={handleLogin}
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
    
              <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
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

                <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
                <TextField 
                    margin="dense"
                    fullWidth
                    id="email"

                    onChange={handleChangeSign}
                    value={userForm.email}
                    label="Email Address"
                    name="email"
                    type='email'
                    autoComplete="off"
                    autoFocus
                    size="small"
                    {...register('userLogin', {
                        required : "Обовязкове поле для заповнення",
                    })}
                    />
                    
                    
                    <TextField 
                    margin="dense"
                    fullWidth
                   
                    onChange={handleChangeSign}
                    value={userForm.password}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                    {...register('userPassword', {
                        required : "Обовязкове поле для заповнення",
                        pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Введіть валідну пошту"
                        }
                    })}
                    />
                  

                    <TextField
                    margin="dense"
                    fullWidth
                    onChange={handleChangeSign}
                    value={userForm.password2}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                    {...register('userPassword', {required : true})}
                    />
                  

                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Запам'ятати мене"
                    />
                    <Button
                    disabled={loading}
                    type="submit"
                    fullWidth
                    onClick={handleSubmit}
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
  
            <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
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