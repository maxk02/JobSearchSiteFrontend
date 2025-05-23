import { createTheme } from "@mui/material/styles";
import {plPL} from "@mui/material/locale";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#202557",
        },
        secondary: {
            main: "#FF4081",
        },
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    a: {
                        all: "unset",
                        color: "inherit",
                        textDecoration: "none",
                    }
                }
            }
        }
    }
}, plPL);

export default theme;
