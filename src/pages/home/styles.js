import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: minmax(100px, 12vh) 85vh 3vh;
  grid-template-areas: "h"
                       "c"
                       "f";
  height: 100vh;
  overflow: hidden;
  background-color: #0a0b0e;
  font-family: 'Inter', sans-serif;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-area: c;
  overflow: hidden;
  height: 100%;
  
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 4%;
  height: 100%;
  overflow-y: auto;

  /* Subtle border between columns on larger screens */
  &:first-child {
    border-right: 1px solid rgba(0, 242, 254, 0.06);
  }

  @media (max-width: 800px) {
    height: auto;
    overflow-y: visible;
    &:first-child {
      border-right: none;
      border-bottom: 1px solid rgba(0, 242, 254, 0.06);
    }
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Fira Code', monospace;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  color: #00f2fe;
  text-shadow: 0 0 10px rgba(0, 242, 254, 0.25);
  letter-spacing: -0.5px;

  &::before {
    content: "> ";
    color: #7f00ff;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(127, 0, 255, 0.4);
    margin-right: 5px;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 15px;
  margin-bottom: 10px;
`;

export const GeneralSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  margin-bottom: 10px;
`;

export const ExperiencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  margin-bottom: 20px;
`;

