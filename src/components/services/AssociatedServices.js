import { useEffect, useState } from 'react';
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';
import { Box, Typography, Button,Grid,Card,CardActionArea,CardContent } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { serviceDescription } from '../../required-data/object-data/associatedServiceDescription';

const AssociatedServices = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    //navbar height
    const navbarElement = document.querySelector('.navbar');
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
    console.log(navbarHeight)
  }, []); 

  const StyledScrollLink = ({ to, children }) => (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-110} // fixed navbar
      style={{
        color: 'inherit', 
        textDecoration: 'none', 
        cursor: 'pointer', 
        transition: 'color 0.1s', 
      }}
      // onMouseEnter={(e) => (e.target.style.color = 'yellow')} // Change color on hover
      // onMouseLeave={(e) => (e.target.style.color = 'inherit')} // Revert color on hover out
    >
      {children}
    </ScrollLink>
  );

  console.log(navbarHeight)

  const associatedServices=[
    {
      name:"Audio Segmentation",
      to:"details1"
    },
    {
      name:"Image Annotations",
      to:"details2"
    },
    {
      name:"Audio Verification",
      to:"details3"
    },
    {
      name:"NLP Annotations",
      to:"details4"
    }
  ]

  return (
    <div style={{ marginTop: navbarHeight }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(to right, #4c00ff, #1b1464)',
          minHeight:{xs: "550px",xl:"750px"},
          padding: "20px",
          color: 'white',
          marginBottom:"10%"
        }}
      >
        <Box sx={{ maxWidth: '100%', margin: 0, padding: { xs: "20px", sm: "30px", md: "50px" }, alignItems: 'center' }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '2.75rem',
                lg: '3rem',
                xl: '4rem'
              },
              textAlign: "center",
            }}
          >
            Other Associated Services<br/>


            <Grid container spacing={5}  justifyContent="center" sx={{mt:"1.5%",mb:"1.5%"}}>
          {
            associatedServices.map((ele,i)=>{
              return(
                <Grid item xs={12} sm={6} md={3} lg={3} key={i} style={{ display: 'flex', justifyContent: 'center',width:"100%" }}>

<StyledScrollLink to={ele.to}>
<Card
            sx={{
              width: { xs: '250px', sm: "250px", md: '100%', lg: "100%", xl: "90%" }, 
              height: { xs: "100px", sm: "100px", md: "100px", lg: "125px" },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between', 
              padding: "2%",
              marginBottom: "2%",
              background: "none",
              color: "white",
              border: "2px solid white",
              borderRadius: "25px",
              textAlign: "center",
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#06184d', 
              }
            }}
          >
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div"
                        style={{fontWeight:"bold"}}
                        >
                          {ele.name}
                        </Typography>
                       
                      </CardContent>
                   </CardActionArea>
                   
               </Card>
               </StyledScrollLink>
            </Grid>
              )}
          )}
        </Grid>

          </Typography>
        </Box>
      </Box>

      {serviceDescription.map((service, i) => (
       <Box key={i} sx={{ margin:{xs:"25px",sm:"30px",md:"50px"} , marginTop: "150px", marginBottom: "100px"}}>
          <Element name={service.name}>
            <Typography
              component="div"
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  xs: '1.75rem',
                  sm: '2rem',
                  md: '2.25rem',
                  lg: '2.5rem',
                  xl: '2.75rem',
                },
                textAlign: "center",
                 marginTop: "80px",
                color: "navy"
              }}
            >
              {service.title}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '1.25rem',
                  sm: '1.35rem',
                  md: '1.4rem',
                  lg: '1.5rem',
                  xl: '1.75rem',
                },
                textAlign: "justify",
                lineHeight: '2',
                marginTop: "80px",
                marginBottom: "80px",
                '@media (max-width: 450px)': {
                      textAlign:"left"
                  }
              }}
            >
              {service.description}
            </Typography>
            {
              [0,1,2].includes(i)?<Box sx={{ mt: 3, mb: 1, borderBottom: '1px solid #8a8c93 ' }} />:null
            }
            
          </Element>
        </Box>
      ))}

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
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
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
  );
};

export default AssociatedServices;
