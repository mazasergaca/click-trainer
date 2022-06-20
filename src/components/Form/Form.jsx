import React, { useState } from "react";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import { PulseLoader } from "react-spinners";
import {
  useLoginMutation,
  useRegistrationMutation,
} from "../../redux/base-api";
import userSelectors from "../../redux/user/user-selectors";
import pressSound from "../../assets/sounds/start.mp3";
import {
  FormStyled,
  Label,
  Input,
  Title,
  Button,
  LinkStyled,
} from "./Form.styles";

const Form = ({ title, typeSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const volume = useSelector(userSelectors.getVolume);

  const [playSound] = useSound(pressSound, { volume });

  const [login, { isLoading: isLoadingLogin }] = useLoginMutation();
  const [registration, { isLoading: isLoadingRegistration }] =
    useRegistrationMutation();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) return;

    try {
      playSound();
      if (typeSubmit === "login") {
        await login({ username, password }).unwrap();
      } else if (typeSubmit === "registration") {
        await registration({ username, password }).unwrap();
        await login({ username, password }).unwrap();
      }
    } catch (err) {
      console.log(err);
    }

    reset();
  };

  const reset = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <LinkStyled to="/" onClick={playSound}>
          ᐊ
        </LinkStyled>
        <Title>{title}</Title>
        <Label>
          Username
          <Input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">
          {!isLoadingLogin && !isLoadingRegistration ? (
            typeSubmit === "login" ? (
              "Log In"
            ) : (
              "Create account"
            )
          ) : (
            <PulseLoader color="#fff" />
          )}
        </Button>
      </FormStyled>
    </>
  );
};

export default Form;
