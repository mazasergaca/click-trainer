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

  font-size: 36px;

  text-shadow: 1px 1px 1px #000;
`;

export const WrapperHeader = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
  font-family: inherit;
  font-size: 32px;

  border-radius: 20px;
  background: transparent;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  cursor: pointer;

  transition: color 0.25s;

  &:hover {
    color: rgb(234, 72, 132);
  }
`;

export const ButtonStore = styled.button`
  margin-left: 4px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-size: 18px;

  border: 1px solid #eee;
  border-radius: 20px;
  background-color: transparent;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  box-shadow: 0px 2px 0px #000;
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

  font-size: 20px;

  text-shadow: 1px 1px 1px #000;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.span`
  margin-right: 7px;

  font-size: 20px;

  text-shadow: 1px 1px 1px #000;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const WrapperAmount = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 22px;

  text-shadow: 1px 1px 1px #000;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
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
