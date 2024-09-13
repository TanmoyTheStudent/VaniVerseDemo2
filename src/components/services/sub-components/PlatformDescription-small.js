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
            xs: 'column', 
            sm: 'column', 
            md: 'row', 
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

    <div style={{margin:"25px"}}>  
        <Typography
        //variant="h3"
        sx={{
          fontSize: {
            xs: '1.25rem',  
            sm: '1.35rem',  
            md: '1.4rem', 
            lg: '1.5rem',  
            xl: '1.75rem',  
          },
          marginTop:{xs:"50px",sm:"75px"},
          marginBottom:{xs:"75px",sm:"100px"},
          textAlign: "justify",
          lineHeight: '2',
          '@media (max-width: 450px)': {
              textAlign:"left"
          } 
          
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
