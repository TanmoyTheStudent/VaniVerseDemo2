import { useState } from 'react';
import { Container, TextField, Button, Typography, Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
    const navigate=useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    reference: '',
  });
  const [role, setRole] = useState('annotator'); // Default role
  const [serverErrors, setServerErrors] = useState([]); // To handle server errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      role
    };

    try {
      const response = await axios.post('http://localhost:3033/api/users/register', dataToSubmit);
      console.log(response);

      alert('Successfully registered');
      setServerErrors([]);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        reference: '',
      });
      setRole('user');
      navigate('/login');
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
      maxWidth={false}
      sx={{
        mt: { xs: '120px', sm: '150px', md: '200px', xl: '250px' },
        mb:"8%",
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fff',
        textAlign: 'center',
        width: { xs: '90%', sm: '80%', md: '60%', lg: '50%', xl: '40%' },
        maxWidth: '100%'
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          helperText="Minimum 8 characters"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Re-type Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Reference"
          name="reference"
          value={formData.reference}
          onChange={handleChange}
          required
        />

        {/* Radio Buttons for Role Selection */}
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <RadioGroup
            aria-label="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            row
          >
            <FormControlLabel
              value="annotator"
              control={<Radio sx={{ '&.Mui-checked': { color: 'blue' } }} />}
              label="I am an annotator"
            />
            <FormControlLabel
              value="client"
              control={<Radio sx={{ '&.Mui-checked': { color: 'blue' } }} />}
              label="I need your service"
            />
          </RadioGroup>
        </FormControl>

       
        <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
          By creating an account you are agreeing to our{' '}
          <Link to="/terms-of-use" underline="hover">
            Terms of Use
          </Link>{' '}
          and{' '}
          <Link to="/privacy-policy" underline="hover">
            Privacy Policy
          </Link>
        </Typography>


        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: '#1877f2',
            '&:hover': {
              backgroundColor: '#0053b1',
            },
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          CREATE ACCOUNT &gt;
        </Button>

        {/* Display Server Errors */}
        {serverErrors.length > 0 && (
          <Box sx={{ color: 'red', mt: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              These errors prohibited registration:
            </Typography>
            <ul>
              {serverErrors.map((ele, i) => (
                <li key={i}>{ele.msg?ele.msg:ele}</li>
              ))}
            </ul>
          </Box>
        )}

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <Link to="/login" underline="hover">
            Sign In
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
