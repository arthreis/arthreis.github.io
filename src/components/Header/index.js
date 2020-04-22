import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Contact from "./components/contact";
import MainInfo from "./components/mainInfo";

import { service } from "./../../services/service";

export default function Header() {

  const [personInfo, setPersonInfo] = useState({});
  const [contact, setContact] = useState({});
  const [lastFunction, setLastFunction] = useState('');

  useEffect(() => {
    (async () => {
      const { personInfo, contact } = await service.getPersonInformations();
      const experiences = await service.getExperiences();
      setPersonInfo(personInfo);
      setContact(contact);
      setLastFunction(experiences[experiences.length-1].function);
    })();
  }, []);

  return (
    <Container>
      <MainInfo info={personInfo} lastFunction={lastFunction} />
      <Contact contact={contact} />
    </Container>
  );
}
