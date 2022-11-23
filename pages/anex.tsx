import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Link from '@mui/material/Link';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Fab variant="extended" sx={{paddingRight: 5}}>
        <NavigationIcon className={classes.extendedIcon} />
        <Link
    underline="hover" href='https://1drv.ms/f/s!AusqigDnpThtgYoXXhIzcavv65Ucng'
    color="inherit" target="_blank"> ANEX-I PURLIN AND GIRT DESIGN</Link>
      </Fab>
       <Fab variant="extended"  sx={{paddingRight: 5}}>
        <NavigationIcon className={classes.extendedIcon}  />
         <Link
    underline="hover" href='https://1drv.ms/f/s!AusqigDnpThtgYoatbDaNYf0k75glQ'
    color="inherit" target="_blank">

        ANEX-II CONNECTION</Link>
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} sx={{paddingRight: 5}} />
         <Link
    underline="hover" href='https://1drv.ms/f/s!AusqigDnpThtgYpQiJHBjUEM5UfjzA' 
    color="inherit" target="_blank">
        ANEX-III DATA TO DETAILER </Link>
      </Fab>

      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon}  />
         <Link
    underline="hover" href='https://1drv.ms/u/s!AusqigDnpThtgYtfJujxK89pqgyQeQ' 
    color="inherit" target="_blank">
        STAAD Template </Link>
      </Fab>

    </div>
  );
}
