import React, { useEffect, useState } from 'react';

import { service } from '../../services/service';

import CardExperience from '../../components/cardExperience';
import CardSkill from "../../components/cardSkill";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, Cards, Content } from "./styles";

export default function Home() {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences(service.getExperiences());
    setSkills(service.getSkills());
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <Cards color={'default'}>
          <h1>Skills</h1>
          {
            skills.map(skill => (
              <CardSkill key={skill.id} skill={skill} />
            ))
          }
        </Cards>

        <Cards color={'default'}>
          <h1>Experiences</h1>
          {
            experiences.map(experience => (
              <CardExperience key={experience.id} experience={experience} />
            ))
          }
        </Cards>
      </Content>

      <Footer />

    </Container>
  );
}
