import { Link } from "react-router-dom";
import { Paper,Typography,Box,Button } from "@mui/material"
import { motion } from 'framer-motion';
import Image from "../../../required-data/assests/image/providing-platform.jpg"

const design={
    padding: 2,
    textAlign: 'center',
    position: 'relative',
    margin: 2,
    //marginLeft:5,
    //marginRigt:5,
    backgroundColor: '#f3f1ee',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    '&::after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '3px',
      backgroundColor: '#008080',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  }

function ProvidingPlatform() {
  return (
    <div >
    <div 
      style={{
        marginBottom:"6%",marginTop:"8%"
      }}
    >
<Paper 
elevation={5} 
sx={design}
>
<motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        //viewport={{ once: true }} // Ensures the animation happens only once during the scroll
      >
<Typography variant="h4" style={{fontFamily:"Georgia",wordSpacing: '0.2em'}}>
      PROVIDING PLATFORM SERVICE
</Typography>
</motion.div>
</Paper>
</div>

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
        background: 'linear-gradient(to right, #4c00ff, #1b1464)', // Gradient background
        padding: 4,
        color: 'white',
        minHeight:"550px",
        marginTop:"50px",
        marginBottom:"10%"
      }}
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '60%' }, marginBottom: { xs: 2, md: 0 } }}
      style={{ display: 'flex', flexDirection: 'column'
      , justifyContent: 'center',alignItems: 'center', padding:"0%"}}>
        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold',
        display: 'block',textAlign: 'center' }}>
          Providing Platform
        </Typography>

        <Typography
    variant="body"
    sx={{
      //margin:"2%",
      color: 'white',
      fontSize: {
        xs: '1rem',   // 0px - 600px
        sm: '1rem',     // 600px - 960px
        md: '1.25rem',   // 960px - 1280px
        lg: '1.25rem',   // 1280px - 1920px
        xl: '1.5rem',   // 1920px and above
      },
      display: 'block',  // Ensure Typography is displayed as a block element
      margin: '10px',  // Optional: Add some space between the title and description
      textAlign: 'center',  
    }}
  >
  	We offer a robust platform where you can host and manage your own data curation projects, streamlining your workflow, managing annotators, and enhancing productivity.  
  </Typography><br/>
      <Button
            variant="contained"
            sx={{
              backgroundColor: '#07145f', // Blue background color
              borderRadius: '20px',       // Rounded corners
              '&:hover': {
                backgroundColor: '#7038b7', // Darker blue on hover
              },
            }}
            component={Link}
            to="/our-services/providing-platform"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View More
    </Button>

    </Box> 

      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '40%' },
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
       
         <img 
          src={Image} 
          alt="providing-platform"
          style={{
            maxWidth: '90%',
            padding:"10px",
            zIndex: 1,
            borderRadius: '10%', 
            border:"5px solid white"
          }}
        />
      </Box>
    </Box>


</div>
  )
}

export default ProvidingPlatform
