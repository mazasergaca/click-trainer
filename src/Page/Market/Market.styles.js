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

export const Title = styled.h1`
  margin-bottom: 15px;
  text-align: center;
`;

export const WrapperHeader = styled.div`
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
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

export const ButtonStore = styled.button`
  margin-left: 4px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Press Start 2P", cursive;

  border: 1px solid #eee;
  border-radius: 20px;
  background-color: transparent;
  color: #fff;
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

  @media screen and (min-width: 768px) {
    margin-left: 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-around;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const WrapperName = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
`;

export const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperAmount = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 16px;
`;

export const CoinImage = styled.img`
  width: 20px;
  @media screen and (min-width: 768px) {
    width: 28px;
  }
  @media screen and (min-width: 1280px) {
    width: 30px;
  }
`;
