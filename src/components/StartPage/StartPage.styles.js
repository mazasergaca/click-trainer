import styled from "styled-components";

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

export const Form = styled.form`
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

export const ButtonMenu = styled.button`
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

export const Text = styled.span`
  margin-bottom: 15px;

  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
