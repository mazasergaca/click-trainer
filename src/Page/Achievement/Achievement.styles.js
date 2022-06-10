import { Link } from "react-router-dom";
import styled from "styled-components";

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
export const WrapperItems = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  text-align: center;
`;

export const Scale = styled.div`
  position: relative;
  height: 24px;
  margin-top: 10px;

  border-radius: 10px;
  background-color: #fff;
  background-image: linear-gradient(
    90deg,
    rgb(234, 72, 132) 0%,
    rgb(234, 72, 132) 100%
  );
  background-size: ${(props) => props.points};
  background-repeat: no-repeat;
`;

export const MainScore = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 10px;

  color: #000;

  @media screen and (min-width: 768px) {
    font-size: 12px;
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
    margin-bottom: 10px;
  }
`;

export const Name = styled.span`
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const Score = styled.span`
  margin-right: 30px;
  @media screen and (min-width: 768px) {
    margin-right: 120px;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Press Start 2P", cursive;

  border: 1px solid #eee;
  border-radius: 20px;
  background-color: transparent;
  color: #fce656;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(234, 72, 132);
  }

  &:disabled {
    border-color: #888;
    color: #888;
    cursor: default;
  }
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  left: 20px;
  top: -70px;

  font-family: "Press Start 2P", cursive;
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
