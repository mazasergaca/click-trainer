import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 10px;
  position: relative;
  min-width: 320px;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 738px;
  }
  @media screen and (min-width: 1280px) {
    width: 1250px;
  }
`;
