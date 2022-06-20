import styled from "styled-components";

export const Wrapper = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 13px 75px;

  font-family: inherit;
  font-size: 22px;
  text-align: center;

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

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;
