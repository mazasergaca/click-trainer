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

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  font-size: 26px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    font-size: 26px;
  }
`;

export const Input = styled.input`
  width: 300px;
  margin-top: 10px;
  padding: 4px 10px;

  font-family: inherit;
  font-size: 20px;

  border-radius: 30px;
  border: none;
  outline: none;
  box-shadow: 0px 2px 0px #000;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 10px;
  }

  &:focus {
    outline: 2px solid rgb(234, 72, 132);
  }
`;

export const Title = styled.h1`
  margin-bottom: 25px;

  font-size: 28px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Button = styled.button`
  padding: 10px 45px;
  min-width: 175px;

  font-family: inherit;
  font-size: 28px;

  border-radius: 30px;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  text-shadow: inherit;
  box-shadow: 0px 2px 0px #000;
  cursor: pointer;

  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(234, 72, 132);
  }
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  left: -30px;
  top: -50px;

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
