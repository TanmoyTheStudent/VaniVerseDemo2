import { useState } from 'react';
import { Typography, Button } from '@mui/material';

function Translation1() {

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
 
<b>1. Improving Machine Translation Quality :</b><br/>
    Translation annotations play a crucial role in enhancing the quality of machine translation (MT) systems. Given the structural and morphological complexities of Indian languages, annotated parallel corpora can significantly improve the training of statistical machine translation (SMT) and neural machine translation (NMT) systems. For instance, the use of preordering and suffix separation techniques has been shown to address structural divergence between English and Indian languages, leading to better translation outcomes.
    <br/><br/>

<b>2. Resource-Poor Language Support :</b><br/>
    Many Indian languages are considered resource-poor, meaning there is a scarcity of high-quality parallel corpora. By creating annotated datasets, researchers can facilitate the development of MT systems that cater to these languages.
    <br/><br/>

<b>3. Domain-Specific Translation :</b><br/>
    Translation annotations can help tailor MT systems for specific domains such as healthcare, agriculture, and tourism. By annotating data pertinent to these fields, MT systems can be trained to produce more accurate and contextually relevant translations.
    <br/><br/>

<b>4. Facilitating Government Communication :</b><br/>
    With Hindi and English being the official languages in India, translation annotations can assist in translating government documents into regional languages. This ensures that important information reaches a broader audience, thereby enhancing public engagement and understanding of government initiatives.
    <br/><br/>

<b>5. Enhancing User Interaction with AI Systems :</b><br/>
    Incorporating translation annotations into conversational AI systems can improve user interactions in regional languages. By training models with annotated datasets, these systems can better understand and respond to user queries in various Indian languages, thus making AI technology more accessible to non-English speakers.
    <br/><br/>

<b>6. Leveraging Annotated Datasets :</b><br/>
    High-quality RAG systems rely on the availability of well-annotated datasets. By integrating translation annotations, RAG systems can retrieve relevant information more effectively, ensuring that the generated responses are contextually accurate and linguistically appropriate. The combination of retrieval and generation allows for more nuanced responses, particularly in languages with rich morphological structures.
    <br/><br/>

<b>7. Utilizing Transformer Architectures :</b><br/>
    Recent advancements in transformer architectures have shown promise in improving the performance of RAG systems. By training these models on large annotated datasets, including those that encompass multiple Indian languages, the systems can learn to generate coherent and contextually relevant text, enhancing the overall user experience.
    <br/><br/>

<b>8. Back-Translation Techniques :</b><br/>
    Employing back-translation methods can further enhance the quality of RAG systems. By translating generated content back into the source language and comparing it with the original, developers can refine the output quality, ensuring that it aligns well with user expectations and linguistic norms.
    <br/><br/>

<b>9. Continuous Learning and Adaptation :</b><br/>
    RAG systems can benefit from continuous learning mechanisms that incorporate user feedback and new annotated data over time. This iterative approach allows the systems to adapt to evolving language use and user preferences, ensuring sustained relevance and accuracy in translations.
    <br/><br/>
    
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

 <b>1. Improving Machine Translation Quality :</b><br/>
    Translation annotations play a crucial role in enhancing the quality of machine translation (MT) systems. Given the structural and morphological complexities of Indian languages, annotated parallel corpora can significantly improve the training of statistical machine translation (SMT) and neural machine translation (NMT) systems. For instance, the use of preordering and suffix separation techniques has been shown to address structural divergence between English and Indian languages, leading to better translation outcomes.
    <br/><br/>

<b>2. Resource-Poor Language Support :</b><br/>
    Many Indian languages are considered resource-poor, meaning there is a scarcity of high-quality parallel corpora. By creating annotated datasets, researchers can facilitate the development of MT systems that cater to these languages.
    <br/><br/>

<b>3. Domain-Specific Translation :</b><br/>
    Translation annotations can help tailor MT systems for specific domains such as healthcare, agriculture, and tourism. By annotating data pertinent to these fields, MT systems can be trained to produce more accurate and contextually relevant translations.
    <br/><br/>

<b>4. Facilitating Government Communication :</b><br/>
    With Hindi and English being the official languages in India, translation annotations can assist in translating government documents into regional languages. This ensures that important information reaches a broader audience, thereby enhancing public engagement and understanding of government initiatives.
    <br/><br/>
   
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

export default Translation1



