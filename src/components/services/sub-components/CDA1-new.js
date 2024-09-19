import { useState } from 'react';
import { Typography, Button } from '@mui/material';

function CDA1New() {

   const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (

<div style={{margin:"20px",marginBottom:"50px"}}>
        

{showFullText ? (

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

<b>1. Development of Comprehensive Language Models :</b><br/>
Custom data curation enables the creation of extensive datasets that reflect the linguistic diversity of Indian languages. The models can be trained on this data and learn the unique syntactic and semantic structures of each language. This comprehensive dataset allows for the development of robust LLMs that can handle various linguistic nuances, enhancing performance in tasks such as text generation, sentiment analysis, and machine translation.<br/><br/>

<b>2. Domain-Specific Applications :</b><br/>
Curation efforts can focus on specific domains such as healthcare, finance, and education, ensuring that the datasets include relevant terminology and context. For example, curated datasets can support applications in telemedicine by providing accurate medical terminologies in local languages, thereby improving communication between healthcare providers and patients. This targeted approach allows LLMs to perform better in specialized tasks, such as legal document analysis or financial reporting, where domain knowledge is critical.<br/><br/>

<b>3. Enhancing Multilingual Conversational AI :</b><br/>
Custom data curation is vital for building multilingual conversational AI systems that cater to diverse user bases. By curating datasets that include conversational interactions in various Indian languages, developers can create AI systems that understand and respond appropriately to user queries. This is particularly important in customer service applications, where accurate understanding of user intent in multiple languages can significantly enhance user experience.<br/><br/>

<b>4. Addressing Data Scarcity in Low-Resource Languages :</b><br/>
Many Indian languages are considered low-resource, lacking sufficient training data for effective model training. Custom curation efforts can focus on generating synthetic data or augmenting existing datasets to fill these gaps. <br/><br/>

<b>5. Cultural and Contextual Relevance :</b><br/>
Curated datasets can incorporate culturally relevant content, ensuring that LLMs are not only linguistically accurate but also contextually appropriate. This is crucial for applications in media, education, and entertainment, where cultural nuances can significantly impact user engagement and understanding. By including local idioms, expressions, and culturally significant references, curated datasets can enhance the relatability and effectiveness of AI applications.<br/><br/>

 
 </Typography> ) : (

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

<b>1. Development of Comprehensive Language Models :</b><br/>
Custom data curation enables the creation of extensive datasets that reflect the linguistic diversity of Indian languages. The models can be trained on this data and learn the unique syntactic and semantic structures of each language. This comprehensive dataset allows for the development of robust LLMs that can handle various linguistic nuances, enhancing performance in tasks such as text generation, sentiment analysis, and machine translation.<br/><br/>

<b>2. Domain-Specific Applications :</b><br/>
Curation efforts can focus on specific domains such as healthcare, finance, and education, ensuring that the datasets include relevant terminology and context. For example, curated datasets can support applications in telemedicine by providing accurate medical terminologies in local languages, thereby improving communication between healthcare providers and patients. This targeted approach allows LLMs to perform better in specialized tasks, such as legal document analysis or financial reporting, where domain knowledge is critical.<br/><br/>
   
</Typography>
   )}

<Button 
        onClick={toggleText} 
        variant="contained" 
        sx={{ display: 'block', margin: '20px auto' }}
      >
        {showFullText ? "Show Less" : "Load More"}
      </Button>
   
    </div>
  )
}

export default CDA1New