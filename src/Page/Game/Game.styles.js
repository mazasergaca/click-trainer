import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const WrapperInfo = styled.div`
  height: 52px;
  position: relative;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #fff;
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
  display: block;
`;

export const MenuNav = styled.div`
  padding: 10px 10px;
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemMenu = styled.span`
  margin-bottom: 20px;
  font-size: 26px;
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

export const ContainerStore = styled.div`
  padding: 10px 10px;
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  background-color: #111;
`;

export const StoreItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StoreText = styled.span`
  font-size: 16px;
`;

export const WrapperStoreItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonStore = styled.button`
  margin-left: 10px;
  padding: 5px 10px;

  font-family: "Press Start 2P", cursive;

  border: 1px solid #eee;
  border-radius: 20px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(234, 72, 132);
  }

  &:disabled {
    border-color: #888;
    color: #888;
    cursor: default;
  }
`;
