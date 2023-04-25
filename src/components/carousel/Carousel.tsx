import { Box, Typography, Button, Paper } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react'
import Slide from './Slide'

interface CarouselProps {
    items: Array<{ image: string }>;
  }
  
const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);


    const handleSlideChange = (newIndex: number) => {
        setCurrentSlide(newIndex);
      };
    
      return (
        <Box>
          {items.map((item, index) => (
            <Slide
              key={index}
              image={item.image}
              active={index === currentSlide}
            />
          ))}
          <Button onClick={() => handleSlideChange((currentSlide - 1 + items.length) % items.length)}>
            Previous
          </Button>
          <Button onClick={() => handleSlideChange((currentSlide + 1) % items.length)}>
            Next
          </Button>
        </Box>
      );
  };

  export default Carousel;