import styled from "styled-components";

export const Skill = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  & > div > div {
    font-family: 'Fira Code', monospace;
    font-size: 1.2rem;
    font-weight: 500;
    color: #9ba3af;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(127, 0, 255, 0.03);
    border-color: rgba(127, 0, 255, 0.3);
    box-shadow: 0 4px 15px rgba(127, 0, 255, 0.15);
    
    & > div > div {
      color: #e100ff;
      text-shadow: 0 0 5px rgba(225, 0, 255, 0.4);
    }
  }
`;
