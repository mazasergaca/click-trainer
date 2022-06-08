import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormStyled = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 18px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    font-size: 26px;
  }
`;

export const Input = styled.input`
  width: 300px;
  margin-top: 10px;
  padding: 4px 5px;

  font-family: "Press Start 2P", cursive;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 10px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 15px;

  font-size: 20px;
  text-align: center;
`;

export const Button = styled.button`
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
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  left: 0;
  top: -50px;

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
