import styled from "styled-components";

const Experience = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  transition: background-color 0.15s ease;

  border: 0;
  color: #FFF;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 700;
  cursor: default;
  padding-left: 10px;
  height: 70px;
  display: flex;
  align-items: center;

  &:hover {
      transform: scale(1.05);
  }
`;

export default Experience;
