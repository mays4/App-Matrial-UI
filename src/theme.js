import { createTheme } from "@material-ui/core";
// import { gray } from "@material-ui/cor/colors";
import { grey, red} from '@material-ui/core/colors';
export const theme = createTheme({
  
  palette:{
    primary:{
      main:grey[50],
    }
  },
  myButton:{
    backgroundColor :"red",
    color:"white",
    border:"1px solid black"
  }
})