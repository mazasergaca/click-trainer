import React, { useState } from "react";
import {
  useLoginMutation,
  useRegistrationMutation,
} from "../../redux/base-api";
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

  const [login] = useLoginMutation();
  const [registration] = useRegistrationMutation();

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

    try {
      if (typeSubmit === "login") {
        await login({ username, password }).unwrap();
      } else if (typeSubmit === "registration") {
        await registration({ username, password }).unwrap();
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
        <LinkStyled to="/">ᐊ</LinkStyled>
        <Title>{title}</Title>
        <Label>
          Username
          <Input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Go</Button>
      </FormStyled>
    </>
  );
};

export default Form;
