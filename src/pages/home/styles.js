import styled, { css } from "styled-components";

const colors = {
  default: css`
    background: none;
  `,
  danger: css`
    background: #e04848;
    &:hover {
      background: #a43d3d;
    }
  `,
  gray: css`
    background: #b9bbbe;
    color: #666;
    &:hover {
      background: #999;
    }
  `,
  color1: css`
    background: #353940;
    &:hover {
      background: #5f73bc;
    }
  `,
  color2: css`
    background: #715;
    color: #666;
    &:hover {
      background: #999;
    }
  `,
};

const sizes = {
  small: css`
    height: 28px;
    font-size: 1.2rem;
  `,
  default: css`
    height: 36px;
    font-size: 1.4rem;
  `,
  big: css`
    height: 44px;
    font-size: 1.8rem;
  `,
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: background-color 0.15s ease;
  border: 0;
  font-size: 1rem;
  font-weight: 700;

  grid-template-rows: 20vh 77vh 3vh;
  grid-template-areas: "h h"
                       "c c"
                       "f f";
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  border-radius: 3px;
  transition: background-color 0.15s ease;
  border: 0;
  font-size: 1.2rem;
  font-weight: 700;

  ${props => colors[props.color || 'default']}
`;

export const ExperiencesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  border-radius: 3px;
  transition: background-color 0.15s ease;
  border: 0;
  font-size: 1.2rem;
  font-weight: 700;

  ${props => colors[props.color || 'default']}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-area: c;
  overflow: auto;
`;
