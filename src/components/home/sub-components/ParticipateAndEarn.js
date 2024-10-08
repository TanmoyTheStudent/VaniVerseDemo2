import { Container,Typography,Grid,Button,Card,Paper } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import EarnImage from "../../../required-data/assests/image/earnMoney.jpeg"
import { Link } from 'react-router-dom';
import { design } from '../../../required-data/object-data/servicesInHome';


function ParticipateAndEarn() {
  return (
    <div style={{marginTop:"100px",marginBottom:"50px"}}>
         <Paper 
      elevation={5} 
      sx={design}
    >
      <Typography variant="h4" style={{fontFamily:"Georgia",wordSpacing: '0.2em'}}>
          Our Initiative for Self-Sufficiency
      </Typography>
    </Paper>

    <Container>
        <Grid container spacing={0}  justifyContent="center" sx={{marginTop:"2%",marginBottom:{xs:"100px",md:"10%"} }}>
        <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center',marginTop:"30px" }}>
                  <Card sx={{ width: '100%',height:"100%", padding: {xs:'10px',md:'20px'}, margin: '0px',boxShadow:"none"}} align="center" >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={EarnImage}
                        alt="services image"
                        sx={{width:{sx:"90%",sm:"70%",md:"100%",lg:"90%"},borderRadius:"50px"}}
                       
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                         Image Source:AI-generated
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
              </Grid>
               <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={{ width: '100%',height:"100%", padding: {xs:"0px",sm:'10px',md:"0px",lg:"20px"}, marginTop: {xs:0,md:"5%",lg:"2.5%",xl:"1.5%"},boxShadow:"none"}} align="center" >
                    <CardActionArea>
                     
                      <CardContent style={{marginTop:"5%"}}>
                        <Typography 
                        gutterBottom 
                        component="div" 
                        sx={{
                          margin: {xs:"2.5%",md:0,lg:"2%"},
                          fontSize: {
                            xs: '2rem',  
                            sm: '2.25rem',  
                            md: '2.25rem',    
                            lg: '2.5rem',
                            xl: '3rem',   
                          },
                           textAlign: 'center',
                           fontWeight:"bold"
                        }}
                        >
                          Participate and Earn
                        </Typography>
                        <Typography  
                         sx={{
                          textAlign:{
                            xs:"justify",
                            
                          },
                          fontSize: {
                            xs: '1.25rem', 
                            sm: '1.35rem',
                            md: '1.35rem',   
                            lg: '1.5rem',   
                            xl: '1.75rem', 
                          },
                        }}>
                        It is our small initiative to employ India. In India everyone is strong at his/her mothertongue. By Sharing their knowledge and language skills for the development of their own language, they can earn money. Through this process students, unemployed, senior citizens, house-wives can earn some, that may help them to become financially independent.
                        </Typography>
                      </CardContent>
                   </CardActionArea><br/>
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
            to="/participate&earn"
          >
            Learn More
          </Button>
               </Card>

            </Grid>
            </Grid>
            </Container>
    </div>
  )
}

export default ParticipateAndEarn
