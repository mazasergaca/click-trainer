import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 738px;
  }
  @media screen and (min-width: 1280px) {
    width: 1250px;
  }
`;
