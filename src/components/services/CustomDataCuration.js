import { useState,useEffect } from 'react';
import {  Container,Grid,Box, Typography ,Card,Tab } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MessageForm from '../home/MessageForm';
import CDA1 from './sub-components/CDA1';
import CDA2 from './sub-components/CDA2';

const tabDesign={
    fontWeight: 'bold', 
    fontSize: {
      xs: '1.25rem',  
      sm: '1.5rem', 
      md: '1.5rem'
    },
    mx: {
      xs: 1,       
      sm: 2,       
      md: 3,       
      lg: 4
    }
  }
  
  const tabDesign2 = {
    color: "white", // Default color
    fontWeight: 'bold',
    marginTop:"20px",
    fontSize: {
      xs: '1rem',
      sm: '1rem',
      md: '1.25rem'
    },
    mx: {
      xs: 0.5,
      sm: 1,
      md: 2,
      lg: 4
    },
    '&.Mui-selected': {
      color: 'yellow', // Text color when selected (active)
    
    }
  };
  
function CustomDataCuration() {
    const [value, setValue] = useState('1');
    const [value2, setValue2] = useState('1');
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
      const navbarElement = document.querySelector('.navbar');
      if (navbarElement) {
        setNavbarHeight(navbarElement.offsetHeight);
      }
      console.log(navbarHeight)
    }, []); 
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleChange2 = (event, newValue) => {
      setValue2(newValue);
    };
  
    return (
      <div style={{ marginTop: navbarHeight }}>
          <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(to right, #4c00ff, #1b1464)', 
          minHeight:{xs:"550px",xl:"750px"},
        padding: {xs:"20px",md:"30px",lg:"40px",xl:"50px"},
          color: 'white',
        }}
      >
       
  
        <Box sx={{ maxWidth: '100%',margin:0,padding:"50px",alignItems:'center' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold',
           fontSize: {
            xs: '2rem',   
            sm: '2.25rem',    
            md: '2.5rem', 
            lg: '2.75rem',  
            xl: '4rem' },
        textAlign: 'justify',
         '@media (max-width: 525px)': {
          textAlign:"center"}
    }}>
          CUSTOM DATA CURATION
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 2,textAlign: 'justify', fontSize: {
        xs: '1.25rem',   
        sm: '1.35rem',     
        md: '1.4rem',   
        lg: '1.5rem',  
        xl: '2rem' },
        '@media (max-width: 450px)': {
          textAlign:"center"
      }
          }}>
          Unlock the full potential of your data with our custom data curation services, designed to provide you with high-quality, structured, and actionable datasets tailored to your unique needs.

          </Typography>
        </Box>
        
      
        
      </Box>
  
  <div style={{margin:"10px",marginTop:"50px"}}>
  
  <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
              {/* <Tab label="STT Solution" value="1"  sx={tabDesign} /> */}
              <Tab label="Use-Cases" value="1"  sx={tabDesign}  />
            </TabList>
          </Box>
          {/* <TabPanel value="1"><STT1/></TabPanel> */}
          <TabPanel value="1"><CDA1/></TabPanel>
        </TabContext>
      </Box>
  
  </div>
  <div style={{background:"#020ac8"}}>
  <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value2}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange2} aria-label="lab API tabs example" centered>
  
              <Tab label={
              <>
                 Process To Implement
                  <br />
                 Custom Data Curation   
              </>} 
              value="1" 
               sx={tabDesign2} />
  
              {/* <Tab 
              label={
              <>
                  Our Successful
                  <br />
                  Journey    
              </>}
              value="2"  
              sx={tabDesign2} 
               /> */}
            </TabList>
          </Box>
          <TabPanel value="1"><CDA2/></TabPanel>
          {/* <TabPanel value="2"><CoveredLaguages/></TabPanel> */}
        </TabContext>
      </Box>
    
  </div>
  
  <div style={{marginTop:"40px"}}>
  
      <Container>
          <Grid container spacing={0}  justifyContent="center" style={{margin:"0px"}}>
          
                 <Grid item sm={12} md={10} lg={10}  style={{ display: 'flex', justifyContent: 'center' }}>
                 <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px',
                  border: 'none',
                  boxShadow: 'none'
                 }} align="center" >
                     <MessageForm/>
                 </Card>
  
              </Grid>
              </Grid>
              </Container>
      </div>
  
      </div>
  )
}

export default CustomDataCuration
