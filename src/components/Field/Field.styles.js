import styled from "styled-components";

export const FieldGame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const WrapperFieldGame = styled.div`
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const WrapperSkills = styled.div`
  display: flex;

  margin: 0 auto;
  padding: 15px 0;

  @media screen and (min-width: 768px) {
    width: 200px;
    padding: 30px 0;
    flex-direction: column;
  }
`;

export const ItemSkills = styled.div`
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

export const SkillsText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

export const ButtonSkills = styled.button`
  width: 50px;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.color};
  }

  @media screen and (min-width: 768px) {
  }
`;
