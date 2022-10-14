import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';


const menuItemsJson = [
 
  {
    title: '0. Preface and Table of Content ......................................................................................................... 1',
    url: '/0.Preface and Table of Content.pdf',
    submenu: [
      {
        title: ' Preface and Table of Content for Design of Steel Structure with STAAD Pro....1',
        
      }
    ]
  },
  {
    title: '1. The Architectural Plan, Elevation and Sections ...............................................................................11',
    url: '1& 2.Architerural Scheme and Plaing of Frame.pdf',
    submenu: [
      {
        title: 'The Architectural Plan ...............................................................................11',
       
      }
    ]
  },
  {
    title: '2. The Planning of Framing Plan ......................................................................................................... 11',
    url: '1& 2.Architerural Scheme and Plaing of Frame.pdf',
    submenu: [
      {
        title: 'The Planning of Framing Plan ......................................................................................................... 11',
       
      }
    ]
  },
  {
    title: '3. Computation of Dead Load and Live Load.......................................................................................15',
    url: '/3. Computation of Dead Load and Live Load.pdf',
    submenu: [
      {
        title: '3.1 Dead Load Computation of Low bay .................................................................................................15',
       
      },
      {
        title: '3.2 Dead Load Computation of High bay ................................................................................................ 15',
       
      }

    ]
  },
  {
    title: '4. Support System‐Pinned or Fixed .....................................................................................................19',
    url: '/4. Support System-Pinned or Fixed.pdf',
    submenu: [
      {
        title: ' Support System‐Pinned or Fixed ..................................................................................................... 19'
       }
    ]
  },
  {
    title: '5. Initial sizing of the Frame members................................................................................................ 21',
    url: '/5.Intitial Sizing of Frame Members.pdf',
    submenu: [
      {
        title: '5.1 Standard Plate Sizes .......................................................................................................................... 21 ',
       
      },
      {
        title: '5.2 Plate Width to Thickness Ratios as Per Is 800 2007 .......................................................................... 23',
      },
      {
        title: '5.3 Economic Size of Beam and Column .................................................................................................24',
      }


    ]
  },


 


  
];



const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const Dropdown = ({ submenus }) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};


export const SubMenu = ({ submenus }) => {
  return (
  <div>
      
      {submenus.map((submenu, index) => (
        <MenuItem>
          <ListItemText inset>
          {submenu.title}
          </ListItemText>
        </MenuItem>
      ))}
    </div>
     
  );
};



export default function CustomizedAccordions({ items }) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>

   
        {  menuItemsJson.map((item, index) => {
             
              let  panelIndex='panel'+index;
               //console.log(panelIndex);
          return (

         <Accordion expanded={expanded === panelIndex} onChange={handleChange(panelIndex)}>
         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <MenuList>

         <SubMenu submenus={item.submenu} />

         </MenuList >
        </AccordionDetails>

      </Accordion>
      )
      })}

      
        
          
     

      

     
    </div>
  );
}

