import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  margin: 0 auto;
  padding: 15px 0;

  @media screen and (min-width: 768px) {
    width: 200px;
    padding: 30px 0;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 30px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    margin-left: 10px;
  }
`;

export const Text = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;

export const Button = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0px 2px 0px #000;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.color};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${(props) => (props.cd ? (100 / 30) * props.cd + "%" : "0%")};
    background-color: ${(props) => (props.cd ? "#f2fff670" : "transparent")};
  }
`;
