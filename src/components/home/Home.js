import { Container,Typography,Grid,Button,Card,CardActions,Paper,useMediaQuery, useTheme} from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import OurInspiration from "./sub-components/OurInspiration";

import ParticipateAndEarn from "./sub-components/ParticipateAndEarn";
import Login from '../user-authentication/Login';
import LoginForm from './sub-components/LoginForm';
import ServicesHome from './sub-components/Services-Home';
import ServicesHomeSmall from './sub-components/Services-Home-Small';
import LanguagesWeWork from './sub-components/LanguagesWeWork';
import ProvidingPlatform from './sub-components/ProvidingPlatform';

function Home() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  //console.log(isSmallScreen)
  
  return (
    <div className="">

<div 
 style={{
  backgroundColor:"ButtonHighlight",
  minHeight: "500px",   // Minimum height of 500px
  height: 'auto',       // Let the height adjust based on content
  maxHeight: "1500px",  
  width: '100%',
  //background: 'linear-gradient(to right, #23d6d4, #0a3758)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',       // Added some padding for spacing
  margin: " auto",   // Centered the div horizontally
  overflowY: "auto"      // Allow vertical scrolling if content overflows
}}>

{/* <div style={{
  //backgroundImage: `url(${Background})`,
  backgroundColor:"ButtonHighlight",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '500px',
   alignItems: 'center', // Centers vertically
  justifyContent: 'center',
  marginBottom:"50px",
  marginTop:"0%"
}}> */}


      {/* gggg        */}

      <Container style={{marginBottom:"100px"}}>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"0px"}}>
        <Grid item sm={12} md={12} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ width: '100%',height:"100%", padding: '0px', margin: '0px',marginTop:{xs:"50px",md:"120px"},border: 'none',
                  boxShadow: 'none',
                  background:"none"}} align="center" >
       <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: '2.5rem',  // 0px - 600px
            sm: '3.5rem',  // 600px - 960px
            md: '3.5rem',  // 960px - 1280px
            lg: '4rem',  // 1280px - 1920px
            xl: '4rem',  // 1920px and above
          },
          margin: 0,
          color:"blue",
           fontWeight: 'bold',
           marginBottom:"2%"
        }}
      >
        <span style={{ whiteSpace: 'nowrap' }}>Data that speaks,</span>
        <br />
        <span style={{ whiteSpace: 'nowrap' }}>
          Text that resonates</span>
      </Typography> 
      
      <Typography
       
        sx={{
          fontSize: {
            xs: '1.5rem',  // 0px - 600px
            sm: '2rem',  // 600px - 960px
            md: '2rem',  // 960px - 1280px
            lg: '2rem',  // 1280px - 1920px
            xl: '2rem',  // 1920px and above
          },
          marginBottom: 3,
        }}
      >
       <span style={{ whiteSpace: 'nowrap' }}>Empower your AI model with</span><br/> <span style={{ whiteSpace: 'nowrap' }}>meticulously curated speech and</span><br/> 
       <span style={{ whiteSpace: 'nowrap' }}>text data for Indian Languages.</span>
      </Typography>
                   
               </Card>
              </Grid>
               <Grid item sm={12} md={12} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={{ width: '100%',height:"100%", 
                border: 'none',
                boxShadow: 'none',
                background:"none"
               }} 
               align="center" 
               style={{padding:"10px",marginBottom:"20px"}}>
                   <LoginForm/>
                   
               </Card>

            </Grid>
            </Grid>
            </Container>

</div>

<LanguagesWeWork/>
{!isSmallScreen?<ServicesHome/>: <ServicesHomeSmall/>}

<ProvidingPlatform/>
<ParticipateAndEarn/>


</div>
  )
}

export default Home

