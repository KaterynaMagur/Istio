import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './PhotoNewGoalStyle.css';
import {colors as palette} from "../../../../theme";


const PhotoNewGoal = ({setShowGoal, showNewGoal, setCurrentForm}) => {
    const {register, handleSubmit} = useForm();
    const [selectedFile, setSelectedFile] = useState();

    const fileReader = new FileReader();

    const handleOnchange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        setSelectedFile(file);
    }

    const onSubmit = () => {
        let wrapper = document.querySelector('.setPhoto');
        fileReader.readAsDataURL(selectedFile);
        fileReader.onload = function (e) {
            wrapper.innerHTML = '<img src="' + this.result + '" alt="photoGoal"/>'
        }
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

                <div className={'iconClose'}>
                    <ArrowBackIcon
                        sx={{color: theme => palette.primary.dark}}
                        onClick={() => setCurrentForm('nameGoal')}
                    />
                    <HighlightOffIcon
                        onClick={() => setShowGoal(!showNewGoal)}
                        sx={{color: theme => palette.primary.dark}}
                    />
                </div>

                <Typography component="h1" variant="h5" sx={{fontWeight: 'bold', mt: 2}} className={'PhotoNewGoalText'}>
                    додати фото цілі
                </Typography>

                <div className={'setPhoto'}>
                </div>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 1}}>
                    <input {...register('photoGoal')}
                           type="file"
                           className={'inputPhoto'}
                           accept={"image/*,.png,.jpg,.gif,.web"}
                           onChange={handleOnchange}
                    />

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

