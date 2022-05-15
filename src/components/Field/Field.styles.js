import styled from "styled-components";

export const FieldGame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const WrapperFieldGame = styled.div`
  height: calc(100vh - 52px);
  display: flex;
`;

export const WrapperSkills = styled.div`
  width: 200px;
  padding: 30px 0;
`;

export const ItemSkills = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const SkillsText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

export const ButtonSkills = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 10px;
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
`;
