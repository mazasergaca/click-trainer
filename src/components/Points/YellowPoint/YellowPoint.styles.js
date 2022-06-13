import styled, { keyframes } from "styled-components";

const AnimationPointDesc = keyframes`
0%{filter: drop-shadow(rgb(216, 250, 67) 0px 0px 2px)
    drop-shadow(rgb(216, 250, 67) 0px 0px 10px);}
100%{filter: drop-shadow(rgb(216, 250, 67) 0px 0px 10px)
    drop-shadow(rgb(216, 250, 67) 0px 0px 30px);}
`;
const AnimationPointMobile = keyframes`
0%{filter: drop-shadow(rgb(216, 250, 67) 0px 0px 2px)}
100%{filter: drop-shadow(rgb(216, 250, 67) 0px 0px 20px)}
`;

export const Point = styled.div.attrs((props) => ({
  style: {
    width: props.size + "px",
    height: props.size + "px",
    top: props.y + "px",
    left: props.x + "px",
  },
}))`
  position: absolute;
  border-radius: 50%;
  background-color: rgb(216, 250, 67);

  animation-name: ${AnimationPointMobile};
  animation-duration: 700ms;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

  @media screen and (min-width: 768px) {
    animation-name: ${AnimationPointDesc};
  }
`;
