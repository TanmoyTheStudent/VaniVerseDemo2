import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Typography,Button,Paper,Grid } from '@mui/material';

import { platformInfo } from '../../../required-data/object-data/platformInfo';




const PlatformDescriptionSmall = () => {
  return (
    <>
     <div style={{marginBottom:"50px",marginTop:"100px"}}>
   
    </div>
    {
    [0,1,2,3].map((ele,i)=>{
        return(
        
        <> 
       <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column', // Stack vertically on extra-small screens
            sm: 'column', // Stack vertically on small screens
            md: 'row', // Align horizontally on medium screens and up
          },
          alignItems: 'center',
          justifyContent: 'space-evenly',
          //padding: 4,
          color: 'navy',
          minHeight:"500px",
          marginTop:"50px",
          marginBottom:"50px"
        }}
      >
      <Box sx={{ maxWidth: { xs: '100%', md: '40%' }, marginBottom: { xs: 2, md: 0 } }}>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold',textAlign:"center"}}>
       
       {platformInfo[ele].title}
      </Typography>

     </Box>
     <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', md: '60%' },
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img 
        src={platformInfo[ele].image} 
        alt="providing platform"
        style={{
          maxWidth: '90%'
        }}
      />
    </Box>
    </Box>

    <div style={{margin:"50px"}}>  
        <Typography
        //variant="h3"
        sx={{
          fontSize: {
            xs: '1rem',  // 0px - 600px
            sm: '1.25rem',  // 600px - 960px
            md: '1.5rem',  // 960px - 1280px
            lg: '1.5rem',  // 1280px - 1920px
            xl: '1.75rem',  // 1920px and above
          },
          marginTop:"100px",
          marginBottom:"150px",
          textAlign: "justify",
          lineHeight: '2' 
          
        }} >
    	{platformInfo[ele].description}
      </Typography>
      </div>
    </>

  )}
)}
</>
)
};

export default PlatformDescriptionSmall;
