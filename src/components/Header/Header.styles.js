import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  height: 52px;
  padding: 10px 15px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;

  font-size: 22px;

  border-bottom: 1px solid #fff;

  @media screen and (min-width: 768px) {
    width: 738px;
  }
  @media screen and (min-width: 1280px) {
    width: 1250px;
    font-size: 20px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;

export const WrapperRecord = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const WrapperItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.span``;

export const Coins = styled.span`
  margin-right: 7px;
`;

export const Time = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
