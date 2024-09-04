// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import WordCloud from "../../../required-data/assests/image/word-cloud-old.jpeg"

// const Languages = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         background: 'linear-gradient(to right, #4c00ff, #1b1464)', // Gradient background
//         padding: 4,
//         color: 'white',
//       }}
//     >
//       <Box sx={{ maxWidth: '50%' }}>
//         <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
//           High-quality Audio / Speech / Voice Datasets to Train Your Conversational AI Model
//         </Typography>
//         <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
//           Off-the-shelf Voice / Speech / Audio Datasets in multiple languages to jump start your automatic speech recognition (ASR) models
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           position: 'relative',
//           width: '50%',
//           height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'flex-end',
//         }}
//       >
//         {/* <Box
//           sx={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             background: 'linear-gradient(to right, rgba(28, 20, 100, 0) 50%, #1b1464 100%)',
//             mixBlendMode: 'multiply',
//           }}
//         /> */}
//        <img 
//   src={WordCloud} // Replace with the correct path to the image
//   alt="Microphone and waveform"
//   style={{
//     maxWidth: '90%',
//     zIndex: 1,
//     borderRadius: '50%', // Makes the image circular
//     //background: 'linear-gradient(to right, #e3e4ea , #e3e4ea )',
//     boxShadow: '0px 0px 30px 20px #8ba2f3', // Adds a soft shadow around the image
//    // filter: 'blur(0.5px)', // Slight blur to soften the edges
//     //mixBlendMode: 'multiply', // Blend mode to mix with background
//   }}
// />

//       </Box>
//     </Box>
//   );
// };

// export default Languages;


import { Box, Typography } from '@mui/material';
import WordCloud from "../../../required-data/assests/image/word-cloud-old.jpeg"
import WordCloud2 from "../../../required-data/assests/image/Language1.png"

const languages = [
     "Assamese","Bengali", "English","Hindi","Maithili", "Marathi", "Rajasthani", 
     "Sanskrit", "Santali","Telugu","Urdu"
];

const Languages = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', // Stack vertically on extra-small screens
          sm: 'column', // Stack vertically on small screens
          md: 'row', // Align horizontally on medium screens and up
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, #4c00ff, #1b1464)', // Gradient background
        padding: 4,
        color: 'white',
        minHeight:"500px",
        marginTop:"50px",
        marginBottom:"10%"
      }}
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, marginBottom: { xs: 2, md: 0 } }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
          Languages We Have Already Covered
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', // Wraps the languages names
            marginTop: 2 
          }}
        >
        {languages.map((ele, i) => (
                    <Box sx={{ 
                      minWidth:"15%",maxWidth: '25%', textAlign: 'center', margin: {xs:1,sm:2,md:3} }} key={i}>
                        <Typography variant="subtitle1">
                            {ele}
                        </Typography>
                    </Box>
                ))}
                </Box>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '50%' },
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
         {/* <img 
          src={WordCloud} 
          alt="Microphone and waveform"
          style={{
            maxWidth: '90%',
            zIndex: 1,
            borderRadius: '50%', 
            boxShadow: '0px 0px 30px 20px #8ba2f3',
          }}
        />  */}
         <img 
          src={WordCloud2} 
          alt="Microphone and waveform"
          style={{
            maxWidth: '90%',
            zIndex: 1,
            borderRadius: '50%', 
            boxShadow: '0px 0px 30px 20px #8ba2f3',
            background:"white"
          }}
        />
      </Box>
    </Box>
  );
};

export default Languages;
