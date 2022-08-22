import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormHelperText, InputAdornment, InputLabel,
  OutlinedInput,
  useFormControl
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'яка Ваша ціль?';
    }

    return 'Хочу беху';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}


export const InputGoal = (props) => {
  return (props.trigger) ? ( <Card sx={{ minWidth: 275 }} className="popup">
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="primary.dark" fontWeight="700" gutterBottom>
        Внесіть дані про Вашу ціль
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ m: 1, width: '25ch' }}>
          <OutlinedInput placeholder="Please enter text" />
          <MyFormHelperText />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} >
          <InputLabel htmlFor="outlined-adornment-amount">Сума</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </Box>
    </CardContent>
    <CardActions>
      <Button size="small" className="save-btn" onClick={ () => props.setTrigger(false)}>Зберегти</Button>
      { props.children }
    </CardActions>
  </Card> ) : "";
}