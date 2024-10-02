import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Button, Box, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import EarnImage from '../../requiredData/images/participateAndEarn.jpeg';
import { design } from "../../requiredData/staticInformation/homePageInfo"


function ParticipateAndEarn() {
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
                        minHeight: { xs: '500px', lg: '550px' },
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
                                fontSize: `clamp(1.75rem, 2vw, 2.5rem)`
                            }
                        }}
                    >

                        <span style={{ whiteSpace: 'nowrap' }}>
                            Be Part of Something Big: </span>
                        <br />
                        <span style={{ whiteSpace: 'nowrap' }}>Start Annotating Today!</span>
                    </Typography>

                </Box>


                <Container>
                    <Grid container spacing={0} justifyContent="center"
                        sx={{
                            marginTop: "2%",
                            //marginBottom: { xs: "100px", md: "10%" }
                        }}
                    >
                        <Grid item sm={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
                            <Card
                                sx={{
                                    width: '100%', height: "100%", padding: { xs: '10px', md: '20px' }, margin: '0px', boxShadow: "none", background: "none", display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} >
                                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        image={EarnImage}
                                        alt="services image"
                                        sx={{
                                            width: { xs: "90%", sm: "70%", md: "100%", lg: "90%" }, borderRadius: "50px",
                                            margin: '0 auto'
                                        }}

                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary" textAlign='center'>
                                            Image Source:AI-generated
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </Grid>

                        <Grid item sm={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Card sx={{
                                width: '100%', height: "100%", padding: { xs: "0px", sm: '10px', md: "0px", lg: "20px" }, marginTop: { xs: 0, md: "5%", lg: "2.5%", xl: "1.5%" }, boxShadow: "none", background: "none", display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}  >
                                <CardActionArea>

                                    <CardContent style={{ marginTop: "5%" }}>
                                        <Typography
                                            gutterBottom
                                            component="div"
                                            sx={{
                                                margin: { xs: "2.5%", md: 0, lg: "2%" },
                                                fontSize: {
                                                    xs: '2rem',
                                                    sm: '2.25rem',
                                                    md: '2.25rem',
                                                    lg: '2.5rem',
                                                    xl: '3rem',
                                                },
                                                textAlign: 'center',
                                                fontWeight: "bold"
                                            }}
                                        >
                                            Participate and Earn
                                        </Typography>
                                        <Typography
                                            sx={{
                                                textAlign: {
                                                    xs: "justify",

                                                },
                                                fontSize: {
                                                    xs: '1.25rem',
                                                    sm: '1.35rem',
                                                    md: '1.35rem',
                                                    lg: '1.5rem',
                                                    xl: '1.75rem',
                                                },
                                            }}>
                                            It is our small initiative to employ India. In India everyone is strong at his/her mothertongue. By Sharing their knowledge and language skills for the development of their own language, they can earn money. Through this process students, unemployed, senior citizens, house-wives can earn some, that may help them to become financially independent.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea><br />
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
                                    to="/participate&earn"
                                >
                                    Learn More
                                </Button>
                            </Card>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default ParticipateAndEarn