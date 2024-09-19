import { Box, Typography } from '@mui/material';

const languages = [
     "Boro","Kannada","Khasi","Kokborok","Magahi","Malayalam","Meitei","Nepali","Odia","Tamil"
];

const LanguagesNow = () => {
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
        background: 'navy',
        padding: 4,
        color: 'white',
        minHeight:"500px",
        marginTop:"50px",
        marginBottom:"50px"
      }}
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '100%' }, marginBottom: { xs: 2, md: 0 } }}>
        <Typography
        component="div" 
        sx={{ 
          fontWeight: 'bold',
          textAlign:"center",
          fontSize: {
            xs: '1.75rem', 
            sm: '2rem', 
            md: '2rem',
            lg: "2.25rem",
            xl: "2.5rem"
           
          }
        }}>
          Languages Those Are We Looking For
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', // Wraps the languages names
            marginTop: 2,
            marginLeft:{xs:"3%",sm:"5%",md:"1%",xl:"7%"}
          }}
        >
        {languages.map((ele, i) => (
                    <Box sx={{ minWidth:"20%",maxWidth: '35%', textAlign: 'center', margin: {xs:1.5,sm:1.5,md:3} }} key={i}>
                        <Typography variant="subtitle1"
                         sx={{fontWeight:"bold"}}
                        >
                            {ele}
                        </Typography>
                    </Box>
                ))}
                </Box>
      </Box>

      
    </Box>
  );
};

export default LanguagesNow;
