import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
`;
export const Container = styled.div`
  padding: 10px 10px;
  width: 90vw;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  background-color: #111;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`;

export const MenuNav = styled.div`
  padding: 10px 10px;
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export const TitleMenu = styled.h1`
  text-align: center;
`;

export const ItemMenu = styled.span`
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
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

export const AchievementScale = styled.div`
  position: relative;
  height: 24px;
  margin-top: 10px;

  border-radius: 10px;
  background-color: #fff;
  background-image: linear-gradient(
    90deg,
    rgb(234, 72, 132) 0%,
    rgb(234, 72, 132) 100%
  );
  background-size: ${(props) => props.points};
  background-repeat: no-repeat;
`;

export const AchievementMainScore = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 10px;

  color: #000;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;
export const AchievementList = styled.ul`
  margin-top: 30px;
`;

export const AchievementItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const WrapperAchievement = styled.div`
  display: flex;
  align-items: center;
`;

export const AchievementName = styled.span`
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const AchievementScore = styled.span`
  margin-right: 30px;
  @media screen and (min-width: 768px) {
    margin-right: 120px;
  }
`;

export const ButtonAchievement = styled.button`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Press Start 2P", cursive;

  border: 1px solid #eee;
  border-radius: 20px;
  background-color: transparent;
  color: #fce656;
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
