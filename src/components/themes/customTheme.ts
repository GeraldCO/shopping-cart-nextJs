import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }
  

  const customTheme = createTheme({
    components:{
      MuiTabs:{
        styleOverrides:{
          flexContainer:{
            display: 'flex',
            justifyContent: 'end'
          }
        }
      },
      MuiToolbar:{
        styleOverrides:{
          root:{
            width: '48%',
            margin: '0 auto'
          }
        }
      }
    },
    status: {
      danger: orange[500],
    },
  });

export default customTheme;