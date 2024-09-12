import { Divider } from '@mui/material'
import { Container,Typography,Grid,Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Image from "../../required-data/assests/image/profilePic.jpeg"
import ContactCard from './sub-components/ContactCard';
import OurInspiration from './sub-components/OurInspiration';
import Background from "../../required-data/assests/image/background.jpeg"
import { AboutUsInfo } from './sub-components/AboutUsInfo';

function AboutUs() {
  return (
    <div className=''>

<div style={{
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: "500px",   
  height: 'auto',       
  maxHeight: "1500px",  
  width: '100%',
  display: 'flex',
   alignItems: 'center',
   justifyContent: "center",
  padding: '10px',       
  margin: " auto",
  marginTop:"8%",
  overflowY: "auto",
  
  
}}>

<Container sx={{height:"100%",

    marginTop:{xs:"5%",md:"3%",lg:0}
}}>
<Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{  textAlign: 'center',height:"100%" }}
    >
      <Grid item  style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
         style={{height:"100%", 
            padding: '20px', 
            marginTop:"30px",
            marginBottom:"30px",
            borderRadius: '15px', 
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)'}} align="center">
     <Typography
       
        sx={{
          fontSize: {
            xs: '1.5rem',  
            sm: '1.5rem',  
            md: '2.25rem', 
            lg: '2.5rem',  
            xl: '3rem',  
          },
          margin: 2,
          color:"#2472d1",
          fontWeight:"bold",

        }}
      >
        Empowering Businesses with High-Quality Data Annotations in Indian Languages
      </Typography>
      <Typography
       
        sx={{
          fontSize: {
            xs: '1.25rem',  
            sm: '1.35rem',  
            md: '1.4rem',  
            lg: '1.5rem',  
            xl: '1.75rem',  
          },
          marginBottom: 3,
          textAlign:"center"}}
      >
       <p style={{marginBottom:"20px"}}>
        At Vani and Verse Solutions, we are passionate about bridging the gap between data and insights. As a provider of data annotation services in Indian languages, we are dedicated to helping businesses and researchers unlock the power of their data and drive innovation.<br/>
        </p> 
      Recognizing the importance of accurate data annotation for machine learning, AI, and various applications, we set out to create a dedicated platform that caters specifically to the rich tapestry of Indian languages.

      </Typography>
      </Card>
      </Grid>
      
      </Grid>

      </Container>         

</div>


        <Divider
          sx={{
            backgroundColor: 'blue', 
            height: '5px',           
            margin: '10px 0px', 
            marginTop:"10%"       
          }}/>
        <h1 className='d-flex flex-column align-items-center justify-content-center' style={{color:"#643cca"}}>FOUNDER</h1>
        <Divider
          sx={{
            backgroundColor: 'blue', 
            height: '5px',           
            margin: '10px 0px'
        }}/>
        
       <Container style={{marginBottom:"100px"}}>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"20px"}}>
        <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ width: '100%',height:"100%", padding: '20px', margin: '10px',border: 'none',
                  boxShadow: 'none'}} align="center" >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="auto"
                        image={Image}
                        alt="services image"
                        style={{borderRadius:"50%"}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
              </Grid>
               <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px',
                border: 'none',
                boxShadow: 'none'
               }} 
               align="center" style={{padding:"10px",marginBottom:"20px"}}>
                    <CardActionArea>
                     
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Mr. Agarwal
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         IIT Bombay
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>

            </Grid>
            </Grid>
            </Container>

  <OurInspiration/>

{
  AboutUsInfo.map((ele)=>{
    return(
      <div style={{marginTop:"8%",marginBottom:"15%"}} key={ele.id}>
      <Divider
        sx={{
          backgroundColor: 'blue', 
          height: '5px',          
          margin: '10px 0px',        
        }}/>
      <h1 className='d-flex flex-column align-items-center justify-content-center' style={{color:"#643cca"}}>{ele.title}</h1>
      <Divider
        sx={{
          backgroundColor: 'blue', 
          height: '5px',           
          margin: '10px 0px'
      }}/>
<Typography
      sx={{
        fontSize: {
          xs: '1.25rem', 
          sm: '1.35rem', 
          md: '1.4rem',  
          lg: '1.5rem',  
          xl: '1.75rem',  
        },
        margin:{xs:"20px",sm:"30px",md:"50px"},
        marginTop:"5%",
        textAlign: "justify",
        lineHeight: '1.8',
        wordSpacing:"5px" ,
        '@media (max-width: 400px)': {
        textAlign:"center"
   },
        
      }} >
    {ele.description}
    </Typography>

      </div>
    )
  })
}
   
          <Divider
          sx={{
            backgroundColor: 'blue', 
            height: '5px',           
            margin: '10px 0px',   
          }}/>
        <h1 className='d-flex flex-column align-items-center justify-content-center' style={{color:"#643cca"}}>OUR CONTACT</h1>
        <Divider
          sx={{
            backgroundColor: 'blue', 
            height: '5px',           
            margin: '10px 0px'
        }}/>
        <div className='col-12 mt-5 d-flex flex-column align-items-center justify-content-center' style={{ marginTop:"5%",marginBottom:"10%" }}>
        <ContactCard/>
        </div>
    </div>
  )
}

export default AboutUs
