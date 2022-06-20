import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
`;
export const Container = styled.div`
  padding: 10px 10px;
  width: 90vw;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  background-color: #111;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`;

export const MenuNav = styled.div`
  padding: 10px 10px;
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export const ItemMenu = styled.span`
  font-size: 36px;
  text-align: center;

  text-shadow: 1px 1px 1px #000;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  &:last-of-type {
    margin-bottom: 35px;
  }

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`;

export const ButtonMenu = styled.button`
  padding: 13px 35px;

  font-family: inherit;
  font-size: 22px;

  border-radius: 30px;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  box-shadow: 0px 2px 0px #000;
  cursor: pointer;

  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(234, 72, 132);
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
