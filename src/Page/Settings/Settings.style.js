import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  left: 20px;
  top: -70px;

  font-size: 32px;

  border-radius: 20px;
  background: transparent;
  color: #fff;
  cursor: pointer;

  transition: color 0.25s;

  &:hover {
    color: rgb(234, 72, 132);
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Name = styled.span`
  font-size: 26px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  text-align: center;

  font-size: 36px;
`;
