import React from 'react';
import packageJson from '../../../package.json';
import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: 5, marginRight: 5}}>
        <div>React</div>
        <div>{packageJson.name} - v{packageJson.version}</div>
      </div>
    </Container>
  )
};

export default Footer;
