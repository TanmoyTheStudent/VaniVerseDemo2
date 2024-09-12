import { useState,useEffect } from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import MessageForm from './MessageForm';
import ContactCard from './sub-components/ContactCard';

const ContactUs = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {

      const navbarElement = document.querySelector('.navbar');
      if (navbarElement) {
        setNavbarHeight(navbarElement.offsetHeight);
      }
      console.log(navbarHeight)
    }, []); 

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
     

      <Box sx={{ maxWidth: '100%',margin:0,padding:0,alignItems:'center' }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold',
          fontSize: {
            xs: '2rem',   
            sm: '2.25rem',   
            md: '2.5rem', 
            lg: '2.75rem', 
            xl: '4rem' },
      textAlign: 'left' }}>
         Contact Us
        </Typography>
        <Typography  sx={{ marginTop: 2,textAlign: 'justify',fontSize: {
        xs: '1.25rem',   
        sm: '1.35rem',     
        md: '1.4rem',   
        lg: '1.5rem',  
        xl: '2rem' },
        '@media (max-width: 450px)': {
          textAlign:"left"
      }
       }}>
        Tell us how we can help with your next AI initiative – Our team is here to help you .
        </Typography>
      </Box>
      
    
      
    </Box>

      
    <div className='row'>
      <div className='col-12 col-lg-6  d-flex flex-column align-items-center justify-content-center' style={{ height: '100%',marginTop:"100px" }}>
        <ContactCard/>
    </div>
    <div className='col-12 col-lg-6 mt-5 d-flex flex-column align-items-center justify-content-center' style={{ height: '' }}>
   
    <MessageForm/>

          
        </div>
    </div>
    </div>
  );
};

export default ContactUs;
