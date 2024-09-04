import { useState } from 'react';
import { Container,Typography,Grid,Button,Card,CardActions,Box,Tab } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import DataAnnotationServices from './sub-components/DataAnnotationServices';
import "./sub-components/services.css"
import ProvidingPlatform2 from './sub-components/ProvidingPlatform2';

const tabDesign = {
  fontWeight: 'bold',
  fontSize: {
    xs: '.8rem',  // Default for xs
    sm: '1.25rem',
    md: '1.5rem',
  },
  mx: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
  },
  // Custom styles using @media query for very small screens within 'xs'
  '@media (max-width: 350px)': {
    fontSize: '.55rem', // Adjust font size for screens smaller than 360px
    mx: 0.5, // Adjust margin for very small screens
  },
   '@media (min-width: 350px) and (max-width: 400px)': {
    fontSize: '.65rem'
   },
};


function Services() {

  const [value, setValue] = useState('1');
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
   
    {/* <div>
      <Container maxWidth="lg" style={{backgroundColor:"red"}}>
        <Typography variant='h4' align='center' style={{marginTop:"30px",color:"blue"}}>
              Our Offered Services are as follows-
        </Typography>
        <Grid container spacing={5}  justifyContent="center" style={{marginTop:"20px"}}>
          {
            servicesData.map((ele,i)=>{
              return(
                <Grid item sm={12} md={6} lg={3} key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ maxWidth: 345 }} align="center" style={{padding:"10px",marginBottom:"20px"}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={ele.image}
                        alt="services image"
                        style={{borderRadius:"5px"}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {ele.title}
                        </Typography>
                       
                      </CardContent>
                   </CardActionArea>
                   <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button variant="contained" size="medium"  >
                        <Link className='text-light' to={ele.link}>
                            Explore More..
                         </Link>
                       </Button>
                   </CardActions>
               </Card>
  
            </Grid>
              )
            })
          }
        </Grid>
      </Container>
      </div> */}

     


  <div style={{marginTop:"30px",marginBottom:"75px"}}>
      
<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList 
          onChange={handleChange} aria-label="lab API tabs example" centered>

            <Tab label={
            <>
                A. DATA ANNOTATION
                <br />
                SERVICES 
            </>} 
            value="1" 
             sx={tabDesign} />

            <Tab 
            label={
            <>
                B. PROVIDING PLATFORM
                <br />
                  SERVICE  
            </>}
            value="2"  
            sx={tabDesign} 
             />
          </TabList>
        </Box>
        <TabPanel value="1"><DataAnnotationServices/></TabPanel>
        <TabPanel value="2"><ProvidingPlatform2/></TabPanel>
      </TabContext>
    </Box>
  


</div>

    </>
  )
}

export default Services