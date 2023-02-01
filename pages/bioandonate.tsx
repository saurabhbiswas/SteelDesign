import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import SarojBio from './sarojbio';
import Intro from './introduction';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={4} >
         <SarojBio/>
        </Grid>
        <Grid xs={4} >
        <Card elevation={3} sx={{  p: 2 }}>
      <CardMedia
        component="img"
        alt="hiring"
        height="500"
        width="100%"
        image="hire.jpg"
       />
      <CardContent sx={{pl:10,pb:15}}>
        <Typography gutterBottom component="div">
          SELECTION OF TRAINEE STRUCTURAL DESIGNER CUM DETAILER 
        </Typography>
        <Typography gutterBottom  component="div">
         (FOR DIPLOMA IN CIVIL ENGG. AND RESIDENTS OF PORT BLAIR)
         </Typography>
         <Typography gutterBottom component="div">
         <Fab variant="extended">
           <Link
    underline="hover"
    color="blue" sx={{padding:2}}
    href="#hireId" target="_self"
  >JOB DETAILS </Link>
  </Fab>
        </Typography>
     </CardContent>
     </Card>
        </Grid>

        <Grid xs={4}  >
          <Intro  />
        </Grid>
       </Grid>
    </Box>
  );
}
