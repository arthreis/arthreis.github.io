import styled, { css } from "styled-components";

export const Dot = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  margin: 2px;
  ${props => colors[props.color || 'default']}
`;

const colors = {
  default: css`
    background: linear-gradient(315deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 25%, rgba(224,0,255,1) 100%);
  `,
  empty: css`
    background: linear-gradient(315deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 100%);
  `
}
