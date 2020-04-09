import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Contact from "./components/contact";
import MainInfo from "./components/mainInfo";

import { service } from "./../../services/service";

export default function Header() {

  const [personInfo, setPersonInfo] = useState({});
  const [contact, setContact] = useState({});

  useEffect(() => {
    (async () => {
      const data = await service.getPersonInformations();
      console.log('data', data);
      setPersonInfo(data.personInfo);
      setContact(data.contact);
    })();
  }, []);

  return (
    <Container>
      <MainInfo info={personInfo} />
      <Contact contact={contact} />
    </Container>
  );
}
