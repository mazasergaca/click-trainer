import styled from "styled-components";
import { Link } from "react-router-dom";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  position: relative;
  margin-bottom: 50px;
  display: flex;

  font-size: 58px;

  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 112px;
  }

  & span {
    margin-right: 25px;

    @media screen and (min-width: 768px) {
      margin-right: 40px;
    }
  }
`;

export const Svg = styled.svg`
  width: 56px;
  height: 76px;
  position: absolute;
  left: 14%;

  fill: rgb(216, 250, 67);

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 145px;
  }
`;

export const LinkStyled = styled(Link)`
  padding: 10px 45px;

  font-size: 28px;

  border-radius: 30px;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  box-shadow: 0px 2px 0px #000;
  cursor: pointer;

  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(234, 72, 132);
  }

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Text = styled.span`
  margin-bottom: 15px;

  font-size: 28px;
  text-align: center;

  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`;
