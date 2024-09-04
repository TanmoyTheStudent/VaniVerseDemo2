import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Typography,Button,Paper,Grid } from '@mui/material';
import { servicesInHomePage } from '../../../required-data/object-data/servicesInHome';

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

const button=[
  {
    name:"Explore More",
    link:"/our-services"
  },
  {
     name:"Contact Us",
    link:"/contact-us"
  },
  {
    name:"Message Us",
    link:"/message-us"
  },
  {
    name:"Register With Us",
    link:"/register-yourself"
  }
]

const ServicesHomeSmall = () => {
  return (
    <>
     <div style={{marginBottom:"50px",marginTop:"100px"}}>
        <Paper 
      elevation={5} 
      sx={design}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        
      >
      <Typography variant="h4" style={{fontFamily:"Georgia",wordSpacing: '0.2em'}}>
         DATA ANNOTATION SERVICES 
      </Typography>
      </motion.div>
    </Paper>
    </div>
    {
    [0,1,2,3].map((ele,i)=>{
        return(
        [0,2].includes(ele)?
       ( <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', // Stack vertically on extra-small screens
          sm: 'column', // Stack vertically on small screens
          md: 'row', // Align horizontally on medium screens and up
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, #23d6d4, #0a3758)', // Gradient background
        padding: 4,
        color: 'white',
        minHeight:"500px",
        marginTop:"50px",
        marginBottom:"50px",
        borderRadius:"10px",
        margin:"10px"
      }}
      key={i}
    >
      <Box
             sx={{ maxWidth: { xs: '100%', md: '50%' }, marginBottom: { xs: 2, md: 0 } }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding:"0%",marginBottom: "0px" }}
        >
      
        <Typography
    gutterBottom
    variant="h2"
    component="div"
    sx={{
      margin: "2%",
      color: 'white',
      fontSize: {
        xs: '2rem',  // 0px - 600px
        sm: '2.5rem',  // 600px - 960px
        md: '3rem',    // 960px - 1280px
        lg: '3.5rem',    // 1280px - 1920px
        xl: '4rem',    // 1920px and above
      },
      display: 'block',  // Ensure Typography is displayed as a block element
       textAlign: 'center'
    }}
  >
    {servicesInHomePage[ele].title}
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
    {servicesInHomePage[ele].description}
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
            to={servicesInHomePage[0].link}
            target="_blank" 
            rel="noopener noreferrer"
          >
            View More
    </Button>
     
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '50%' },
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img 
          src={servicesInHomePage[ele].image} 
          alt="Microphone and waveform"
          style={{
            maxWidth: '75%',
            zIndex: 1,
            borderRadius: '10%', 
            margin:"5%",
            padding:"2% ",
            border:"5px solid white"
           // boxShadow: '0px 0px 30px 20px #8ba2f3',
          }}
        />
      </Box>
    </Box>
      ):(
      

    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', // Stack vertically on extra-small screens
          sm: 'column', // Stack vertically on small screens
          md: 'row', // Align horizontally on medium screens and up
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, #660c05, #f99cd1)', // Gradient background
        padding: 4,
        color: 'white',
        minHeight:"500px",
        borderRadius:"10px",
        margin:"10px",
        marginTop:"10%",
        marginBottom:"10%"
      }}
    >
      <Box
             sx={{ maxWidth: { xs: '100%', md: '50%' }, marginBottom: { xs: 2, md: 0 } }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding:"0%",marginBottom: "0px" }}
        >
      
        <Typography
    gutterBottom
    variant="h2"
    component="div"
    sx={{
      margin: "2%",
      color: 'white',
      fontSize: {
        xs: '2rem',  // 0px - 600px
        sm: '2.5rem',  // 600px - 960px
        md: '3rem',    // 960px - 1280px
        lg: '3.5rem',    // 1280px - 1920px
        xl: '4rem',    // 1920px and above
      },
      display: 'block',  // Ensure Typography is displayed as a block element
       textAlign: 'center'
    }}
  >
    {servicesInHomePage[ele].title}
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
    {servicesInHomePage[ele].description}
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
            to={servicesInHomePage[ele].link}
            target="_blank" 
            rel="noopener noreferrer"
          >
            View More
    </Button>
     
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '50%' },
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img 
          src={servicesInHomePage[ele].image} 
          alt="Microphone and waveform"
          style={{
            maxWidth: '75%',
            zIndex: 1,
            borderRadius: '10%', 
            margin:"5%",
            padding:"2% ",
            border:"5px solid white"
            //boxShadow: '0px 0px 30px 20px #8ba2f3',
          }}
        />
      </Box>
    </Box>
    

      )

        )
    })
    }

<Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', // Stack vertically on extra-small screens
          sm: 'column', // Stack vertically on small screens
          md: 'row', // Align horizontally on medium screens and up
        },
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #23d6d4, #0a3758)', // Gradient background
        padding: 4,
        color: 'white',
        minHeight:"550px",
        marginTop:"50px",
        marginBottom:"50px",
        borderRadius:"10px",
        margin:"10px"
      }}
      
    >
      <Box
             sx={{ maxWidth: { xs: '100%', md: '100%' }, marginBottom: { xs: 2, md: 0 } }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding:"0%",marginBottom: "0px" }}
        >
      
        <Typography
    gutterBottom
    variant="h2"
    component="div"
    sx={{
      margin: "2%",
      color: 'white',
      fontSize: {
        xs: '2rem',  // 0px - 600px
        sm: '2.5rem',  // 600px - 960px
        md: '3rem',    // 960px - 1280px
        lg: '3.5rem',    // 1280px - 1920px
        xl: '4rem',    // 1920px and above
      },
      display: 'block',  // Ensure Typography is displayed as a block element
       textAlign: 'center'
    }}
  >
    Other Associated Services
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
        lg: '1.5rem',   // 1280px - 1920px
        xl: '1.5rem',   // 1920px and above
      },
      display: 'block',  // Ensure Typography is displayed as a block element
      margin: '10px',  // Optional: Add some space between the title and description
      textAlign: 'center',  
    }}
  >
    
<b>●	Audio Segmentation:</b> Dividing audio into meaningful segments for analysis.<br/>
<b>●	Image Annotations:</b> Detailed image data annotations.<br/>
<b>●	Audio Verification:</b> Ensuring integrity and authenticity of audio data.<br/>
<b>●	NLP Annotations: </b> Data Curation for NLPs project requirements.
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
            to="/our-services/others"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View More
    </Button>
     
      </Box>
     
    </Box>

    
    <Grid container spacing={3} justifyContent="center" style={{ marginTop: '50px',marginBottom:"100px" }}>
        {
          button.map((ele,i)=>{
            return(
              <>
                <Grid item xs={12} sm={6} md={6} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={i}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#07145f',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
              '@media (max-width: 600px)': {  
                width: '80%',                 
                margin: '0 auto',
              }
            }}
            component={Link}
            to={ele.link}
          >
            {ele.name}
          </Button>
        </Grid>
              </>
            )
          })
        }
        </Grid>
     
    </>
  );
};

export default ServicesHomeSmall;
