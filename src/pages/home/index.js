import React, { useEffect, useState } from 'react';

import { service } from '../../services/service';

import { Header, Footer, CardExperience, CardSkill, CardGeneralSkill } from '../../components';

import * as S from "./styles";
import { useLocation } from 'react-router';

export default function Home() {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [generalSkills, setGeneralSkills] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/detailed') {
      setExperiences(service.getExperiencesDetailed().reverse());
    } else {
      setExperiences(service.getExperiences().reverse());
    }
    setSkills(service.getSkills());
    setGeneralSkills(service.getGeneralSkills());

  }, [pathname]);

  return (
    <S.Container>
      <Header />

      <S.Content>

        <div>
          <div style={{marginLeft: '5%', marginBottom: '2%'}}><h1>Conhecimentos gerais:</h1></div>
          <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
            <S.SkillsContainer color={'default'} style={{width: '90%',}}>
              {
                skills.map(skill => (
                  <CardSkill key={skill.id} skill={skill} />
                ))
              }
            </S.SkillsContainer>
          </div>

          <div style={{marginLeft: '5%', marginBottom: '2%', marginTop: '5%'}}><h1>Alguns conhecimentos técnicos:</h1></div>
          <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
            <S.GeneralSkillsContainer color={'default'} style={{width: '90%',}}>
              {
                generalSkills.map(skill => (
                  <CardGeneralSkill key={skill.id} skill={skill} />
                ))
              }
            </S.GeneralSkillsContainer>
          </div>
        </div>

        <div>
          <div style={{marginLeft: '5%', marginBottom: '2%'}}><h1>Experiências</h1></div>
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
