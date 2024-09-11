import { useState } from 'react';
import { Box,Tab } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import DataAnnotationServices from './sub-components/DataAnnotationServices';
import "./sub-components/services.css"
import ProvidingPlatform2 from './sub-components/ProvidingPlatform2';

const tabDesign = {
      fontWeight: 'bold',
      fontSize: {
        xs: '1.25rem',  
        sm: '1.3rem',
        md: '1.5rem',
        xl:"1.6rem"
      },
      mx: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 6
      },
  
};


function Services() {

  const [value, setValue] = useState('1');
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      
    <Box sx={{ width: '100%', typography: 'body1',marginTop:{xs:"90px",sm:"130px",xl:"150px"},marginBottom:"75px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList 
            onChange={handleChange} aria-label="lab API tabs example" centered>
  
              <Tab 
              label={
              <>
                 <Box 
              component="span"
              sx={{
                display: { xs: 'none', sm: 'block' }  
              }}
            >
              A. DATA ANNOTATION
              <br />
              SERVICES
            </Box>
            <Box 
              component="span"
              sx={{
                display: { xs: 'block', sm: 'none' }  
              }}
            >
             A. DATA
             <br/>ANNOTATION
             <br/>SERVICES
            </Box>
            </>} 
            value="1" 
             sx={tabDesign} />

            <Tab 
            label={
            <>
                 <Box 
              component="span"
              sx={{
                display: { xs: 'none', sm: 'block' }  
              }}
            >
                B. PROVIDING PLATFORM
              <br />
              SERVICE
            </Box>
            <Box 
              component="span"
              sx={{
                display: { xs: 'block', sm: 'none' }  // Show on small screens
              }}
            >
             B. PROVIDING
             <br/>PLATFORM
             <br/>SERVICE
            </Box> 
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
  




    </>
  )
}

export default Services
