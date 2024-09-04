import { Link } from "react-router-dom";
import { Typography,Box,Button } from "@mui/material"

function ProvidingPlatform2() {
  return (
    <div>
        <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', // Stack vertically on extra-small screens
          sm: 'column', // Stack vertically on small screens
          md: 'row', // Align horizontally on medium screens and up
        },
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: 'linear-gradient(to right, #4c00ff, #1b1464)', // Gradient background
        padding: 4,
        color: 'white',
        minHeight:"550px",
        marginTop:"50px",
        marginBottom:"10%"
      }}
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '70%' }, marginBottom: { xs: 2, md: 0 } }}
      style={{ display: 'flex', flexDirection: 'column'
      , justifyContent: 'center',alignItems: 'center', padding:"0%"}}>
       

        <Typography
    variant="body"
    sx={{
      //margin:"2%",
      color: 'white',
      fontSize: {
        xs: '1rem',   // 0px - 600px
        sm: '1.25rem',     // 600px - 960px
        md: '1.25rem',   // 960px - 1280px
        lg: '1.25rem',   // 1280px - 1920px
        xl: '1.5rem',   // 1920px and above
      },
      display: 'block',  // Ensure Typography is displayed as a block element
      margin: '10px',  // Optional: Add some space between the title and description
      textAlign: 'justify',  
    }}
  >
  	We offer a robust platform where you can host and manage your own data curation projects, streamlining your workflow, managing annotators, and enhancing productivity. Some of the key features are as follows-<br/><br/>
<b> - Annotator Management:</b> Efficiently manage annotator registrations, performance, and feedback.<br/>
<b> - Project Management:</b> Monitor and control all aspects of your project, from creation to completion.<br/>
<b> - Security:</b> Ensure secure access with unique project codes and controlled user permissions.<br/>
<b> - Payment:</b> Streamline payment processes with our integrated accounting system.<br/>
<b> - Customised Platform: </b>Tailor the platform to meet the specific needs of your project.<br/>
<b> - Dataset Management:</b> Easily upload, manage, and download your datasets.<br/>
<b> - Quality Control: </b>Implement robust quality control measures through practice sets and review processes.<br/><br/>
Our platform is designed to make your annotation projects seamless, efficient, and of the highest quality. Join us today to experience the difference.

  </Typography><br/>
     

    </Box> 

      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '30%' },
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
            variant="contained"
            sx={{
                padding:"20px",
              backgroundColor: '#7038b7', // Blue background color
              border: '2px solid gold',
              borderRadius: '30px',       // Rounded corners
              '&:hover': {
                backgroundColor:'#07145f' , // Darker blue on hover
              },
            }}
            component={Link}
            to="/our-services/providing-platform"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View More
    </Button>
       
      </Box>
    </Box>
    </div>
  )
}

export default ProvidingPlatform2