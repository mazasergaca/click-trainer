import React from "react";
import Container from "../../components/Container/Container";
import Form from "../../components/Form";

const Login = () => {
  return (
    <Container>
      <Form title="Login to your account" typeSubmit="login" />
    </Container>
  );
};

export default Login;
