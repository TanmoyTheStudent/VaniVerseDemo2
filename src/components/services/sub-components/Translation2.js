import { Typography } from '@mui/material';

function Translation2() {
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
//   marginTop: "80px",
//   marginBottom: "80px",
  '@media (max-width: 450px)': {
textAlign:"left"
}
}}
>
  
         <b>1. Project Guidelines Creation :</b>  We begin by developing detailed guidelines to ensure our annotators have a clear understanding of the project’s goals and requirements.<br/><br/>
         <b>2. Native Speaker Translation:</b>   Sample text segments are translateded by native speakers of the language. Based on the quality of their translations, they are selected for the project.<br/><br/>
         <b>3. Content Analysis :</b> Each segment is carefully analyzed for any religious, political, abusive, inappropriate, controversial, or personal content, and marked accordingly.<br/><br/>
         <b>4. 4.	Two-Step Review :</b> Depending on the project’s requirements, a two-step review process is conducted to ensure accuracy and quality.<br/><br/>
  
</Typography>
         
</div>
    )
  }
  
  export default Translation2
