import { useState } from 'react';
import { Container,Grid,Box, Typography ,Card,CardActionArea,Tab,useMediaQuery, useTheme} from '@mui/material';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import MessageForm from '../home/MessageForm';


import PlatformDescription from './sub-components/PlatformDescription';
import PlatformDescriptionSmall from './sub-components/PlatformDescription-small';

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


function ProvidingPlatform() {
  const [value, setValue] = useState('1');
  const [value2, setValue2] = useState('1');

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div>
        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, #4c00ff, #1b1464)', // Adjust the gradient colors
        height:"500px",
        padding: 2,
        color: 'white',
      }}
    >
      <Box sx={{ maxWidth: '100%',margin:0,padding:2,alignItems:'center' }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold',
         fontSize: {
        xs: '1.25rem',   // 0px - 600px
        sm: '1.25rem',     // 600px - 960px
        md: '1.5rem',   // 960px - 1280px
        lg: '1.75rem',   // 1280px - 1920px
        xl: '2rem' },
      textAlign: 'justify' }}>
        Our platform is designed to make your annotation projects seamless, efficient, and of the highest quality. Join us today to experience the difference.
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2,textAlign: 'justify' }}>
          Key Features-<br/>
          1. One Step Solution<br/>
          2. Management<br/>
          3. Quality Control<br/>
          4. Ensuring Security<br/>
        </Typography>
      </Box>
      
    </Box>

    {!isSmallScreen?<PlatformDescription/>: <PlatformDescriptionSmall/>}
    



<div style={{marginTop:"50px",marginBottom:"50px",padding:"50px",background:"navy"}}>

    <Container>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"0px"}}>
        
               <Grid item sm={12} md={10} lg={10}  style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px',
                border: 'none',
                boxShadow: 'none',
                //background:"navy"
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

export default ProvidingPlatform