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
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `,
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: background-color 0.15s ease;
  border: 0;
  color: #FFF;
  font-size: 12px;
  font-weight: 700;

  grid-template-rows: 15vh 80vh 5vh;
  grid-template-areas: "h h"
                       "c c"
                       "f f";
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 3px;
  transition: background-color 0.15s ease;
  border: 0;
  font-size: 12px;
  font-weight: 700;

  ${props => colors[props.color || 'default']}
`;

export const ExperiencesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 3px;
  transition: background-color 0.15s ease;
  border: 0;
  font-size: 12px;
  font-weight: 700;

  ${props => colors[props.color || 'default']}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-area: c;
  overflow: auto;
`;
