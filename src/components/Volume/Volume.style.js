import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  pointer-events: none;
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const WrapperVolume = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Input = styled.input`
  position: absolute;
  bottom: 90px;

  transform: rotate(-90deg);

  @media screen and (min-width: 768px) {
  }
`;
