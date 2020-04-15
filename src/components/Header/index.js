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
      setPersonInfo(data.personInfo);
      setContact(data.contact);
    })();
  }, []);

  return (
    <Container>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginLeft: '2.5%', marginRight: '2.5%'}}>
        <div style={{display: 'flex', }}>
          <MainInfo info={personInfo} />
          {/* <button>Resume</button> */}
        </div>
        <Contact contact={contact} />
      </div>
    </Container>
  );
}
