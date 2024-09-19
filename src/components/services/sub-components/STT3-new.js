import { Typography } from '@mui/material';

function STT3New() {
  return (

<div style={{margin:"20px",marginBottom:"50px"}}>
        

    <Typography
    sx={{
      fontSize: {
        xs: '1.25rem',
        sm: '1.3rem',
        md: '1.35rem',
        lg: '1.4rem',
        xl: '1.5rem',
      },
      textAlign: "justify",
     // lineHeight: '2',
      fontFamily:"unset",
      wordSpacing: "2px",
      color:"white",
    //   marginTop: "80px",
    //   marginBottom: "80px",
      '@media (max-width: 450px)': {
    textAlign:"left"
    }
    }}
    >

           <b>1. Project Guidelines Creation:</b> We start by crafting a comprehensive guideline to ensure our annotators fully understand the project’s objectives and requirements.<br/><br/>
           <b>2. Audio Segmentation:</b> The provided audio file is divided into smaller, manageable segments for detailed analysis.<br/><br/>
           <b>3. Non-Verbal Sound Identification:</b> We meticulously identify and mark pauses, noises, coughs, laughter, breathing sounds, humming, and other non-verbal sounds within the audio.<br/><br/>
           <b>4. Speaker Identification:</b> For audio with multiple speakers, we identify and label each speaker within the segments.<br/><br/>
           <b>5. Native Speaker Transcription:</b> Sample audio segments are given to native speakers of the language. Based on the quality of their transcriptions, they are selected for the project.<br/><br/>
           <b>6. Content Analysis:</b> Each segment is thoroughly analyzed for any religious, political, abusive, inappropriate, controversial, or personal content, and marked accordingly.<br/><br/>
           <b>7. Two-Step Review:</b> Depending on the project’s requirements, a two-step review process is conducted to ensure accuracy and quality.

    </Typography>
       
  </div>
  )
}

export default STT3New
