import { useState } from 'react';

import { Container,Typography,Grid,Button,Card,CardActions,Divider,Dialog,DialogContent,DialogActions,DialogTitle } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import EarnImage2 from "../../required-data/assests/image/earn2.jpeg"
import MessageForm from './MessageForm';
import { earnData } from '../../required-data/object-data/earnData';
import { Link } from 'react-router-dom';
import LanguagesNext from './sub-components/LanguagesNext';

function Participate() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

        <Container style={{marginBottom:"100px",marginTop:"50px"}}>
        <Grid container spacing={0}  justifyContent="center" >
        <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px'}} align="center" >
                    <CardActionArea>
                     
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="div"
                        sx={{
                          marginTop:
                          {
                          xs: '25px',  
                          md: '50px',
                          lg: "80px"
                        },marginBottom:"30px",fontWeight:"bold",textAlign: "center"}}>
                        Join Our Team of Annotators and Earn While You Contribute!
                        </Typography>
                        <Typography variant="h6" 
                            style={{fontFamily:"Georgia"}}  
                        >
                      Are you fluent in an Indian language and looking for a way to earn while making a difference? Join us as an annotator on our platform, where you can contribute to the growth of Indian language processing and enhance the quality of data in Indian languages and earn rewards for your efforts!
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   </Card>
              </Grid>
               <Grid item sm={12} md={6} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
                   <Card sx={{ width: '100%',height:"100%", padding: '20px', margin: '10px'}} align="center" >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={EarnImage2}
                        alt="services image"
                        style={{ borderRadius: "20px", width: '100%', height: 'auto' }}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Source:AI-generated
                        </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
                </Grid>
                </Grid>
     </Container>


     <div  style={{
  minHeight: "500px",   // Minimum height of 500px
  height: 'auto',       // Let the height adjust based on content
  maxHeight: "1500px",  
  width: '99%',
  //background: 'linear-gradient(to right, #23d6d4, #0a3758)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',       // Added some padding for spacing
  margin: "10px auto",   // Centered the div horizontally
  overflowY: "auto" ,     // Allow vertical scrolling if content overflows
  background:'linear-gradient(to right, #4c00ff, #1b1464)'
}}>

    <Container style={{marginBottom:"50px"}}>
      
        <Typography variant='h4' align='center' style={{margin:"20px",marginTop:"50px",color:"white",fontWeight: 'bold',fontFamily:"cursive"}}>
        Unlock Opportunities in Indian Language Annotation
        </Typography>
        <Divider
          sx={{
            backgroundColor: 'white', 
            height: '5px',           
            margin: '10px 0px',
            marginBottom:"50px"
        }}/>

<Typography variant='h6' align="justify" style={{margin:"20px",color:"white",fontWeight: '',fontFamily:"sans-serif"}}>
<br/>
<h3 style={{textAlign:"center"}}><b>Why Become an Annotator?</b></h3><br/>
<b>● Flexible Work Hours :</b> Enjoy the freedom to work at your own pace and schedule. Whether you’re a student, a homemaker, professional or someone looking for a side hustle, our annotation tasks fit seamlessly into your lifestyle. Whether you have a few hours a day or can dedicate more time, our platform allows you to tailor your work schedule to fit your lifestyle.<br/><br/>
 
<b>● Diverse Projects :</b> Engage in a variety of annotation tasks that cover different Indian languages. From transcribing audio to labeling text data to data curation, you’ll find engaging tasks that keep your work interesting and dynamic and enhance your skills and knowledge.<br/><br/>
 
<b>● Skill Development :</b> As you work on diverse projects, you’ll gain valuable experience and improve your understanding of language nuances and develop your analytical skills.<br/><br/>
 
<b>● Competitive Earnings :</b> Get rewarded for your contributions! Our platform offers competitive compensation for your annotation work, allowing you to earn while you learn.<br/><br/>
 
