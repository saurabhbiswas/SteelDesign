import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

export default function ImgMediaCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="430"
        width="100%"
        image="saroj.png"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Saroj Biswas
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
         <List>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="B.E. in Civil (Gold Medallist, Mysore Univ.)" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="M.Tech in Structure (IIT, Delhi)" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Sun Certified Java Programmer" />
            </ListItemButton>
          </ListItem>

<ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="sarojbiswas@gmail.com" />
            </ListItemButton>
          </ListItem>
          </List>
        </Typography>
      </CardContent>
   
    </Card>
  );
}


