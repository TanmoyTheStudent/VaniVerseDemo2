import { useEffect, useState } from 'react';
import { Container,Grid,Box, Typography ,Card,CardActionArea,Tab,useMediaQuery, useTheme} from '@mui/material';
import MessageForm from '../home/MessageForm';
import PlatformDescription from './sub-components/PlatformDescription';
import PlatformDescriptionSmall from './sub-components/PlatformDescription-small';

function ProvidingPlatform() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

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
        minHeight:{xs: "550px",xl:"750px"},
        padding: 2,
        color: 'white',
      }}
    >
      <Box sx={{ maxWidth: '100%',margin:0,padding:2,alignItems:'center' }}>
      <Typography
    
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '2.75rem',
                lg: '3rem',
                xl: '4rem'
              },
              textAlign: "center",
            }}
          >
            Vani Verse Studio
          </Typography>
            <br/>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold',
         fontSize: {
        xs: '1.25rem',  
        sm: '1.25rem', 
        md: '1.5rem',   
        lg: '1.75rem',   
        xl: '2rem' },
      textAlign: 'justify', 
      '@media (max-width: 450px)': {
          textAlign:"center"
      } }}>
       
        Our platform is designed to make your annotation projects seamless, efficient, and of the highest quality. Join us today to experience the difference.
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2,textAlign: 'justify',fontWeight:"bold",
        '@media (max-width: 450px)': {
          textAlign:"center"
      }
          }}>
        
          <Typography 
  variant="h6" 
  sx={{ 
    fontWeight: "bold", 
    textAlign: 'left',
    display: 'inline-block',
    marginLeft: '0px' 
  }}
>
Key Features-<br/>
  ✔ One Step Solution<br/>
  ✔ Management<br/>
  ✔ Quality Control<br/>
  ✔ Ensuring Security
    </Typography>
  </Typography>
      </Box>
      
    </Box>

    {!isSmallScreen?<PlatformDescription/>: <PlatformDescriptionSmall/>}
    



<div style={{marginTop:"50px",marginBottom:"50px",padding:"50px",background:"navy"}}>

    <Container>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"0px"}}>
        
               <Grid item sm={12} md={10} lg={10}  style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px',
                border: 'none',
                boxShadow: 'none',
                //background:"navy"
               }} align="center" >
                   <MessageForm/>
               </Card>

            </Grid>
            </Grid>
            </Container>
    </div>

    </div>
  )
}

export default ProvidingPlatform
