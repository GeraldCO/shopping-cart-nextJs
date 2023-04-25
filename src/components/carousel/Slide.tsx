import { Box, Typography, Button, Paper } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react'

interface SlideProps {
    image: string;
    active: boolean;
  }
  
  const Slide: React.FC<SlideProps> = ({ image, active }) => {
    return (
      <Paper
        sx={{
          display: active ? 'block' : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          padding: 2,

        }}
      >
        <img src={image} height='400px' />
      </Paper>
    );
  };

export default Slide;