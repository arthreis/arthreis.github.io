import styled from "styled-components";

const Experience = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  transition: background-color 0.15s ease;

  border: 0;
  color: #FFF;
  font-size: 1.4rem;
  cursor: default;
  padding-left: 10px;
  display: flex;
  align-items: center;

  &:hover {
      transform: scale(1.05);
  }

  .locale {
    font-weight: 700;
  }
  .function {
  }
  .description {
    font-weight: 400;
  }
  .period {
  }
`;

export default Experience;
