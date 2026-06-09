import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 4%;
  background-color: rgba(10, 11, 14, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 242, 254, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  grid-area: h;
  z-index: 10;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`;
