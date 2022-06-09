import React from "react";
import { Wrapper } from "./Container.styles";

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
