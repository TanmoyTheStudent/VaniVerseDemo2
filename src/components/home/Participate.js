import { useState } from 'react';
import LanguagesNext from './sub-components/LanguagesNext';
import { Container,Typography,Grid,Button,Card,CardActions,Divider,Dialog,DialogContent,DialogActions,DialogTitle } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import EarnImage2 from "../../required-data/assests/image/earn2.jpeg"
import MessageForm from './MessageForm';
import { earnData } from '../../required-data/object-data/earnData';
import AnnotatorRegistration from './sub-components/AnnotatorRegistration';

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
        <Card sx={{ width: '100%',height:"100%", padding: {xs:'0px',md:"10px"}, margin: {xs:'0px',md:"10px"},boxShadow:"none"}} align="center" >
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
                            sx={{fontFamily:"Georgia",
                              textAlign:{
                                xs:"justify",
                                md:"center"
                              }
                          }}  
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
  maxHeight: "2500px",  
  width: '99%',
  //background: 'linear-gradient(to right, #23d6d4, #0a3758)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //padding: '10px',       // Added some padding for spacing
  //margin: "10px auto",   // Centered the div horizontally
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

<Typography variant='h6' align="justify" style={{margin:"4%",color:"white",fontWeight: '',fontFamily:"sans-serif"}}>
<br/>
<h3 style={{textAlign:"center"}}><b>Why Become an Annotator?</b></h3><br/>
<b>• Flexible Work Hours :</b> Enjoy the freedom to work at your own pace and schedule. Whether you’re a student, a homemaker, professional or someone looking for a side hustle, our annotation tasks fit seamlessly into your lifestyle. Whether you have a few hours a day or can dedicate more time, our platform allows you to tailor your work schedule to fit your lifestyle.<br/><br/>
 
<b>• Diverse Projects :</b> Engage in a variety of annotation tasks that cover different Indian languages. From transcribing audio to labeling text data to data curation, you’ll find engaging tasks that keep your work interesting and dynamic and enhance your skills and knowledge.<br/><br/>
 
<b>• Skill Development :</b> As you work on diverse projects, you’ll gain valuable experience and improve your understanding of language nuances and develop your analytical skills.<br/><br/>
 
<b>• Competitive Earnings :</b> Get rewarded for your contributions! Our platform offers competitive compensation for your annotation work, allowing you to earn while you learn.<br/><br/>
 
<b>• Make a Difference :</b> Your efforts will play a crucial role in advancing technology that understands and processes Indian languages, making digital content more accessible to millions. Be a part of a movement that celebrates and preserves linguistic diversity and help bridge the gap between technology and language.
    
  </Typography>
  </Container>
</div>

<div 
  style={{
    marginTop:"5%",
    marginBottom:"15%"
    }}
>  
<Typography variant='h6' align="justify" style={{margin:"4%",fontFamily:"sans-serif"}}>
<br/>
<h2 style={{textAlign:"center"}}><b>Who Can Participate?</b></h2><br/>
<b>• Language Enthusiasts :</b> If you have a strong command or fluency in any Indian language and a passion for linguistics, we want you!
<br/><br/>
 
<b>• Students, Professionals, Job Seekers :</b> Whether you’re a student looking to earn some extra income or a professional seeking to expand your skills, our platform welcomes all.<br/><br/>
 
<b>• Detail-Oriented Individuals :</b> If you have an eye for detail and a knack for accuracy, you’ll thrive in our annotation tasks.
<br/><br/>
 
<b>• Reliability :</b> Commitment to completing tasks on time and maintaining high-quality work.
    
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
      
        <Typography variant='h4' align='center' style={{margin:"20px",color:"white",fontWeight: 'bold',fontFamily:"sans-serif",
          marginTop:"5%",marginBottom:"5%"}}>
              Activities in which you can participate
        </Typography>
        

<Typography variant='h6' align='center' sx={{margin:"4%",color:"white",fontWeight: "initial",fontFamily:"sans-serif",textAlign:{xs:"justify",md:"center"}}}>
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
            Languages We Are Looking For
    </Button>
     
     
        </Grid>
        
      </Container>
      </div>


{/* Join Us today */}

<div 
 style={{
  backgroundColor:"ButtonHighlight",
  minHeight: "500px",   // Minimum height of 500px
  height: 'auto',       // Let the height adjust based on content
  maxHeight: "2500px",  
  width: '100%',
  //background: 'linear-gradient(to right, #23d6d4, #0a3758)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',       // Added some padding for spacing
  margin: " auto",   // Centered the div horizontally
  overflowY: "auto"      // Allow vertical scrolling if content overflows
}}>



      <Container style={{marginBottom:"10%"}}>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"0px"}}>

        <Grid item sm={12} md={12} lg={12}  style={{ display: 'flex', justifyContent: 'center' }}>
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
           marginBottom:"5%"
        }}
      >
        <span style={{ whiteSpace: 'nowrap' }}>Join Us Today!</span>
      </Typography> 
      
      <Typography
       
        sx={{
          fontSize: {
            xs: '1.25rem',  // 0px - 600px
            sm: '1.25rem',  // 600px - 960px
            md: '1.5rem',  // 960px - 1280px
            lg: '1.5rem',  // 1280px - 1920px
            xl: '2rem',  // 1920px and above
          },
          marginBottom: "8%",
          textAlign:{xs:"justify",md:"center"}
        }}
      >
       Become a part of our growing community of annotators and contribute to the exciting field of Indian language processing. Together, we can contribute to a future where technology understands and respects the richness of Indian languages.
      </Typography>
                   
               </Card>
              </Grid>

        <Grid item sm={12} md={12} lg={6}  style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ width: '100%',height:"100%", padding: '0px', margin: '0px',marginTop:{xs:"50px",md:"120px"},border: 'none',
                  boxShadow: 'none',
                  background:"none"}} align="center" >
       <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: '1.5rem',  // 0px - 600px
            sm: '1.5rem',  // 600px - 960px
            md: '1.75rem',  // 960px - 1280px
            lg: '2rem',  // 1280px - 1920px
            xl: '2rem',  // 1920px and above
          },
          margin: 0,
          color:"black",
           fontWeight: 'bold',
           marginBottom:"5%"
        }}
      >
        <span style={{ whiteSpace: 'nowrap' }}>How to Get Started?</span>
      </Typography> 
      
      <Typography
       
        sx={{
          fontSize: {
            xs: '1.25rem',  // 0px - 600px
            sm: '1.25rem',  // 600px - 960px
            md: '1.25rem',  // 960px - 1280px
            lg: '1.25rem',  // 1280px - 1920px
            xl: '1.25rem',  // 1920px and above
          },
          marginBottom: 3,
          textAlign:"justify"
        }}
      >
       <b>1. Sign Up :</b> Visit our website and create an account. It’s quick and easy!
<br/><br/>
 
<b>2. Complete Training:</b> Participate in a brief training session to familiarize yourself with our guidelines and tools.
<br/><br/>
 
<b>3. Start Annotating:</b> Once trained, you can begin taking on annotation tasks that match your language skills and interests.
<br/><br/>

Sign up now and start your journey with us as an annotator! Your expertise and passion can make a real impact.

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
                   <AnnotatorRegistration/>
                   
               </Card>

            </Grid>
            </Grid>
            </Container>

</div>

    
  <div style={{marginTop:"50px",marginBottom:"50px",padding:"50px",background:"navy"}}>

    <Container>
        <Grid container spacing={0}  justifyContent="center" style={{margin:"0px"}}>
        
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
        <DialogTitle> Languages</DialogTitle>
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
