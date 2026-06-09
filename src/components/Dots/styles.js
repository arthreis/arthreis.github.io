import styled, { css } from "styled-components";

const colors = {
  default: css`
    background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
    box-shadow: 0 0 8px rgba(0, 242, 254, 0.5);
  `,
  empty: css`
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.04);
  `
};

export const Dot = styled.div`
  height: 8px;
  width: 18px;
  border-radius: 1px;
  display: inline-block;
  margin-right: 4px;
  transition: all 0.3s ease;
  ${props => colors[props.color || 'default']}
`;
