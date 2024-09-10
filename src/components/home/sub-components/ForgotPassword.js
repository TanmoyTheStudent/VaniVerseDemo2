import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:3033/api/users/forgot-password', { email });
      setMessage('A password reset link has been sent to your email.');
      setEmail('');
    } catch (err) {
      console.error(err);
      setError('Error sending reset link. Please try again later.');
    }
  };

  return (
    <Container
  maxWidth={false} // Set to 'false' to handle width entirely with custom styles
  sx={{
    mt: { xs: '120px', sm: '150px', md: '200px', xl: '250px' },
    mb: '10%',
    p: 4,
    boxShadow: 3,
    borderRadius: 2,
    backgroundColor: '#fff',
    width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%' }, // Responsive width
    maxWidth: '100%' // Ensures container does not exceed the viewport width
  }}
>


      <Typography variant="h4" align="center" gutterBottom>
        Forgot Password
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary" sx={{ mb: 2 }}>
        Enter your email address below and we'll send you a link to reset your password.
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && (
          <Typography variant="body2" color="success.main" align="center" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
        {error && (
          <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: '#1877f2',
            '&:hover': {
              backgroundColor: '#0053b1',
            },
            textTransform: 'none',
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
