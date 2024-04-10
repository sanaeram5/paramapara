import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import {Banner} from "../Banner/Banner";

export function Main() {
  return (
    <Container>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Banner></Banner>
      <Contact></Contact>
    </Container>
  );
}