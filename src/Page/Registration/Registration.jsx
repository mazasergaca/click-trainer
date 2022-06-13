import React from "react";
import { Helmet } from "react-helmet";
import Container from "../../components/Container/Container";
import Form from "../../components/Form";

const Registration = () => {
  return (
    <>
      <Helmet>
        <title>Clickstorm | Registration</title>
      </Helmet>
      <Container>
        <Form title="Create new account" typeSubmit="registration" />
      </Container>
    </>
  );
};

export default Registration;
