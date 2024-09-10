import { Box, Typography } from '@mui/material';
import WordCloud from "../../../required-data/assests/image/Language4.png"

const languages = [
    "Gujrati","Kankoni","Kannada","Khasi","Magahi","Malayalam","Nepali","Odia","Punjabi","Tamil"
];

const LanguagesNext = () => {
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
        background: 'linear-gradient(to right, #4c00ff, #1b1464)', 
        padding: 4,
        color: 'white',
        minHeight:"500px",
        marginTop:"50px",
        marginBottom:"50px"
      }}
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, marginBottom: { xs: 2, md: 0 } }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold',textAlign:"center"}}>
          Languages Those Are In Our WishList
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            marginTop: 2 
          }}
        >
        {languages.map((ele, i) => (
                    <Box sx={{ minWidth:"15%",maxWidth: '35%', textAlign: 'center', margin: {xs:1,sm:2,md:3} }} key={i}>
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
          src={WordCloud} 
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

export default LanguagesNext;
