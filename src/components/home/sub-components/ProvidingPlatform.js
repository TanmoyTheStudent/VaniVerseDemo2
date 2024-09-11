import { Link } from "react-router-dom";
import { Paper,Typography,Box,Button } from "@mui/material"
import { motion } from 'framer-motion';
import Image from "../../../required-data/assests/image/providing-platform.jpg"
import { design } from "../../../required-data/object-data/servicesInHome";

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
        //viewport={{ once: true }} // animation happens only once during the scroll
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
          xs: 'column', 
          sm: 'column', 
          md: 'row', 
        },
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: 'linear-gradient(to right, #4c00ff, #1b1464)',
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
        <Typography 
         component="div" 
        sx={{ fontWeight: 'bold',
        display: 'block',
        textAlign: 'center',
        fontSize: {
          xs: '2rem', 
          sm: '2.5rem', 
          md: '2.75rem',    
          lg: '3rem',   
          xl: '4rem',  
        },
        margin:"2%"
        }}>
          Providing Platform
        </Typography>

        <Typography
    variant="body"
    sx={{
      //margin:"2%",
      color: 'white',
      fontSize: {
        xs: '1.25rem',   
        sm: '1.35rem',     
        md: '1.4rem',   
        lg: '1.5rem',  
        xl: '1.75rem',   
      },
      display: 'block', 
      margin: {xs:'1.5%',md:'1%'},  
      textAlign: 'center',  
    }}
  >
  	We offer a robust platform where you can host and manage your own data curation projects, streamlining your workflow, managing annotators, and enhancing productivity.  
  </Typography><br/>
      <Button
            variant="contained"
            sx={{
              mb:"3%",
              backgroundColor: '#07145f', 
              borderRadius: '20px',       
              '&:hover': {
                backgroundColor: '#7038b7', 
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
          width: { xs: '95%',sm:"75%", md: '45%' },
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb:{xs:3,md:0}
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
