import HeroImage from '../../assets/hero.png';
import React from 'react';
import styled from 'styled-components';

// Styled component for the hero section
const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative; /* Position relative to allow absolute positioning of text */
`;

// Styled component for the image
const HeroImageStyled = styled.img`
  width: 100%;
  height: 100%; /* Spread the image all over the container */
  object-fit: cover; /* Ensure the image covers the entire container */
`;

// Styled component for the text overlay
const TextOverlay = styled.div`
  position: absolute;
  top: 50%; /* Position at the vertical center */
  left: 50%; /* Position at the horizontal center */
  transform: translate(-50%, -50%); /* Center the text */
  text-align: center;
  color: white;
`;

// Styled component for the title
const Title = styled.h1`
  font-size: 4rem; /* Increase font size */
  margin-bottom: 0.5rem; /* Reduce margin bottom */
  font-weight: bold; /* Make the text bold */
  text-transform: uppercase; /* Convert text to uppercase */
  letter-spacing: 2px; /* Add letter spacing */
`;

export function Hero (){
  return (
    <HeroSection>
      <HeroImageStyled src={HeroImage} alt="Hero Image" />
      <TextOverlay>
        <Title>Swad Ke Rishte</Title>
      </TextOverlay>
    </HeroSection>
  );
};
