import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverErrors, setServerErrors] = useState([]);

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    try {
      const response = await axios.post('http://localhost:3033/api/users/login', formData);
      console.log(response);

      alert('Login successful');
      setServerErrors('');
      setEmail('');
      setPassword('');
      navigate('/'); 
    } catch (err) {
      console.log(err);
      if(err.response){
        setServerErrors(err.response.data.errors);
      }else{
        setServerErrors(['Error in connection. Please try again later.'])
      }
     
    }
  };

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
      <Box component="form" onSubmit={handleSubmit} >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email address"
          name="email"
          //autoFocus
          autoComplete="new-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          autoComplete="new-password"
          //autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {serverErrors.length > 0 && (
          <Box sx={{ color: 'red', mb: 2 }}>
            These errors prevented the login:
            <ul>
              {serverErrors.map((error, index) => (
                <li key={index}>{error.msg?error.msg:error}</li>
              ))}
            </ul>
          </Box>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "#226dc7", 
            '&:hover': {
              backgroundColor: 'navy',
            },
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
         <b>LOG IN</b> 
        </Button>
        <Typography
          color="primary"
          align="center"
          sx={{
             mt: 2,
              mb: 2 ,
              cursor: 'pointer',
              fontSize: '1rem',
            '&:hover': {
                    color: 'navy', 
                }
            }}
          onClick={() => navigate('/forgot-password')}
        >
          Forgot Password?
        </Typography>
        <Box sx={{ mt: 3, mb: 1, borderBottom: '1px solid #e0e0e0' }} />
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: 'white', 
            '&:hover': {
              backgroundColor: 'navy',
            },
            textTransform: 'none',
            fontSize: '1rem',
            color:"#226dc7",
            border: '1px solid #226dc7'
          }}
          onClick={() => navigate('/register-yourself')}
        >
         <b>Create New Account</b> 
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
