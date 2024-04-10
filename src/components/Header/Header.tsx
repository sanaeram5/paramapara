import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/Logo.png'; // Adjust the path to your logo image

interface NavListProps {
  isOpen: boolean;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  background-color: #6AB547;
  border-radius: 25px; // Creates the semi-circle effect on the edges
  padding: 0 1rem; // Adds horizontal padding for spacing

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul<NavListProps>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #6AB547;
    width: 200px;
    border: 1px solid #fff;
    border-top: none;
    border-radius: 0; // Resets border-radius for mobile view

    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const NavItem = styled.li`
  padding: 10px 15px;

  @media (max-width: 768px) {
    padding: 15px;
    border-bottom: 1px solid #fff; // Separates items in mobile view
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #ddd;
  }
`;

const DrawerButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Parampara Logo" />
      <Nav>
        <NavList isOpen={isNavOpen}>
          <NavItem><NavLink href="#home">HOME</NavLink></NavItem>
          <NavItem><NavLink href="#about">ABOUT US</NavLink></NavItem>
          <NavItem><NavLink href="#oils">OILS</NavLink></NavItem>
          <NavItem><NavLink href="#foods">FOODS</NavLink></NavItem>
          <NavItem><NavLink href="#recipes">RECIPES</NavLink></NavItem>
          <NavItem><NavLink href="#blogs">BLOGS</NavLink></NavItem>
          <NavItem><NavLink href="#contact">CONTACT US</NavLink></NavItem>
        </NavList>
      </Nav>
      <MobileNavIcon>
        <DrawerButton onClick={toggleNav}>
          {isNavOpen ? '✖' : '☰'}
        </DrawerButton>
      </MobileNavIcon>
    </HeaderContainer>
  );
}
