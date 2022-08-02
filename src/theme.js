import {createTheme} from "@mui/material/styles";
import {blue, deepPurple, grey} from "@mui/material/colors";


export const colors = {
    primary: {
        main: deepPurple[600],
        light: deepPurple[50],
        dark: deepPurple[800],
    },
    secondary: {
        main: blue[600],
        light: blue[50],
        dark: blue[800],
    },
    GreyColor: {
        main: grey[600],
        light: grey[50],
        dark: grey[800],
    }
};


export const theme = createTheme({
    palette: colors,
});
