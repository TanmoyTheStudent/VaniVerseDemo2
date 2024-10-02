import { Link } from "react-router-dom";
import { Paper, Typography, Box, Button } from "@mui/material"
import { motion } from 'framer-motion';
import Image from "../../../required-data/assests/image/providing-platform.jpg"
//import Routes from "../../../../constants/Routes";

function ProvidingPlatform() {
    return (
        <div >



            <Box
                style={{
                    // backgroundColor: "ButtonHighlight",
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
                    style={{
                        // backgroundColor: "ButtonHighlight",
                        minHeight: "525px",
                        // height: 'auto',
                        // maxHeight: "1500px",
                        // //width: '100%',
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "center",
                        position: 'relative', // This helps position the text inside
                        overflow: 'hidden',
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
                                '@media (max-width: 460px)': {
                                    fontSize: `clamp(2rem, 2vw, 2.5rem)`
                                }
                            }}
                        >

                            <span style={{ whiteSpace: 'nowrap' }}>A space for you to host</span>
                            <br />
                            <span style={{ whiteSpace: 'nowrap' }}>And create your project</span>
                        </Typography>
                    </motion.div>
                </Box>

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
                        background: 'linear-gradient(to right,#5da9e6,#d4a9fc,#5da9e6 ), linear-gradient(to bottom, transparent,#dde5df,#dde5df,#dde5df )',
                        backgroundBlendMode: 'overlay',
                        padding: 4,
                        //color: 'white',
                        minHeight: "550px",
                        width: { xs: '80%', sm: '85%' },
                        marginTop: "50px",
                        // marginBottom: "10%",
                        borderRadius: '15px',
                        margin: { xs: "10px", sm: '0px' },
                    }}
                >
                    <Box sx={{ maxWidth: { xs: '100%', md: '60%' }, marginBottom: { xs: 2, md: 0 } }}
                        style={{
                            display: 'flex', flexDirection: 'column'
                            , justifyContent: 'center', alignItems: 'center', padding: "0%"
                        }}>
                        <Typography
                            component="div"
                            sx={{
                                fontWeight: 'bold',
                                display: 'block',
                                textAlign: 'center',
                                fontSize: {
                                    xs: '2rem',
                                    sm: '2.5rem',
                                    md: '2.75rem',
                                    lg: '3rem',
                                    xl: '4rem',
                                },
                                margin: "2%"
                            }}>
                            Providing Platform
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                //margin:"2%",
                                // color: 'white',
                                fontSize: {
                                    xs: '1.25rem',
                                    sm: '1.35rem',
                                    md: '1.4rem',
                                    lg: '1.5rem',
                                    xl: '1.75rem',
                                },
                                display: 'block',
                                margin: { xs: '1.5%', md: '1%' },
                                textAlign: 'center',
                            }}
                        >
                            We offer a robust platform where you can host and manage your own data curation projects, streamlining your workflow, managing annotators, and enhancing productivity.
                        </Typography><br />
                        <Button
                            variant="contained"
                            sx={{
                                mb: "3%",
                                backgroundColor: '#07145f',
                                borderRadius: '20px',
                                '&:hover': {
                                    backgroundColor: '#7038b7',
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

                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: '95%', sm: "75%", md: '45%' },
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: { xs: 3, md: 0 }
                        }}
                    >

                        <img
                            src={Image}
                            alt="providing-platform"
                            style={{
                                maxWidth: '90%',
                                padding: "10px",
                                zIndex: 1,
                                borderRadius: '10%',
                                border: "5px solid black"
                            }}
                        />
                    </Box>
                </Box>

            </Box>
        </div>
    )
}

export default ProvidingPlatform
