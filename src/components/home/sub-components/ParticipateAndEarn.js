import { Container,Typography,Grid,Button,Card,CardActions,Paper } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import EarnImage from "../../../required-data/assests/image/earnMoney.jpeg"
import { Link } from 'react-router-dom';

const design={
    padding: 2,
    textAlign: 'center',
    position: 'relative',
    margin: 2,
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
        <Grid container spacing={0}  justifyContent="center" style={{margin:"0px",marginTop:"50px",marginBottom:"100px"}}>
        <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center',marginTop:"30px" }}>
                  <Card sx={{ width: '100%',height:"100%", padding: '20px', margin: '0px',boxShadow:"none"}} align="center" >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="90%"
                        image={EarnImage}
                        alt="services image"
                        style={{borderRadius:"50px"}}
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
               <Card sx={{ width: '100%',height:"100%", padding: '20px', marginTop: '0px',boxShadow:"none"}} align="center" >
                    <CardActionArea>
                     
                      <CardContent style={{marginTop:"5%"}}>
                        <Typography gutterBottom variant="h4" component="div" color="black" style={{fontFamily:"Georgia"}}>
                          Participate and Earn
                        </Typography><br/>
                        <Typography variant="h6" color="black" style={{fontFamily:"Georgia"}}>
                        It is our small initiative to employ India.In India everyone is strong at his/her mothertongue. 
                        By Sharing their knowledge and language skills for the development of their own language, they can earn money.Through this process students, unemployed, house-wives, senior citizens can earn some, that may help them to become financially independent.
                        </Typography>
                      </CardContent>
                   </CardActionArea><br/>
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