import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';
import { Box,Typography,Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { serviceDescription } from '../../required-data/object-data/associatedServiceDescription';

const StyledScrollLink = ({ to, children }) => (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      style={{
        color: 'inherit', // Use the inherited color
        textDecoration: 'none', // Remove underline
        cursor: 'pointer', // Cursor pointer for hover
        transition: 'color 0.1s', // Smooth color transition
      }}
      onMouseEnter={(e) => (e.target.style.color = 'yellow')} // Change color on hover
      onMouseLeave={(e) => (e.target.style.color = 'inherit')} // Revert color on hover out
    >
      {children}
    </ScrollLink>
  )

function AssociatedServices() {
  return (
    <div>
         <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right, #4c00ff, #1b1464)', // Adjust the gradient colors
        height:"500px",
        padding: "20px",
        color: 'white',
      }}
    >
     

      <Box sx={{ maxWidth: '100%',margin:0,padding:"50px",alignItems:'center' }}>
        
      <Typography
      variant="h4"
      component="div"
      sx={{
        fontWeight: 'bold',
        fontSize: {
          xs: '1.25rem',
          sm: '1.5rem',
          md: '1.75rem',
          lg: '2rem',
          xl: '2.5rem'
        },
        textAlign: 'justify',
      }}
    >
      {/* Using the reusable StyledScrollLink component */}
      <StyledScrollLink to="details1">● Audio Segmentation</StyledScrollLink>
      <br />
      <StyledScrollLink to="details2">● Image Annotations</StyledScrollLink>
      <br />
      <StyledScrollLink to="details3">● Audio Verification</StyledScrollLink>
      <br />
      <StyledScrollLink to="details4">● NLP Annotations</StyledScrollLink>
    </Typography>

      </Box>
      
    
      
    </Box>


{
    serviceDescription.map((service,i)=>{
        return(
            <div key={i} style={{margin:"50px",marginTop:"150px",marginBottom:"100px"}}>
            <Element name={service.name} >
            <Typography 
            //variant="h3"
            component="div" 
            sx={{ fontWeight: 'bold',
              fontSize: {xs: '1.75rem',  
              sm: '2rem',  
              md: '2.25rem',  
              lg: '2.5rem',  
              xl: '2.75rem', 
              },
            textAlign:"center",color:"navy"}}>
       
            {service.title}
      </Typography>
      <Typography
        //variant="h3"
        sx={{
          fontSize: {
            xs: '1rem',  // 0px - 600px
            sm: '1.25rem',  // 600px - 960px
            md: '1.5rem',  // 960px - 1280px
            lg: '1.5rem',  // 1280px - 1920px
            xl: '1.75rem',  // 1920px and above
          },
          textAlign: "justify",
          lineHeight: '2',
          marginTop:"80px",
          marginBottom:"80px"
          
        }} >
    	{service.description}
      </Typography>
      
        
      </Element>
            </div>
        )
    })
}

{/* Scroll to Top Button */}
<Box
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <Button
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })} // Use scroll.scrollToTop with duration
          variant="contained"
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
            borderRadius: '50%',
            padding: '10px',
            minWidth: '0',
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      </Box>
   
      
    </div>
  )
}

export default AssociatedServices