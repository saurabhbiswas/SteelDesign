
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SteelDesignMenu from './steeldesignmenu';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Fab from '@material-ui/core/Fab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function Introduction() {
  return (
  

  


      <Card elevation={3} sx={{  p: 2 ,height: 720 ,overflow:'auto'}}>
      <CardMedia
        component="img"
        alt="hiring"
        height="430"
        width="100%"
        image="sb.png"
       />
      <CardContent>

       <Fab variant="extended">
       Introduction
       </Fab>
           <div>
          The Theory at the back of the design of Steel Structure is usually taught during B.E. /B. Tech program in Civil Engineering and its allied discipline like M.E. /M. Tech in Structural Engineering. Practical implementation of these theory to actual design of structure to be constructed, strengthened or modified remains a hurdle to freshly passed out engineers , many a times to experienced engineers as well.
        
           The author of this write up has put up his experience of “One Quarter Century “of professional practice, to showcase the design of building with two floors with flat roof for office uses, to which a single storied warehouse or work shop is attached, using STAAD Pro V8i software, Select Series 6 of Bentley and explained implementation of various code specified provisions (the provision of IS codes), both to analysis and design. Thus the design methodology used in this write up can be extended to both multistoried Steel structure as well as pre‐engineered Ware house type Steel buildings. However, for this particular building, provisions of chapter 12 of IS 800‐2007(Seismic design and detailing provision) has been excluded, as most PEB Vendors usually do not implement it. In the next edition of this Book, same shall be appended, to showcase how the provisions of chapter 12 can be implemented using STAAD Pro with the aid of Spread Sheets. 
  
          Usually PEB Warehouse type Building are provided with EOT Crane, Work on example of Building with Crane with Crane runway beam using STAAD Pro with the aid of Spread Sheets in progress and same shall be also appended to the next edition of this book. Author is Certified Computer Programmer, Author deliberately did not write any Macro’s for the Spread Sheet developed for this book as Macros results in undesirable security warnings.
          Author recommends, before starting with the Example Building in this book, to practice with the Simple Tutorial Given under “Content” of Help Menu in STAAD Pro.
      </div>
       </CardContent>
     </Card>
     
        )};