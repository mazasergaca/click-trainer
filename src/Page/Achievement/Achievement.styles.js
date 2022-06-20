import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 10px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;
export const WrapperItems = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  text-align: center;

  font-size: 36px;

  text-shadow: 1px 1px 1px #000;
`;

export const Scale = styled.div`
  position: relative;
  height: 24px;
  padding: 20px;
  margin-top: 10px;

  border-radius: 30px;
  border: 2px solid #fff;
  background-image: linear-gradient(
    90deg,
    rgba(234, 72, 132, 0.8) 0%,
    rgba(234, 72, 132, 0.8) 100%
  );
  background-size: ${(props) => props.points};
  background-repeat: no-repeat;
  box-shadow: 0px 2px 0px #000;
`;

export const MainScore = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 16px;

  color: #fff;
  text-shadow: 1px 1px 1px #000;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const List = styled.ul`
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Name = styled.span`
  font-size: 22px;

  text-shadow: 1px 1px 1px #000;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
export const Score = styled.span`
  margin-right: 30px;

  font-size: 16px;

  text-shadow: 1px 1px 1px #000;

  @media screen and (min-width: 768px) {
    margin-right: 120px;

    font-size: 20px;
  }
`;

export const Button = styled.button`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-size: 22px;

  border: 2px solid #fce656;
  border-radius: 20px;
  background-color: transparent;
  color: #fce656;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000;
  box-shadow: 0px 2px 0px #000;
  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(234, 72, 132);
  }

  &:disabled {
    border-color: #ddd;
    color: #ddd;
    cursor: default;
  }
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  left: 10px;
  top: -70px;

  font-size: 32px;

  border-radius: 20px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000;

  transition: color 0.25s;

  &:hover {
    color: rgb(234, 72, 132);
  }

  @media screen and (min-width: 768px) {
    left: -20px;
  }
`;
