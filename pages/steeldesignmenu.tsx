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
import { Link } from '@mui/material';


const menuItemsJson = [
 
  { 
    title: '0. Preface and Table of Content ......................................................................................................... 1',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoEJoYBQ8r4tlvgSQ',
    submenu: [
       ' Preface and Table of Content for Design of Steel Structure with STAAD Pro....1',
        
      
    ]
  },
  {
    title: '1. The Architectural Plan, Elevation and Sections ...............................................................................11',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoFsD2oaa5Yv2r84w',
    submenu: [
     'The Architectural Plan ...............................................................................11',
       
      
    ]
  },
  {
    title: '2. The Planning of Framing Plan ......................................................................................................... 11',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoFsD2oaa5Yv2r84w',
    submenu: [
         'The Planning of Framing Plan ......................................................................................................... 11',
     
    ]
  },
  {
    title: '3. Computation of Dead Load and Live Load.......................................................................................15',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoDNfiF6Wm5_ciNqA',
    submenu: [
      ' 3.1 Dead Load Computation of Low bay .................................................................................................15',
       
      ' 3.2 Dead Load Computation of High bay ................................................................................................ 15',
       
     
    ]
  },
  {
    title: '4. Support System‐Pinned or Fixed .....................................................................................................19',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoHIfG7maxLiGGOnQ',
    submenu: [
      ' Support System‐Pinned or Fixed ..................................................................................................... 19'
       
    ]
  },
  {
    title: '5. Initial sizing of the Frame members................................................................................................ 21',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoGc7JhQ7uVFxi4pg',
    submenu: [
    ' 5.1 Standard Plate Sizes .......................................................................................................................... 21',
    ' 5.2 Plate Width to Thickness Ratios as Per Is 800 2007 .......................................................................... 23',
    ' 5.3 Economic Size of Beam and Column .................................................................................................24'
      
    ]
  },






 {
    title: ' 6. The Modeling of Geometry of the Structure in STAAD Pro.............................................................25',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoJBol0cS9QmZWxPw',
    submenu: [
      ' 6.1 Creation of New File for Staad Pro Modelling .................................................................................. 25',
      ' 6.2 Support Assignment for Determining Column Location in Plan and Sections..................................33',
      ' 6.3 Translation Repeat to Create Vertical Members .............................................................................. 37',
      ' 6.4 Adding Beam on Plan View ............................................................................................................... 40',
      ' 6.5 Creation of Members by Intersecting ............................................................................................... 42',
      ' 6.6 Definition and Assignment of Plinth Beams .....................................................................................44',
      ' 6.7 Why Releases Are Applied In Staad Pro............................................................................................47',
      ' 6.8 Fixing Start Node and End Node in A Pattern ................................................................................... 47', 
      ' 6.9 Local Coordinates and Releases........................................................................................................49', 
      ' 6.10 Changing of Releases ...................................................................................................................... 54',
       ' 6.11 Defining Zero Density Material ....................................................................................................... 56', 
       ' 6.12 Assigning Section Sizes to Vertical Members..................................................................................60', 
       ' 6.13 Changing Orientation of Members ................................................................................................. 67', 
       ' 6.14 Creation of Main Beam at First Floor Level ....................................................................................69', 
       ' 6.15 Assign Section to Beam at First Floor Level ....................................................................................82',

       ' 6.16 Creation of Joist at First Floor Level................................................................................................84', 
       ' 6.17 Creation of Staircase Stringers........................................................................................................ 95', 
       ' 6.18 Release of Axial Force in Addition to Flexural Forces for Staircase Stringers...............................105', 
       ' 6.19 Defining Deck Slab as Semi Rigid Diaphragm................................................................................108',
       ' 6.20 Why Semi Rigid Diaphragm as Plane Stress Element.................................................................... 117', 
       ' 6.21 Staircase Waist Slab as Plane Stress Element ............................................................................... 126', 
       ' 6.22 Fixing Orientation of Staircase Stringer ........................................................................................ 129', 
       ' 6.23 Creation of Upper Stories ............................................................................................................. 133', 
       ' 6.24 Modelling Mumty for Staircase .................................................................................................... 139', 
       ' 6.25 Stub Column for Mumty with Releases at Start ........................................................................... 146', 
       ' 6.26 Working out Center to Center Distance for STAAD Model...........................................................150',
      ' 6.26.1 Adjustment of Center to Center Height in STAAD Model......................................................152', 
      ' 6.26.2 Working Out Column Height for Mumty ...............................................................................157', 
      ' 6.26.3 Adjustment of Landing Beam Position................................................................................... 158',
      ' 6.27 Creation of Geometry for Low bay Area.......................................................................................160', 
      ' 6.27.1 Assigning of Member Property for Low Bay Area ............................................................... 164', 
      ' 6.27.2 Adjustment of Rafter at Junction of Low Bay and High Bay ................................................. 170', 
      ' 6.27.3 Creation of Wind Column in End Bay.....................................................................................174', 
      ' 6.27.4 Addtion of Strut and Ties ....................................................................................................... 178', 
      ' 6.27.5 Addition of Roof Braces ......................................................................................................... 180',
      ' 6.28 Addition of Portal Braces in High Bay ........................................................................................... 182', 
      ' 6.29 Addition of Concetric X Braces in Low Bay ...................................................................................188', 
      ' 6.29.1 Addition of Strut in Gable End ............................................................................................... 189',
      ' 6.30 Assignment of New Support after Removal of Support that Helped in Ceration of Geometry .. 191', 
      ' 6.30.1 Assigment of New Support .................................................................................................... 193', 
      ' 6.30.2 Support that are Fixed about One Direction But Released about other Direction...............193', 
      ' 6.31 Checking of Model For Error ......................................................................................................... 196', 
      ' 6.31.1 Assigning First Load Case as Self weight to check for Run Time Error in Model .................. 198', 
      ' 6.31.2 Initial Run for Analysis to look for Warning or Errors in Model............................................202', 
      ' 6.31.3 Removal of Error or Warnings ...............................................................................................204',
      ' 6.31.3 Deletion of First Load Case –Why? ........................................................................................ 206', 
      ' 6.32 Removal of Unnessary Decimals from Node Coordinates in STAAD ........................................... 207',
        ]
  },
  {
    title: '7. The Primary Load Cases................................................................................................................210',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoKwPFe9Q9GBobuHw',
    submenu: [
     ' 7.1 Application of Dead Load and Live Load to Structural Model ........................................................ 212', 
     ' 7.1.1 Assigning Support to Column Nodes to Find Column When We Look At Plan at Any Level ... 212',
     ' 7.1.2 Addition of Cut out as per Architectural Drawing ................................................................... 214', 
     ' 7.1.3 Creation of Floor Group as per Function ................................................................................. 215', 
     ' 7.1.4 Creation of Dummy Member for Wall Load Transfer to Joist.................................................. 220', 
     ' 7.1.5 Numbering of Load Cases ........................................................................................................ 225',
     ' 7.1.6 Creation of Dead Floor Load Case and Assigmment of Floor Dead Load ................................ 225', 
     ' 7.1.7 Assigment of Dead Floor Load To Stringers ............................................................................. 232', 
     ' 7.1.8 Assigment of Cladding Load to Low Bay ................................................................................. 236', 
     ' 7.1.9 Assigment of Dead Load Due to Self Weight of Wall...............................................................240',
     ' 7.2 Assignment of Live Load Using STAAD Editor ................................................................................. 248', 
     ' 7.3 The Water Tank Load. ................................................................................................................. 253', 
     ' 7.4. Seismic Load and its Parameters ...................................................................................................256', 
     ' 7.4.1 Seismic Zone Factor ................................................................................................................. 257', 
     ' 7.4.2 Importance Factor....................................................................................................................257', 
     ' 7.4.3 Response Reduction Factor ..................................................................................................... 257', 
     ' 7.4.4 Design acceleration coefficient................................................................................................ 258', 
     ' 7.4.5 Seismic Parameters for the Building being designed............................................................... 259', 
     ' 7.4.6 Damping ................................................................................................................................... 260', 
     ' 7.5. Application of Seismic Load to Structural Model...........................................................................260', 
     ' 7.5.1 Defining Reference Loads in STAAD Pro for Generation of Seismic Load................................ 261', 
     ' 7.5.2 Cut off Mode for Dynamic Analysis .........................................................................................272',
     ' 7.5.3 Defining Static Seismic Load in STAAD Pro .............................................................................. 273', 
     ' 7.5.4 Defining Load Percentage of Load Participation in Seismic Load Generation.........................274', 
     ' 7.5.5 Addition of Static Seismic Load in all Four Orthogonal Direction in STAAD Pro, Why?...........275',
     ' 7.6 Dynamic Analysis: Time History Method and Response Spectrum Method .................................. 279', 
     ' 7.6.1 Generation of Input file for STAAD Pro as Per Code Specified Spectrum................................280', 
     ' 7.6.2 Defining Parameters for Response Spectrum Analysis‐X, Z and Y Direction ........................... 283', 
     ' 7.6.3 Missing Mass............................................................................................................................285', 
     ' 7.6.4 Moving Dynamic Analysis Cases above Grvaity Load Cases .................................................... 285', 
     ' 7.6.5 Spectrum Data for X, Y, Z Direction for Strength and X, Z direction for Serviceability............288', 
     ' 7.6.6 Why Serviceability Load cases not to be scaled?.....................................................................290', 
     ' 7.7. Computation of Wind loads ........................................................................................................... 291',
     ' 7.7.1 Design wind Pressure...............................................................................................................292',
     ' 7.7.2 Meaning of +Ve and –Ve Sign for Pressure Co‐efficient..........................................................294', 
     ' 7.7.3 External Pressure Co‐efficient..................................................................................................294', 
     ' 7.7.4 Internal Pressure Co‐efficient .................................................................................................. 296', 
     ' 7.7.5 Load Cases for Wind ................................................................................................................297', 
     ' 7.7.6 Computation of Effective Pressure Coefficient and its Global Direction.................................298',
     ' 7.8. Application of Wind load to Structural Model...............................................................................333', 
     ' 7.8.1 Application of Wind Load using Floor Definition ..................................................................... 333', 
     ' 7.8.2 Application of Wind Load as per Design Practice .................................................................... 335', 
     ' 7.8.3 Creation of First Wind Load Case Using STAAD Graphical User Interface(GUI) ...................... 337', 
     ' 7.8.3.1 Application of Wind Load to Rafter‐Use of Local Y Axis of STAAD Pro ................................. 346', 
     ' 7.8.4 Use of STAAD Editor to Create Remaining Wind Load Cases .................................................. 350', 
     ' 7.8.5 Removal of Support above Base Level before “ Run Analysis” Command .............................. 358',
     ]},
      {
       title: ' 8. The Load Combinations................................................................................................................ 362',
      
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoIiXfJYq2anRnYRA',
    submenu: [

      ' 8.1 Load Combinations‐Table 4 of IS 800‐2007. ................................................................................... 362', 
      ' 8.2 Load Combinations‐IS 1893‐2016 ................................................................................................... 362', 
      ' 8.2.1 Additional Load Directions as per IS 1893‐2016 ...................................................................... 362', 
      ' 8.3 Detailed List of Load Combinations for the Building being designed. ............................................ 363', 
      ' 8.3.1 Generation of Load Combinations in STAAD Pro.....................................................................369', 
      ' 8.3.2 Speeding Up of Generation of Load Combination using STAAD Pro Editor.............................372',
      ]},
    {
    title: '9. Performing Analysis and Verification of Load Effects. ...............................................................380',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoLYiGMgge3xv0__A',
    submenu: [
      ' 9.1 Checking of Seimmic Load Generated by STAAD.......................................................................380',
      ' 9.1.1 Comparison of Seismic Load Generated by STAAD Pro with Manual Computation ............... 385', 
      ' 9.2 Verification of Wind Load Applied to STAAD Pro with Manual Computation ................................ 387',
    ]},
    {
    title: '10. Load Envelopes .......................................................................................................................... 389',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoNs6yuolf7KdQw9w',
    submenu: [
      '10. Load Envelopes ..........................................................................................................................389'
    ]},
    {
    title: '11. Grouping of Members as per their Function or Location .......................................................... 391',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoMyYNDkx-UH7sxDQ',
    submenu: [
      '11. Grouping of Members as per their Function or Location ............................................................ 391'
    ]},
     {
    title: '12. The Design Parameters............................................................................................................... 395',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoOUmMMD8GJDQ-_6Q',
    submenu: [
        ' 12.1 Effective Length Parameter of IS 800‐2007 .................................................................................. 395',
        ' 12.2 Sway Frame and Non Sway Frame................................................................................................396', 
        ' 12.2.1 Understanding Code Specified Parameter with Examples of Sway and Non Sway Frame....397', 
        ' 12.2.2 Unstable Frame and Leaning Column .................................................................................... 402',
        ' 12.2.3 P‐Delta or Second Order Analysis‐Comparison with Sway from First Order Analysis ........... 404', 
        ' 12.3 Simple Connection am Moment Connection Explained ............................................................... 414', 
        ' 12.4 Effective Length Parameter about the axis passing thru the centroid of the section .................. 416',
        ' 12.4.1 Codal Provisions of Compression Flange Restrain and Torsional Restrain............................417', 
        ' 12.4.2 How Close a restrain should be to be considered as Compression Flange Restrain? ........... 418',
        ' 12.4.3 Level of Torsional Restrain.....................................................................................................420', 
        ' 12.4.4 Restrain Provided by Flange Bracing from Purlin or Girt.......................................................426', 
        ' 12.4.5 Effective Length of Main Beam or Girder Carrying Metal Deck ,Running Parrallel To Joist .. 427',
        ' 12.5 Assignment of Yield Stress and Other Parameter to STAAD as per Codal Provision .................... 429', 
        ' 12.5.1 Yeild Stress Variation as per Plate Thickness ......................................................................... 430',
        ' 12.5.2 Allowable Slenderness limit Parameter ................................................................................. 434',
        ' 12.6 Assigmment of Effective Length Parameter to STAAD Pro Model ............................................... 435', 
        ' 12.6.1 Effective Length Parameter for Columns...............................................................................436', 
        ' 12.6.2 Effective Length Parameters for Beams................................................................................. 441', 
        ' 12.6.3 Effective Length Parameters for Joist and Stringers..............................................................449', 
        ' 12.6.4 Effective Length Parameters for Rafters................................................................................450', 
        ' 12.6.5 Effective Length Parameter for Bracings, Struts and Ties...................................................... 451',
  ]},

   {
    title: '13. Changing Member Sections, Performing Design ........................................................................452',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoUQKhoCHOA7orhsA',
    submenu: [
      ' 13.1 Selection of Initial Member Sizes and Section Assignment to STAAD Pro.................................... 453',
      ' 13.2 Warning by STAAD Pro: Moment Amplification Factor ................................................................ 458',
      ' 13.3 Checking Design Results................................................................................................................458',
    ]},
{
    title: ' 14. Sizing to Safety and Optimization ............................................................................................... 460',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoQlawLvSqnUzILIA',
    submenu: [
             
          ' 14.1 Resizing of Joist to have Interaction Ratio below 1.0 ................................................................... 460', 
          ' 14.2 Resizing of Column and Beam to have Interaction Ratio below 1.0.............................................461', 
          ' 14.2.1 Column Splicing‐End Plate Type vs Cover Plate Type ............................................................ 461', 
          ' 14.2.2 Addition of Portal Brace at Mumty Area ............................................................................... 463', 
          ' 14.2.3 Checking ArchitechturalandStructuralConstraintwhileResizingBeams..........................465', 
          ' 14.2.4 Checking of Flexural or Shear Failure and Resizing of Member accordingly ........................ 468', 
          ' 14.2.5 Incidence of START Node and END Node in Tapered Beam of STAAD Pro............................469',
]},
{
    title: ' 15. Checking Serviceability and Torsion of the Building. ...................................................................472',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoP7IfjeJkhJpZ6PA',
    submenu: [
          '15.1 Provision of IS 800‐2007 for Serviceability ...................................................................................472',
          '15.1.1 Checking of Inter storey Drift................................................................................................. 476',
          '15.1.2 Deflection Limit Perceptible to Bare eyes..............................................................................477', 
          '15.2 Provision of IS 800‐2007 for Torsional Limits of Buildings............................................................479', 
          '15.2.1 Torsional Limit for rotation due to displacement of Diaphragm...........................................480', 
          '15.2.2 Torsional due to Difference in Fundamental Period of Vibration ......................................... 481',
]},
{
    title: '16. Matching Base Shear and Checking Modal Participation.............................................................482',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoV7KHK2dTda_m0uA',
    submenu: [
      '16.1 General Limit of Scale Factor ........................................................................................................ 484', 
      '16.2 Modal Participation to Include 90 percent of Total Seismic Mass ............................................... 485', 
      '16.2.1 Why Automatic Scaling of Base Shear by STAAD Pro not be used? ...................................... 487', 
      '16.3 Checking of Utilization Ratios after Scaling up the Base Shear .................................................... 487', 
      '16.4 When is it enough to obtain 75% Mass Participation ................................................................. 488',
]},
{
    title: '17. Optimization ...................................................................................................................................490 ',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoSdEklCRcljG4CSQ',
    submenu: [
      '17. Optimization .............................................................................................................................. 490', 
]},
{
    title: '18. Connection Design .........................................................................................................................492',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoT6mQsSFcLdpFBRg',
    submenu: [
      '18.1. Fixed Connections (Moment Connections or Rigid Connections) ............................................... 492', 
      '18.2. Simple Connections (Shea Connections or Hinge Connections)..................................................492', 

]},
{
    title: '19. Purlin and Girt Design ....................................................................................................................494',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoRePy_45qhfUNDgg',
    submenu: [
      '19. Purlin and Girt Design ................................................................................................................ 494', 
]},
{
    title: '20. Data to Detailer for Preparation of Structural General Arrangement Drawings............................494',
    url: 'https://1drv.ms/b/s!AusqigDnpThtgYoRePy_45qhfUNDgg',
    submenu: [
      '20. Data to Detailer for Preparation of Structural General Arrangement Drawings........................... 494', 
]},


];

//JSON  MENU ENDS HERE....

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
  textDecoration: 'none'
}));




export const SubMenu = ({submenus,link}) => {
//console.log(submenus);
  return (
  <div>
      
      {submenus.map((submenu, index) => (

     <div>
        <Link
    underline="hover"
    color="inherit" 
    href={link} target="_blank"
  >
          
          {submenu}
     </Link>
        </div>
       
      ))}
    </div>
     
  );
};




export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel0');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>

   
        {  menuItemsJson.map((item, index) => {
             
              let  panelIndex='panel'+index;
              let pheader=panelIndex+'-header';
               //console.log(panelIndex);
          return (

         <Accordion expanded={expanded === panelIndex} onChange={handleChange(panelIndex)}>
         <AccordionSummary aria-controls={panelIndex+'-content'} id={pheader}>
          <Typography>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <MenuList>

         <SubMenu submenus={item.submenu}  link={item.url}/>

         </MenuList >
        </AccordionDetails>

      </Accordion>
      )
      })}

      
        
          
     

      

     
    </div>
  );
}

