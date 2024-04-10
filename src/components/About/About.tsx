import React from 'react';
import styled from 'styled-components';
import aboutImage from '../../assets/about.png';

const AboutSection = styled.section`
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 50px 20px;
  color: white;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color:black;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFA500;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top-left-radius: 75px;
  border-bottom-left-radius: 75px;
  margin-right:0px;
`;

const Text = styled.div`
  flex-basis: 45%;
  text-align: left;
`;

const Heading = styled.h2`
  margin-bottom: 10px;
  color: #fffff;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  text-align: right;
`;

const StyledImage = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 10px;
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color:white;  
  color: #DAA520;/* Gold color */
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1c40f;
  }
`;

export function About () {
  return(
  <AboutSection id="about">
    <Title>A fusion of taste and tradition</Title>
    <Content>
      <ImageContainer>
        <StyledImage src={aboutImage} alt="Delicious dish" />
      </ImageContainer>
      <Text>
        <Heading>Transcending time and taste to create new bonds</Heading>
        <Paragraph>
          Whether a shared meal or preparing for one; everyday khana or exotic dishes, Parampara is at the heart of it all. Also, food is that one ingredient that encourages us to celebrate shared stories, togetherness and joy. And helping food achieve all this is the oil in which it is prepared, an oil that is made for the home masterchefs - Parampara.
        </Paragraph>
        <LearnMoreButton href="#learn-more">Learn More</LearnMoreButton>
      </Text>
    </Content>
  </AboutSection>
)
  };

