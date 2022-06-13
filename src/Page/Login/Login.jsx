import React from "react";
import { Helmet } from "react-helmet";
import Container from "../../components/Container/Container";
import Form from "../../components/Form";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Clickstorm | Login</title>
      </Helmet>
      <Container>
        <Form title="Login to your account" typeSubmit="login" />
      </Container>
    </>
  );
};

export default Login;
