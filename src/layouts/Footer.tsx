// components/Footer.js
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    
      <Container
        sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%'
        }}
      >
        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex', my: 1 }}>
          {/* Add your logo or other content here */}
          FakeShop
        </Box>

        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="initial">
            Copyright © {new Date().getFullYear()} FakeShop
          </Typography>
        </Box>
      </Container>
  );
};

export default Footer;
