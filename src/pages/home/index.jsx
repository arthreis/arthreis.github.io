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
        <S.Column>
          <S.SectionTitle>Conhecimentos Gerais</S.SectionTitle>
          <S.SkillsContainer>
            {
              skills.map(skill => (
                <CardSkill key={skill.id} skill={skill} />
              ))
            }
          </S.SkillsContainer>

          <S.SectionTitle style={{ marginTop: '40px' }}>Tecnologias & Frameworks</S.SectionTitle>
          <S.GeneralSkillsContainer>
            {
              generalSkills.map(skill => (
                <CardGeneralSkill key={skill.id} skill={skill} />
              ))
            }
          </S.GeneralSkillsContainer>
        </S.Column>

        <S.Column>
          <S.SectionTitle>Experiência Profissional</S.SectionTitle>
          <S.ExperiencesContainer>
            {
              experiences.map(experience => (
                <CardExperience key={experience.id} experience={experience} />
              ))
            }
          </S.ExperiencesContainer>
        </S.Column>
      </S.Content>

      <Footer />
    </S.Container>
  );
}
