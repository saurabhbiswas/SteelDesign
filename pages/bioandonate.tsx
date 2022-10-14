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
        <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="579"
        width="448"
        image="upi_tukul.png"
       />
      <CardContent sx={{pl:10,pb:15}}>
        <Typography gutterBottom component="div">
          Please Donate to If you like the content. 
        </Typography>
        <Typography gutterBottom  component="div">
         It will help me to to serve free content.
         </Typography>
         <Typography gutterBottom component="div">
          Please Donate to If you like the content. 
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
