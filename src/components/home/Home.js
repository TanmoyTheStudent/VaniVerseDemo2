import { Container,Typography,Grid,Card,useMediaQuery, useTheme} from '@mui/material'
import Background from "../../required-data/assests/image/background.jpeg"
import ParticipateAndEarn from "./sub-components/ParticipateAndEarn";
import LoginForm from './sub-components/LoginForm';
import ServicesHome from './sub-components/Services-Home';
import ServicesHomeSmall from './sub-components/Services-Home-Small';
import LanguagesWeWork from './sub-components/LanguagesWeWork';
import LanguagesList from './sub-components/LanguagesList';
import ProvidingPlatform from './sub-components/ProvidingPlatform';

function Home() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <div >

<div 
 style={{
  backgroundColor:"ButtonHighlight",
  minHeight: "500px",   
  height: 'auto',       
  maxHeight: "1500px",  
  width: '100%',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',       
  margin: " auto",  
  overflowY: "auto"      
}}>



      <Container sx={{marginTop:{xs:"10%",md:"7%",xl:"10%"},marginBottom:"10%"}}>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"0px"}}>
        <Grid item sm={12} md={12} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ width: '100%',height:"100%", padding: '0px', marginTop:{xs:"50px",md:"120px"},border: 'none',
                  boxShadow: 'none',
                  background:"none"}} align="center" >
       <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: '2.5rem', 
            sm: '3.5rem',  
            md: '3.5rem',  
            lg: '4rem',  
            xl: '4rem',  
          },
          margin: 0,
          color:"#226dc7",
           fontWeight: 'bold',
           marginBottom:"2%",
           '@media (max-width: 350px)': {
              fontSize: '2.25rem'
           }
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
            xs: '1.5rem',  
            sm: '2rem', 
            md: '2rem',  
            lg: '2rem',  
            xl: '2rem', 
          },
          marginBottom: {xs:0,lg:3},
          '@media (max-width: 350px)': {
                fontSize: '1.25rem'
          },
          '@media (min-width: 350px) and (max-width: 400px)': {
                fontSize: '1.4rem'
           },
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

<LanguagesList/>
{!isSmallScreen?<ServicesHome/>: <ServicesHomeSmall/>}

<ProvidingPlatform/>
<ParticipateAndEarn/>


</div>
  )
}

export default Home

