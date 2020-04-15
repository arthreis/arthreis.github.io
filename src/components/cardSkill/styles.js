import styled from "styled-components";

export const Skill = styled.div`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  color: #FFF;
  font-size: 16px;
  padding: 0 10px;
  font-weight: 700;
  cursor: default;
  height: 70px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;

  &:hover {
      background: yellow;
      opacity: 0.6;
      color: #000;
  }
`;
