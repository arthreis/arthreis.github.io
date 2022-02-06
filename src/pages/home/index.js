import React, { useEffect, useState } from 'react';

import { service } from '../../services/service';

import { Header, Footer, CardExperience, CardSkill } from '../../components';

import * as S from "./styles";

export default function Home() {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences(service.getExperiences());
    setSkills(service.getSkills());
  }, []);

  return (
    <S.Container>
      <Header />

      <S.Content>

        <div>
          <div style={{marginLeft: '5%', marginBottom: '2%'}}><h1>Skills</h1></div>
          <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
            <S.SkillsContainer color={'default'} style={{width: '90%',}}>
              {
                skills.map(skill => (
                  <CardSkill key={skill.id} skill={skill} />
                ))
              }
            </S.SkillsContainer>
          </div>
        </div>

        <div>
          <div style={{marginLeft: '5%', marginBottom: '2%'}}><h1>Experiences</h1></div>
          <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
            <S.ExperiencesContainer color={'default'} style={{width: '90%',}}>
              {
                experiences.map(experience => (
                  <CardExperience key={experience.id} experience={experience} />
                ))
              }
            </S.ExperiencesContainer>
          </div>
        </div>

      </S.Content>

      <Footer />

    </S.Container>
  );
}
