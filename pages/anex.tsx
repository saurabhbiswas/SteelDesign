import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

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
     
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        ANEX-I PURLIN AND GIRT DESIGN
      </Fab>
       <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        ANEX-II CONNECTION
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        ANEX-III DATA TO DEATAILER
      </Fab>

    </div>
  );
}
