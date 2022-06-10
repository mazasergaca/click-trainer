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
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const ButtonMenu = styled.button`
  padding: 13px 35px;

  font-family: "Press Start 2P", cursive;
  font-size: 16px;

  border-radius: 20px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  cursor: pointer;

  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(234, 72, 132);
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
