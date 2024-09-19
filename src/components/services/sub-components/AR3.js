import { Typography } from '@mui/material';

function AR3() {
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
  
        <b>1. Guideline Creation :</b> We start by developing detailed guidelines to ensure annotators clearly understand the project’s requirements.<br/><br/>
        <b>2. Text Segmentation :</b> The provided text file is divided into smaller, manageable segments for easier handling.<br/><br/>
        <b>3. Sample Set Creation :</b> A small set of text is created and tested with the annotators to ensure they meet the project’s standards.<br/><br/>
        <b>4. Recording Sessions :</b> Depending on the project’s needs—whether it’s dialectal speech, expressive speech, or story reading—the recording of the text segments is carried out.<br/><br/>
  
</Typography>

         
      </div>
    )
  }
  
  export default AR3
