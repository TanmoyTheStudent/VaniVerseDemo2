import React from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

const LoginForm = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 8,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fff'
      }}
    >
      <Box component="form">
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email address or phone number"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: '#1877f2', // Blue color for the "Log in" button
            '&:hover': {
              backgroundColor: '#0053b1',
            },
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Log in
        </Button>
        <Typography
          variant="body2"
          color="primary"
          align="center"
          sx={{ mt: 2, mb: 2 }}
        >
          Forgotten password?
        </Typography>
        <Box sx={{ mt: 3, mb: 1, borderBottom: '1px solid #e0e0e0' }} />
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: '#42b72a', // Green color for the "Create new account" button
            '&:hover': {
              backgroundColor: '#36a420',
            },
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Create new account
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
