import React, { useEffect, useState } from 'react';

import { service } from '../../services/service';

import { Header, Footer, CardExperience, CardSkill } from '../../components';

import { Container, SkillsContainer, ExperiencesContainer, Content } from "./styles";

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

        <div>
          <div style={{marginLeft: '5%',}}><h1>Skills</h1></div>
          <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
            <SkillsContainer color={'default'} style={{width: '90%',}}>
              {
                skills.map(skill => (
                  <CardSkill key={skill.id} skill={skill} />
                ))
              }
            </SkillsContainer>
          </div>
        </div>

        <div>
          <div style={{marginLeft: '5%'}}><h1>Experiences</h1></div>
          <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
            <ExperiencesContainer color={'default'} style={{width: '90%',}}>
              {
                experiences.map(experience => (
                  <CardExperience key={experience.id} experience={experience} />
                ))
              }
            </ExperiencesContainer>
          </div>
        </div>

      </Content>

      <Footer />

    </Container>
  );
}
