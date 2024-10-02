import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Typography, Button, Paper, Grid, Card, CardActionArea, CardContent } from '@mui/material';
import { servicesInHomePage,associatedServices,button,design } from '../../../required-data/object-data/servicesInHome';
//import Routes from '../../../../constants/Routes';



const ServicesHomeSmall = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "ButtonHighlight",
                    // minHeight: "500px",
                    // height: 'auto',
                    // maxHeight: "1500px",
                    // //width: '100%',
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "10%"
                    // padding: '10px',
                    // margin: " auto",
                    // overflowY: "auto"
                }}>

                <Box
                    sx={{
                        // backgroundColor: "ButtonHighlight",
                        minHeight: "500px",
                        // height: 'auto',
                        // maxHeight: "1500px",
                        // //width: '100%',
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "center",
                        // padding: '10px',
                        // margin: " auto",
                        // overflowY: "auto"
                    }} >

                    <motion.div
                        initial={{ opacity: 0, y: -50 }} // Start with the text hidden and moved up
                        whileInView={{ opacity: 1, y: 0 }} // Animate when it comes into view
                        transition={{ duration: 1.5 }} // Smooth animation over 1.5 seconds
                        viewport={{ once: false, amount: 0.8 }} // Trigger once when 80% of the element is in view
                    >
                        <Typography
                            //color="primary"
                            sx={{
                                fontSize: {
                                    xs: '2.5em',
                                    sm: '3rem',
                                    md: '3.5rem',
                                    lg: '3.5rem',
                                    xl: '4rem',
                                },
                                fontWeight: 'bold',
                                textAlign: 'center',
                                '@media (max-width: 425px)': {
                                    fontSize: '2rem'
                                }
                            }}
                        >

                            <span style={{ whiteSpace: 'nowrap' }}>Human Annotations in</span>
                            <br />
                            <span style={{ whiteSpace: 'nowrap' }}>
                                Indian Languages</span>
                        </Typography>
                    </motion.div>
                </Box>
                {
                    [0, 1, 2, 3].map((ele, i) => {
                        return (
                            [0, 2].includes(ele) ?
                                (<Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: {
                                            xs: 'column',
                                            sm: 'column',
                                            md: 'row',
                                        },
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        background: 'linear-gradient(to right,#5da9e6,#d4a9fc ), linear-gradient(to bottom, transparent,#dde5df,#dde5df,#dde5df )',
                                        backgroundBlendMode: 'overlay',
                                        padding: 4,
                                        //color: 'white',
                                        width: "80%",
                                        minHeight: "500px",
                                        marginTop: "50px",
                                        marginBottom: "50px",
                                        borderRadius: "10px",
                                        margin: "10px"
                                    }}
                                    key={i}
                                >
                                    <Box
                                        sx={{ maxWidth: { xs: '100%', md: '50%' }, marginBottom: { xs: 2, md: 0 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: "0%" }}
                                    >

                                        <Typography
                                            gutterBottom
                                            variant="h2"
                                            component="div"
                                            sx={{
                                                margin: "2%",
                                                //color: 'white',
                                                fontSize: {
                                                    xs: '2rem',
                                                    sm: '2.5rem',
                                                    md: '2.75rem',
                                                    lg: '3rem',
                                                    xl: '4rem',
                                                },
                                                display: 'block',
                                                textAlign: 'center',
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {servicesInHomePage[ele].title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                //margin:"2%",
                                                //color: 'white',
                                                fontSize: {
                                                    xs: '1.25rem',
                                                    sm: '1.35rem',
                                                    md: '1.4rem',
                                                    lg: '1.5rem',
                                                    xl: '1.75rem',
                                                },
                                                display: 'block',
                                                margin: '1%',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {servicesInHomePage[ele].description}
                                        </Typography><br />
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#07145f',
                                                borderRadius: '20px',
                                                '&:hover': {
                                                    backgroundColor: '#7038b7',
                                                },
                                            }}
                                            component={Link}
                                            to={servicesInHomePage[ele].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View More
                                        </Button>

                                    </Box>

                                    {/* image */}

                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: { xs: '100%', md: '50%' },
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mt: { xs: "2%", sm: '1.5%' }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={servicesInHomePage[ele].image}
                                            alt="Microphone and waveform"
                                            sx={{
                                                maxWidth: { xs: '85%', sm: "70%" },
                                                zIndex: 1,
                                                borderRadius: '10%',
                                                margin: "5%",
                                                padding: "2%",
                                                border: "5px solid black",
                                            }}
                                        />
                                    </Box>

                                </Box>
                                ) : (


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
                                            background: 'linear-gradient(to right,#5da9e6,#d4a9fc ), linear-gradient(to bottom, transparent,#dde5df,#dde5df,#dde5df )',
                                            backgroundBlendMode: 'overlay',
                                            padding: 4,
                                            //color: 'white',
                                            width: "80%",
                                            minHeight: "500px",
                                            borderRadius: "10px",
                                            margin: "10px",
                                            marginTop: "10%",
                                            marginBottom: "10%"
                                        }}
                                    >
                                        <Box
                                            sx={{ maxWidth: { xs: '100%', md: '50%' }, marginBottom: { xs: 2, md: 0 } }}
                                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: "0%", marginBottom: "0px" }}
                                        >

                                            <Typography
                                                gutterBottom
                                                component="div"
                                                sx={{
                                                    margin: "2%",
                                                    //color: 'white',
                                                    fontSize: {
                                                        xs: '2rem',
                                                        sm: '2.5rem',
                                                        md: '2.75rem',
                                                        lg: '3rem',
                                                        xl: '4rem',
                                                    },
                                                    display: 'block',
                                                    textAlign: 'center',
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {servicesInHomePage[ele].title}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    //margin:"2%",
                                                    //color: 'white',
                                                    fontSize: {
                                                        xs: '1.25rem',
                                                        sm: '1.35rem',
                                                        md: '1.4rem',
                                                        lg: '1.5rem',
                                                        xl: '1.75rem',
                                                    },
                                                    display: 'block',
                                                    margin: '1%',
                                                    textAlign: "center"
                                                }}
                                            >
                                                {servicesInHomePage[ele].description}
                                            </Typography><br />
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#07145f',
                                                    borderRadius: '20px',
                                                    '&:hover': {
                                                        backgroundColor: '#7038b7',
                                                    },
                                                }}
                                                component={Link}
                                                to={servicesInHomePage[ele].link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View More
                                            </Button>

                                        </Box>

                                        {/* image */}

                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: { xs: '100%', md: '50%' },
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mt: { xs: "2%", sm: '1.5%' }
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={servicesInHomePage[ele].image}
                                                alt="Microphone and waveform"
                                                sx={{
                                                    maxWidth: { xs: '85%', sm: "70%" },
                                                    zIndex: 1,
                                                    borderRadius: '10%',
                                                    margin: "5%",
                                                    padding: "2%",
                                                    border: "5px solid black",
                                                }}
                                            />
                                        </Box>

                                    </Box>


                                )

                        )
                    })
                }


                {/* For Other Services */}

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                        },
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(to right,#5da9e6,#d4a9fc ), linear-gradient(to bottom, transparent,#dde5df,#dde5df,#dde5df )',
                        backgroundBlendMode: 'overlay',
                        padding: 4,
                        //color: 'white',
                        width:"80%",
                        minHeight: "550px",
                        marginTop: "50px",
                        marginBottom: "50px",
                        borderRadius: "10px",
                        margin: "10px"
                    }}

                >
                    <Box
                        sx={{ maxWidth: { xs: '100%', md: '100%' }, marginBottom: { xs: 2, md: 2 }, marginTop: { xs: 1.5, md: 1.5 } }}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: "0%", }}
                    >

                        <Typography
                            gutterBottom
                            component="div"
                            sx={{
                                margin: "1%",
                                //color: 'white',
                                fontSize: {
                                    xs: '2rem',
                                    sm: '2.5rem',
                                    md: '2.75rem',
                                    lg: '3rem',
                                    xl: '4rem',
                                },
                                display: 'block',
                                textAlign: 'center',
                                fontWeight: "bold"
                            }}
                        >
                            Other Associated Services
                        </Typography>


                        {/* Presenting as Box */}

                        <Grid container spacing={5} justifyContent="center" sx={{ mt: "1.5%", mb: "1.5%" }}>
                            {
                                associatedServices.map((ele, i) => {
                                    return (
                                        <Grid item sm={12} md={6} lg={3} key={i} style={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
                                            <Card
                                                sx={{
                                                    width: { xs: '90%', sm: "80%", md: '85%', lg: "100%", xl: "90%" },
                                                    height: { xs: "200px", sm: "175px", md: "225px", lg: "250px" },
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    padding: "2%",
                                                    marginBottom: "2%",
                                                    background: "none",
                                                    //color: "white",
                                                    border: "2px solid black",
                                                    borderRadius: "15px",
                                                    textAlign: "center"
                                                }}
                                            >
                                                <CardActionArea>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div"
                                                            style={{ fontWeight: "bold" }}
                                                        >
                                                            {ele.title}
                                                        </Typography>
                                                        <Typography variant="h6" >
                                                            {ele.description}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>

                                            </Card>

                                        </Grid>
                                    )
                                }
                                )}
                        </Grid>





                        <br />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#07145f',
                                borderRadius: '20px',
                                '&:hover': {
                                    backgroundColor: '#7038b7',
                                },
                            }}
                            component={Link}
                            to="/our-services/others"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View More
                        </Button>

                    </Box>

                </Box>

            </Box>



        </>
    );
};

export default ServicesHomeSmall;
