import { Typography } from '@mui/material';

function AR2() {
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

        <b>1. Topic Selection :</b> We begin by brainstorming and creating a comprehensive list of potential topics for the recordings. This step is crucial, especially if the recordings are to be done extempore, ensuring a wide range of engaging and relevant subjects.<br/><br/>
        <b>2. Selecting Native Speakers :</b> Next, we carefully select individuals who are native speakers of the target language. This ensures authenticity and natural fluency in the recordings.<br/><br/>
        <b>3. Initial Sample Recording :</b> A sample set of recordings is then created. This initial set serves as a benchmark and helps us identify any areas that may need improvement.<br/><br/>
        <b>4. Refinement and Adjustments :</b> Based on the sample recordings, we make necessary adjustments to meet the specific requirements of the project. This could involve tweaking the audio quality, adjusting the pacing, or refining the content to better suit the  project.<br/><br/>
        <b>5. Final Recording :</b> Once all adjustments are made, we proceed with the final recording. This step ensures that the audio meets the highest standards of quality and relevance.<br/><br/>

</Typography>
</div>
  )
}

export default AR2
