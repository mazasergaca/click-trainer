import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import infoSelectors from "../../redux/info/info-selects";
import { rename } from "../../redux/info/info-slice";
import {
  Backdrop,
  Wrapper,
  ButtonMenu,
  Form,
  Label,
  Input,
  Text,
} from "./StartPage.styles";

const StartPage = ({ startGame }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const nameUser = useSelector(infoSelectors.getName);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(rename(name));
    startGame();
  };
  return (
    <Backdrop>
      <Wrapper>
        {!nameUser ? (
          <Form>
            <Label>
              Name
              <Input
                type="text"
                maxLength="14"
                value={name}
                onChange={handleChange}
              />
            </Label>
            <ButtonMenu type="submit" onClick={handleSubmit}>
              Start
            </ButtonMenu>
          </Form>
        ) : (
          <>
            <Text>Hello, {nameUser}</Text>
            <ButtonMenu onClick={startGame}>Start</ButtonMenu>
          </>
        )}
      </Wrapper>
    </Backdrop>
  );
};

export default StartPage;
