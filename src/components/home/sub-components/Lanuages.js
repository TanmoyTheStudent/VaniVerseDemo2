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
          xs: 'column', 
          sm: 'column', 
          md: 'row', 
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, white,#094f87)', 
        padding: 4,
        //color: 'white',
        minHeight:"500px",
        marginTop:"50px",
        marginBottom:"10%"
      }}
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, marginBottom: { xs: 2, md: 0 } }}>
        <Typography  component="div" sx={{ fontWeight: 'bold',textAlign:"center",fontSize: {xs: '1.75rem', sm: '2rem', md: '2rem', lg: "2.25rem", xl: "2.5rem"} }}>
          Languages We Have Already Covered
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            marginTop: 2,
            marginLeft:{xs:"3%",sm:"5%",md:"1%",xl:"7%"}
          }}
        >
        {languages.map((ele, i) => (
                    <Box sx={{ 
                      minWidth:"15%",maxWidth: '25%', textAlign: 'center', margin: {xs:1.5,sm:1.5,md:3} }} key={i}>
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
         
         <img 
          src={WordCloud2} 
          alt="Microphone and waveform"
          style={{
            maxWidth: '90%',
            zIndex: 1,
            borderRadius: '50%', 
            //boxShadow: '0px 0px 30px 20px #8ba2f3',
            background:"white"
          }}
        />
      </Box>
    </Box>
  );
};

export default Languages;
