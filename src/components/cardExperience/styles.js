import styled from "styled-components";

const Experience = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-left: 4px solid #7f00ff;
  border-radius: 0 8px 8px 0;
  padding: 20px;
  cursor: default;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .locale {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.6rem;
    color: #ffffff;
  }

  .function {
    font-family: 'Fira Code', monospace;
    font-weight: 500;
    font-size: 1.3rem;
    color: #00f2fe;
    text-shadow: 0 0 5px rgba(0, 242, 254, 0.1);
  }

  .description {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    color: #9ba3af;
    line-height: 1.6;
    margin-top: 4px;
    white-space: pre-line;
  }

  .period {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    color: #7f00ff;
    background: rgba(127, 0, 255, 0.06);
    border: 1px solid rgba(127, 0, 255, 0.15);
    padding: 2px 8px;
    border-radius: 4px;
    width: fit-content;
    align-self: flex-start;
    margin-top: 4px;
  }

  &:hover {
    transform: translateX(6px);
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(0, 242, 254, 0.1) rgba(0, 242, 254, 0.1) rgba(0, 242, 254, 0.1) #00f2fe;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 242, 254, 0.05);

    .locale {
      color: #ffffff;
    }
    
    .period {
      color: #00f2fe;
      background: rgba(0, 242, 254, 0.06);
      border-color: rgba(0, 242, 254, 0.2);
    }
  }
`;

export default Experience;
