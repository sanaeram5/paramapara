import React from 'react';
import styled from 'styled-components';
import BannerImage from "../../assets/banner.png";

const SectionContainer = styled.section`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 200px 0; /* Increased padding for increased height */
`;

const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  font-style: italic;
`;

export function Banner() {
  return (
    <SectionContainer>
      <TextContainer>
        <Heading>Aaiye swad ki parampara ko banaye rakhen</Heading>
      </TextContainer>
    </SectionContainer>
  );
}
