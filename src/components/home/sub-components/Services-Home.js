import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Typography,Button,Paper,Grid,Card,CardActionArea,CardContent } from '@mui/material';
import { servicesInHomePage,associatedServices,button,design } from '../../../required-data/object-data/servicesInHome';

const ServicesHome = () => {
  return (
    <>
     <div style={{marginBottom:"50px",marginTop:"100px"}}>
        <Paper 
      elevation={5} 
      sx={design}
    >
       <motion.div
        initial={{ opacity: 0, y: -50 }}
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
          xs: 'column', 
          sm: 'column', 
          md: 'row', 
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, #23d6d4, #0a3758)', 
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
        xs: '2rem',  
        sm: '2.5rem', 
        md: '2.75rem',   
        lg: '3rem',    
        xl: '4rem',   
      },
      display: 'block',  
       textAlign: 'center',
       fontWeight:"bold"
    }}
  >
    {servicesInHomePage[ele].title}
  </Typography>

  <Typography
    variant="body"
    sx={{
      color: 'white',
      fontSize: {
        xs: '1rem',   
        sm: '1.2rem',    
        md: '1.4rem',  
        lg: '1.5rem',  
        xl: '1.75rem',   
      },
      display: 'block', 
      margin: '1%', 
      textAlign: 'center',  
    }}
  >
    {servicesInHomePage[ele].description}
  </Typography><br/>
      <Button
            variant="contained"
            sx={{
              backgroundColor: '#07145f',
              borderRadius: '20px',     
              '&:hover': {
                backgroundColor: '#7038b7'
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
           
          }}
        />
      </Box>
    </Box>
      ):(
      

    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', 
          sm: 'column', 
          md: 'row', 
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, #660c05, #f99cd1)',
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
            maxWidth:"75%" ,
            zIndex: 1,
            borderRadius: '10%', 
            margin:"5%",
            padding:"2% ",
            border:"5px solid white"
            
          }}
        />
      </Box>

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
        xs: '2rem',  
        sm: '2.5rem',  
        md: '2.75rem',    
        lg: '3rem',    
        xl: '4rem'
      },
      display: 'block',  
       textAlign: 'center',
       fontWeight:"bold"
    }}
  >
    {servicesInHomePage[ele].title}
  </Typography>

  <Typography
    variant="body"
    sx={{
    
      color: 'white',
      fontSize: {
        xs: '1rem',   
        sm: '1.25rem',    
        md: '1.4rem',  
        lg: '1.5rem',   
        xl: '1.75rem',   
      },
      display: 'block',  
      margin: '1%', 
      textAlign: 'center',  
    }}
  >
    {servicesInHomePage[ele].description}
  </Typography><br/>
      <Button
            variant="contained"
            sx={{
              backgroundColor: '#07145f', 
              borderRadius: '20px',       
              '&:hover': {
                backgroundColor: '#7038b7', 
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

   
    </Box>

      )

        )
    })
    }

{/* For Other Services */}

    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row', 
        },
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #23d6d4, #0a3758)', 
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
             sx={{ maxWidth: { xs: '100%', md: '100%' }, marginBottom: { xs: 2, md: 2 },marginTop:{md:1.5} }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding:"0%", }}
        >
      
        <Typography
    gutterBottom
    variant="h2"
    component="div"
    sx={{
      margin: "1%",
      color: 'white',
      fontSize: {
        xs: '2rem',  
        sm: '2.5rem', 
        md: '2.75rem',   
        lg: '3rem',   
        xl: '4rem',    
      },
      display: 'block', 
       textAlign: 'center',
       fontWeight:"bold"
    }}
  >
    Other Associated Services
  </Typography>


{/* Presenting as Box */}

<Grid container spacing={5}  justifyContent="center" sx={{mt:"1.5%",mb:"1.5%"}}>
          {
            associatedServices.map((ele,i)=>{
              return(
                <Grid item sm={12} md={6} lg={3} key={i} style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            width: {md:'85%',lg:"100%",xl:"90%"}, 
            height:{md:"225px",lg:"250px"}, 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
            padding: "10px",
            marginBottom: "20px",
            background: "none",
            color: "white",
            border: "2px solid white",
            borderRadius: "15px",
            textAlign: "center" 
          }}
        >
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="div"
                        style={{fontWeight:"bold"}}
                        >
                          {ele.title}
                        </Typography>
                        <Typography variant="h6" >
                {ele.description}
          </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
  
            </Grid>
              )}
          )}
        </Grid>

 
  <br/>
      <Button
            variant="contained"
            sx={{
              mb:"2%",
              backgroundColor: '#07145f', 
              borderRadius: '20px',     
              '&:hover': {
                backgroundColor: '#7038b7',
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

export default ServicesHome;
