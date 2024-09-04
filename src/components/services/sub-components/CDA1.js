import { Box, Typography, Grid } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FactorySharpIcon from '@mui/icons-material/FactorySharp';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';

const useCases = [
  { label: 'Healthcare', icon: <MedicalServicesIcon fontSize="large" /> },
  { label: 'Agriculture', icon: <AgricultureIcon fontSize="large" /> },
  { label: 'Education and E-learning', icon: <SchoolIcon fontSize="large" /> },
  { label: 'Finance', icon: <AttachMoneyIcon fontSize="large" /> },
  { label: 'Retail and E-Commerce', icon: <ShoppingCartIcon fontSize="large" /> },
  { label: 'Manufacturing', icon: <FactorySharpIcon fontSize="large" /> },
  { label: 'Communication', icon: <ConnectWithoutContactOutlinedIcon fontSize="large" /> },
  { label: 'Legal and Compliance', icon: <GavelRoundedIcon fontSize="large" /> },
];

const CDA1 = () => {
  return (
    <Box sx={{ marginTop:"50px",marginBottom:"50px" }}>
      <Grid container spacing={3} justifyContent="center">
        {useCases.map((useCase, index) => (
          <Grid item xs={6} sm={6} md={6} key={index} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {useCase.icon}
              <Typography variant="h6" sx={{ mt: 1 }}>
                {useCase.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CDA1;
