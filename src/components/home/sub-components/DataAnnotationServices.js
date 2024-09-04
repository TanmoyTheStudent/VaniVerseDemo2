import { Container,Typography,Grid,Button,Card,CardActions,Box,Tab } from '@mui/material'
import FlipCard from './FlipCard';
import { servicesData } from '../../../required-data/object-data/serviceData';


function DataAnnotationServices() {



  return (
    <div>
      <div style={{margin:"20px",marginBottom:"20px"}}>  
        <Typography
        //variant="h3"
        sx={{
          fontSize: {
            xs: '1rem',  // 0px - 600px
            sm: '1.25rem',  // 600px - 960px
            md: '1.5rem',  // 960px - 1280px
            lg: '1.5rem',  // 1280px - 1920px
            xl: '1.75rem',  // 1920px and above
          },
          marginTop:"30px",
          textAlign: "justify"
          
        }} >
    	We offer a comprehensive suite of data curation in Indian languages tailored for various AI applications, including:
      </Typography><br/>

     <Typography
        //variant="h3"
        sx={{
          fontSize: {
            xs: '1rem',  // 0px - 600px
            sm: '1rem',  // 600px - 960px
            md: '1rem',  // 960px - 1280px
            lg: '1.25rem',  // 1280px - 1920px
            xl: '1.5rem',  // 1920px and above
          },
          margin:"10px",
          textAlign: "justify"
          
        }} >
<b>•	Conversational Audio Recording:</b> Extempore audio recording based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.<br/>
<b>•	Studio Audio recording:</b> Read Speech recording by the native people based on the requirements of language, dialect, gender, age of the speaker, expressive story reading.<br/>
<b>• Transcription:</b> Transcription of audio by people native to the language into accurate, readable text.<br/>
<b>• Translation :</b> Comprehensive text curation and enhancing and translating text with the help of language experts for various applications.<br/>
<b>•	Audio Verification:</b> Ensuring integrity and authenticity of audio data.<br/>
<b>•	Audio Segmentation:</b> Dividing audio into meaningful segments for analysis.<br/>
<b>•	Image Annotations: </b>Detailed image data annotations.<br/>
<b>•	Custom Data Curation: </b>We meticulously curate custom datasets in both audio and text to ensure accuracy and relevance for your AI models <br/>
<b>•	NLP Annotations:</b> Data Curation for NLPs project requirements. <br/><br/><br/>
</Typography>

</div>

<div 
  className="animated-div" 
  style={{
  minHeight: "500px",   // Minimum height of 500px
  height: 'auto',       // Let the height adjust based on content
  maxHeight: "2000px",  
  width: '99%',
  //background: 'linear-gradient(to right, #23d6d4, #0a3758)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',       // Added some padding for spacing
  //margin: "10px auto ",   // Centered the div horizontally
  overflowY: "auto",      // Allow vertical scrolling if content overflows
 
}}>
  
  
  <Grid container spacing={2} justifyContent="center" style={{ width: '100%', maxHeight: 'inherit' }}>
    
    {servicesData.map((service, index) => (
      <Grid item key={index} xs={12} sm={6} md={6} lg={4} 
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: "2%", marginTop: "30px",marginBottom:"30px" }}>
      
        <FlipCard title={service.title} link={service.link}/>
      </Grid>
    ))}
  </Grid>

</div>

    </div>
  )
}

export default DataAnnotationServices