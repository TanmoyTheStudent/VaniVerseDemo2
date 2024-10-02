import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material"
import { keyframes } from '@mui/system';
import { word1, word2, word3, word4 } from "../../requiredData/staticInformation/homePageInfo";


const fadeInOut = keyframes`
  0% { opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { opacity: 0; }
`;


function LanguagesList() {

    // State to toggle between word1 and word2
    const [currentWords1, setCurrentWords1] = useState(word1);
    const [currentWords2, setCurrentWords2] = useState(word3);
    // Effect to alternate between word1 and word2 every 10 seconds
    useEffect(() => {
        const interval1 = setInterval(() => {
            setCurrentWords1(prevWords => (prevWords === word1 ? word2 : word1));
        }, 6000);

        const interval2 = setInterval(() => {
            setCurrentWords2(prevWords => (prevWords === word3 ? word4 : word3));
        }, 6000);

        // Cleanup function to clear both intervals on component unmount
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, []);


    return (
        <>
            <Box sx={{
                minHeight: "550px",

                // background: 'linear-gradient(to right,#5da9e6,#5da9e6), linear-gradient(to bottom, transparent, white,white,white )',
                // backgroundBlendMode: 'overlay',
                padding: 2
            }}>
                {/* <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '125px', // Adjust the box height as needed
                        width: '100%', // Adjust the box width as needed
                        //border: '2px solid black',
                        position: 'relative', // This helps position the text inside
                        overflow: 'hidden',
                        //borderRadius: '8px',
                    }}
                >
                    {currentWords.map((word, index) => (
                        <Box sx={{ minWidth: "auto", maxWidth: 'auto', textAlign: 'center', margin: { xs: 1.5, sm: 1.5, md: 3 } }} key={index}>
                            <Typography
                                key={index}
                                variant="h2"
                                sx={{
                                    animation: `${fadeInOut} 6s infinite`,
                                    animationDelay: `${index * 0.6}s`,
                                    opacity: 0,
                                    color: word.color,
                                    margin: '0 15px',
                                    fontSize: word.fontSize || '2rem',
                                }}
                            >
                                {word.text}
                            </Typography>
                        </Box>
                    ))}
                </Box> */}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap', // This allows the words to wrap to the next line
                        minHeight: '175px', // Adjust the box height as needed
                        width: '100%', // Adjust the box width as needed
                        position: 'relative', // This helps position the text inside
                        overflow: 'hidden', // Keeps the box from extending beyond the width
                        marginTop: { xs: '20px', sm: '0px' }
                    }}
                >
                    {currentWords1.map((word, index) => (
                        <Box
                            key={index}
                            sx={{
                                flexBasis: { xs: 'auto', sm: 'auto', md: 'auto' }, // This adjusts the size of the words for different screen sizes
                                textAlign: 'center',
                                margin: { xs: 1.5, sm: 1.5, md: "auto", lg: "auto" },
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    animation: `${fadeInOut} 6s infinite`,
                                    animationDelay: `${index * 0.6}s`,
                                    opacity: 0,
                                    color: word.color,
                                    fontWeight: 'bold',
                                    fontSize: { xs: `clamp(1.25rem, 2vw, 2rem)`, sm: `clamp(1.5rem, 2vw, 2.5rem)` },
                                    whiteSpace: 'normal', // This allows the text to wrap if it's too long
                                    wordBreak: 'break-word', // Ensure long words break instead of overflowing
                                }}
                            >
                                {word.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '200px', // Adjust the box height as needed
                        width: '100%', // Adjust the box width as needed
                        //border: '2px solid black',
                        position: 'relative', // This helps position the text inside
                        overflow: 'hidden',
                        //borderRadius: '8px',
                    }}
                >

                    <Typography

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
                            '@media (max-width: 350px)': {
                                fontSize: '2rem'
                            }
                        }}
                    >
                        <span style={{ whiteSpace: 'nowrap' }}>Our focus is on</span>
                        <br />
                        <span style={{ whiteSpace: 'nowrap' }}>
                            Indian Languages</span>
                    </Typography>

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap', // This allows the words to wrap to the next line
                        minHeight: '175px', // Adjust the box height as needed
                        width: '100%', // Adjust the box width as needed
                        position: 'relative', // This helps position the text inside
                        overflow: 'hidden', // Keeps the box from extending beyond the width
                    }}
                >
                    {currentWords2.map((word, index) => (
                        <Box
                            key={index}
                            sx={{
                                flexBasis: { xs: 'auto', sm: 'auto', md: 'auto' }, // This adjusts the size of the words for different screen sizes
                                textAlign: 'center',
                                margin: { xs: 1.5, sm: 1.5, md: "auto", lg: "auto" },
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    animation: `${fadeInOut} 6s infinite`,
                                    animationDelay: `${index * 0.6}s`,
                                    opacity: 0,
                                    color: word.color,
                                    fontWeight: 'bold',
                                    fontSize: { xs: `clamp(1.25rem, 2vw, 2rem)`, sm: `clamp(1.5rem, 2vw, 2.5rem)` },
                                    whiteSpace: 'normal', // This allows the text to wrap if it's too long
                                    wordBreak: 'break-word', // Ensure long words break instead of overflowing
                                }}
                            >
                                {word.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

        </>
    )
}

export default LanguagesList