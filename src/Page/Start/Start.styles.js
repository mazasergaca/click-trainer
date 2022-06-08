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

export const LinkStyled = styled(Link)`
  padding: 13px 35px;

  font-family: "Press Start 2P", cursive;
  font-size: 20px;

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
    margin-bottom: 25px;
  }
`;

export const Text = styled.span`
  margin-bottom: 15px;

  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
