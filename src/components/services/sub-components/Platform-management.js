import { Box,Typography} from '@mui/material';
import Image from "../../../required-data/assests/image/management.jpeg"

const PlatformManagement = () => {
  return (
    <>
    <Box
    sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column', // Stack vertically on extra-small screens
        sm: 'column', // Stack vertically on small screens
        md: 'row', // Align horizontally on medium screens and up
      },
      alignItems: 'center',
      justifyContent: 'space-evenly',
      //padding: 4,
      color: 'navy',
      minHeight:"500px",
      marginTop:"50px",
      marginBottom:"50px"
    }}
  >
    <Box sx={{ maxWidth: { xs: '100%', md: '20%' }, marginBottom: { xs: 2, md: 0 } }}>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold',textAlign:"center"}}>
       MANAGEMENT
      </Typography>

     </Box>

    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', md: '70%' },
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img 
        src={Image} 
        alt="Microphone and waveform"
        style={{
          maxWidth: '90%'
        }}
      />
    </Box>
  </Box>
  <div>
    
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
<b>•	Audio Recording:</b> Extempore audio recording based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.<br/>
<b>•	Text to Speech: </b>Audio recording of the written text based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.<br/>
<b>•	Speech to Text:</b> Transcription of audio into accurate, readable text.<br/>
<b>•	Text to Text:</b> Comprehensive text curation and enhancing and translating text for various applications.<br/>
<b>•	Audio Verification:</b> Ensuring integrity and authenticity of audio data.<br/>
<b>•	Audio Segmentation:</b> Dividing audio into meaningful segments for analysis.<br/>
<b>•	Image Annotations: </b>Detailed image data annotations.<br/>
<b>•	Data Creation: </b>We meticulously curate custom datasets in both audio and text to ensure accuracy and relevance for your AI models <br/>
<b>•	NLP Services:</b> implementing Natural Language Processing solutions to meet specific project requirements. <br/><br/><br/>
</Typography>
  </div>
  </>
  );
};

export default PlatformManagement;
