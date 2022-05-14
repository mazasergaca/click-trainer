import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const WrapperInfo = styled.div`
  position: relative;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
`;

export const WrapperItem = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.span`
  font-size: 24px;
`;
export const Time = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.isNewGame ? "none" : "block")};
`;

export const MenuNav = styled.div`
  padding: 10px 10px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
\
`;

export const ItemMenu = styled.span`
  margin-bottom: 20px;
  font-size: 26px;
`;

export const ButtonStart = styled.button`
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
`;