<b>● Make a Difference :</b> Your efforts will play a crucial role in advancing technology that understands and processes Indian languages, making digital content more accessible to millions. Be a part of a movement that celebrates and preserves linguistic diversity and help bridge the gap between technology and language.
    
  </Typography>
  </Container>
</div>

<div 
  style={{
    margin:"50px",
    marginTop:"5%",
    marginBottom:"15%"
    }}
>  
<Typography variant='h6' align="justify" style={{margin:"20px",fontFamily:"sans-serif"}}>
<br/>
<h3 style={{textAlign:"center"}}><b>Who Can Participate?</b></h3><br/>
<b>● Language Enthusiasts :</b> If you have a strong command or fluency in any Indian language and a passion for linguistics, we want you!
<br/><br/>
 
<b>● Students, Professionals, Job Seekers :</b> Whether you’re a student looking to earn some extra income or a professional seeking to expand your skills, our platform welcomes all.<br/><br/>
 
<b>● Detail-Oriented Individuals :</b> If you have an eye for detail and a knack for accuracy, you’ll thrive in our annotation tasks.
<br/><br/>
 
<b>● Reliability :</b> Commitment to completing tasks on time and maintaining high-quality work.
    
  </Typography> 
  </div>

     <div  style={{
  minHeight: "500px",   // Minimum height of 500px
  height: 'auto',       // Let the height adjust based on content
  maxHeight: "2500px",  
  width: '99%',
  //background: 'linear-gradient(to right, #23d6d4, #0a3758)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',       // Added some padding for spacing
  margin: "10px auto",   // Centered the div horizontally
  overflowY: "auto" ,     // Allow vertical scrolling if content overflows
  background:'linear-gradient(to right, #4c00ff, #1b1464)'
}}>

    <Container style={{marginBottom:"50px"}}>
      
        <Typography variant='h3' align='center' style={{margin:"20px",color:"white",fontWeight: 'bold',fontFamily:"cursive"}}>
              Activities in which you can participate
        </Typography>
        <Divider
          sx={{
            backgroundColor: 'white', 
            height: '5px',           
            margin: '10px 0px'
        }}/>

<Typography variant='h6' align='center' style={{margin:"20px",color:"white",fontWeight: '',fontFamily:"cursive"}}>
       In our data annotation program we would initiate multiple activities based on the need of the project. If you are eligible, you can participate in those activities, and can earn money accordingly. Some of the common activities currently going on are mentioned below. Once again it is mentioned that the activities would change based on the need of the project.        
  </Typography>
        
        <Grid container spacing={5}  justifyContent="center" style={{marginTop:"20px"}}>
          {
            earnData.map((ele,i)=>{
              return(
                <Grid item sm={12} md={6} lg={4} key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ maxWidth: 345 }} align="center" style={{padding:"10px",marginBottom:"20px"}}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {ele.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
           {ele.description}
          </Typography>
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
  
            </Grid>
              )
            })
          }

<Button
            variant="contained"
            sx={{
              backgroundColor: '#07145f',
              borderRadius: '20px',    
              border: '2px solid gold', 
              '&:hover': {
                backgroundColor: '#7038b7', // Darker blue on hover
              },
            }}
            style={{marginTop:"40px"}} 
            onClick={handleClickOpen}
           
       >
            Languages We Are Working Now
    </Button>
     
     
        </Grid>
        
      </Container>
      </div>


      <div style={{marginTop:"40px"}}>

    <Container>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"20px"}}>
        
               <Grid item sm={12} md={10} lg={10}  style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={{ width: '100%',height:"100%", padding: '10px', margin: '10px',
                border: 'none',
                boxShadow: 'none'
               }} align="center" >
                   <MessageForm/>
               </Card>

            </Grid>
            </Grid>
        </Container>
    </div>
     
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Covered Languages</DialogTitle>
        <DialogContent>
          <LanguagesNext />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
   
    </div>
  )
}

export default Participate