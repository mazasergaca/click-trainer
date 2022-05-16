import { Backdrop, WrapperNav, ButtonMenu } from "./StartPage.styles";

const StartPage = ({ startGame }) => {
  return (
    <Backdrop>
      <WrapperNav>
        <ButtonMenu onClick={startGame}>Start</ButtonMenu>
      </WrapperNav>
    </Backdrop>
  );
};

export default StartPage;
