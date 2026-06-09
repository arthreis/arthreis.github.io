import styled from "styled-components";

export const Skill = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  padding: 12px 16px;
  height: 70px;
  display: flex;
  align-items: center;
  cursor: default;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  & > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  & > div > div {
    font-family: 'Fira Code', monospace;
    font-size: 1.4rem;
    font-weight: 500;
    color: #f8fafc;
    letter-spacing: -0.2px;
  }

  &:hover {
    transform: translateY(-3px);
    background: rgba(0, 242, 254, 0.02);
    border-color: rgba(0, 242, 254, 0.3);
    box-shadow: 0 8px 25px rgba(0, 242, 254, 0.12);
    
    & > div > div {
      color: #00f2fe;
      text-shadow: 0 0 5px rgba(0, 242, 254, 0.3);
    }
  }
`;
