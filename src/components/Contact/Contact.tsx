import React from 'react';
import styled from 'styled-components';
import Layer1 from '../../assets/Layer1.png';
import Layer2 from '../../assets/Layer2.png';

const SectionContainer = styled.section`
  color: #fff;
  padding: 50px 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 250px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
`;

const CardIcon = styled.img`
  width: 80px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 1rem;
`;

export function Contact() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <Card style={{backgroundColor:"#6fa832"}}>
          <CardIcon src={Layer1} alt="Fortune's icon" />
          <CardTitle>Fortune's world's most admired companies</CardTitle>
        </Card>
        <Card style={{backgroundColor:"#88bf45"}}>
          <CardIcon src={Layer1} alt="Ethisphere's icon" />
          <CardTitle>Ethisphere's world's most ethical companies</CardTitle>
        </Card>
        <Card style={{backgroundColor:"#283593"}}>
          <CardIcon src={Layer2} alt="Corporate citizens icon" />
          <CardTitle>100 best corporate citizens</CardTitle>
        </Card>
        <Card style={{backgroundColor:"#7e57c2"}}>
          <CardIcon src={Layer2} alt="Responsible sourcing icon" />
          <CardTitle>Responsible sourcing</CardTitle>
        </Card>
      </ContentWrapper>
    </SectionContainer>
  );
};
