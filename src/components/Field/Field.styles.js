import styled from "styled-components";

export const FieldGame = styled.div`
  height: 85vh;
  position: relative;

  background-color: #222;
`;

export const Point = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;

  background-color: red;
`;
