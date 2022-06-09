import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 13px 35px;

  font-family: "Press Start 2P", cursive;
  font-size: 20px;
  text-align: center;

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
