import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ErrorImg from "../Assests/errorpage iamge.svg";

const NotFoundPage = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center', 
        backgroundColor: 'grey.100', // Optional background
        flexDirection: 'column', // Stack items vertically
      }}
    >
      <Typography 
        variant="h1" 
        sx={{ 
          fontSize: '6rem', 
          fontWeight: 'bold', 
          mb: 2, 
          color: 'grey.600' 
        }}
      >
        404
      </Typography>

      <Typography 
        variant="h4" 
        sx={{ 
          fontSize: '1.5rem', 
          fontWeight: 'medium', 
          mb: 4 
        }}
      >
        Oops! Looks like this isn't a page.
      </Typography>

      {/* Centering the Image */}
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 4,
        }}
      >
        <img 
          src={ErrorImg} 
          alt="Error" 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
      </Box>

      <Button 
        variant="contained" 
        href="#" 
        sx={{ 
          backgroundColor: '#7C3AED', 
          color: '#FFFFFF', 
          '&:hover': { backgroundColor: '#6D28D9' }, 
          px: 4, 
          py: 1.5 
        }}
      >
        Back to Homepage
      </Button>
    </Box>
  );
};

export default NotFoundPage;
