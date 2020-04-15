import React from 'react';
import packageJson from '../../../package.json';
import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <div>React</div>
      <div>{packageJson.name} - v{packageJson.version}</div>
    </Container>
  )
};

export default Footer;
