import styled, { keyframes } from "styled-components";

const AnimationPoint = keyframes`
0%{filter: drop-shadow(rgb(14, 180, 201) 0px 0px 10px)
    drop-shadow(rgb(14, 180, 201) 0px 0px 10px);}
100%{filter: drop-shadow(rgb(14, 180, 201) 0px 0px 10px)
    drop-shadow(rgb(14, 180, 201) 0px 0px 30px);}
`;

export const Point = styled.div.attrs((props) => ({
  style: {
    width: props.size + "px",
    height: props.size + "px",
    top: props.y + "px",
    left: props.x + "px",
  },
}))`
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 50%;
  background-color: rgb(14, 180, 201);
  transition: width 0.25s, height 0.25s;

  animation-name: ${AnimationPoint};
  animation-duration: 700ms;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;
