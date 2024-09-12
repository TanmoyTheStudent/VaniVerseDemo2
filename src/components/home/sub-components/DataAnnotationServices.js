import { Typography,Grid} from '@mui/material'
import FlipCard from './FlipCard';
import { servicesData } from '../../../required-data/object-data/serviceData';


function DataAnnotationServices() {

  return (
    <div>

      <div 
  className="animated-div" 
  style={{
  minHeight: "500px",   
  height: 'auto',       
  maxHeight: "2000px",  
  width: '99%',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',       
  //margin: "10px auto ",  
  overflowY: "auto",      
 
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

      <div style={{margin:"20px",marginTop:"100px",marginBottom:"20px"}}>  
        <Typography
        sx={{
          fontSize: {
            xs: '1.35rem', 
            sm: '1.4rem',  
            md: '1.5rem',  
            lg: '1.75rem',  
            xl: '2rem',  
          },
          marginTop:"30px",
          textAlign: {xs:"center",sm:"justify"}
          
        }} >
    	We offer a comprehensive suite of data curation in Indian languages tailored for various AI applications, including:
      </Typography><br/>

     <Typography
        sx={{
          fontSize: {
            xs: '1.25rem',  
            sm: '1.35rem',  
            md: '1.4rem',  
            lg: '1.4rem', 
            xl: '1.75rem',  
          },
          margin:"10px",
          textAlign: {xs:"left",sm:"justify"},
          display: { xs: 'none', sm: 'block' }
          
        }} >
<b>• Conversational Audio Recording:</b> Extempore audio recording based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.<br/>
<b>• Studio Audio recording:</b> Read Speech recording by the native people based on the requirements of language, dialect, gender, age of the speaker, expressive story reading.<br/>
<b>• Transcription:</b> Transcription of audio by people native to the language into accurate, readable text.<br/>
<b>• Translation:</b> Comprehensive text curation and enhancing and translating text with the help of language experts for various applications.<br/>
<b>• Audio Verification:</b> Ensuring integrity and authenticity of audio data.<br/>
<b>• Audio Segmentation:</b> Dividing audio into meaningful segments for analysis.<br/>
<b>• Image Annotations:</b> Detailed image data annotations.<br/>
<b>• Custom Data Curation:</b> We meticulously curate custom datasets in both audio and text to ensure accuracy and relevance for your AI models <br/>
<b>• NLP Annotations:</b> Data Curation for NLPs project requirements. <br/><br/><br/>
</Typography>

<Typography
        sx={{
          fontSize: {
            xs: '1.25rem', 
            sm: '1.35rem',
            md: '1.4rem',  
            lg: '1.4rem',  
            xl: '1.75rem', 
          },
          margin:"0px",
          textAlign: {xs:"center",sm:"justify"},
          display: { xs: 'block', sm:'none'  }
          
        }} >
<b>• Conversational Audio Recording:</b><br/> Extempore audio recording based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.<br/><br/>
<b>• Studio Audio recording:</b><br/> Read Speech recording by the native people based on the requirements of language, dialect, gender, age of the speaker, expressive story reading.<br/><br/>
<b>• Transcription:</b><br/> Transcription of audio by people native to the language into accurate, readable text.<br/><br/>
<b>• Translation:</b><br/> Comprehensive text curation and enhancing and translating text with the help of language experts for various applications.<br/><br/>
<b>• Audio Verification:</b><br/> Ensuring integrity and authenticity of audio data.<br/><br/>
<b>• Audio Segmentation:</b><br/> Dividing audio into meaningful segments for analysis.<br/><br/>
<b>• Image Annotations:</b><br/> Detailed image data annotations.<br/><br/>
<b>• Custom Data Curation:</b><br/> We meticulously curate custom datasets in both audio and text to ensure accuracy and relevance for your AI models <br/><br/>
<b>• NLP Annotations:</b><br/> Data Curation for NLPs project requirements. <br/><br/><br/>
</Typography>

</div>


    </div>
  )
}

export default DataAnnotationServices
