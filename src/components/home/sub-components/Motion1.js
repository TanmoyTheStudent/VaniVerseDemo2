import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box } from '@mui/material';

const AnimatedText1 = () => {
  const sentence = "DATA   ANNOTATION   SERVICES"; // Your sentence
  const words = sentence.split(" "); // Split the sentence into words

  return (
    <Box>
      {/* Container for the staggered animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Delay between each word
            },
          },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            style={{ display: 'inline-block', marginRight: '0.2em' }} // Adjust spacing between words
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              component="span"
              style={{ fontFamily: 'Georgia', wordSpacing: '0.2em' }}
            >
              {word}
            </Typography>
          </motion.span>
        ))}
      </motion.div>
    </Box>
  );
};

export default AnimatedText1;
