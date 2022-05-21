import styled from "styled-components";

export const FieldGame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const WrapperFieldGame = styled.div`
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
