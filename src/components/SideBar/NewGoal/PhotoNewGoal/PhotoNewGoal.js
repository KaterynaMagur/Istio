import React from 'react';
import {useForm} from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './PhotoNewGoalStyle.css';
import {colors as palette} from "../../../../theme";


const PhotoNewGoal = ({setShowGoal, showNewGoal}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        let wrapper = document.querySelector('.setPhoto');
        let img = document.createElement('img');
        wrapper.appendChild(img);
        img.src = data.photoGoal[0].name
    }


    return (
        <Container component="main" className={'PhotoNewGoal'}
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

                <div className={'iconClouse'}>
                    <HighlightOffIcon
                        onClick={() => setShowGoal(!showNewGoal)}
                        sx={{color: theme => palette.primary.dark}}
                    />
                </div>


                <Typography component="h1" variant="h5" sx={{fontWeight: 'bold'}} className={'PhotoNewGoalText'}>
                    додати фото цілі
                </Typography>

                <div className={'setPhoto'}>

                </div>


                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 1}}>
                    <input {...register('photoGoal')} type="file" name="photoGoal" className={'inputPhoto'}/>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, pt: 1, pb: 1, fontSize: 20}}
                    >
                        додати фото
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
export default PhotoNewGoal;

