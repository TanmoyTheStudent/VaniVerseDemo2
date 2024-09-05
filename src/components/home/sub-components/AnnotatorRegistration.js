import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const AnnotatorRegistration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('annotator'); // Set default to "annotator"
  const [formErrors, setFormErrors] = useState({});
  const [serverErrors, setServerErrors] = useState('');

  // Using async/await for handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      password,
      role,
    };
    try {
      const response = await axios.post('http://localhost:3033/api/users/register', formData);
      console.log(response);

      alert('Successfully registered');
      setServerErrors('');
      setEmail('');
      setPassword('');
      setUsername('');
      navigate('/login');
    } catch (err) {
      console.log(err);
      setServerErrors(err.response.data.errors);
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
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Register Here
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {/* Role label and Radio button on the same line */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ mr: 2 }}>
            Role:
          </Typography>
          <RadioGroup
            row
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <FormControlLabel
              value="annotator"
              control={<Radio sx={{ color: 'blue' }} />}
              label="I am an annotator"
            />
          </RadioGroup>
        </Box>

        {serverErrors.length > 0 && (
          <Box sx={{ color: 'red', mb: 2 }}>
            These errors prohibited the form from being saved:
            <ul>
              {serverErrors.map((ele, i) => (
                <li key={i}>{ele.msg}</li>
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
            backgroundColor: '#1877f2',
            '&:hover': {
              backgroundColor: '#0053b1',
            },
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default AnnotatorRegistration;
