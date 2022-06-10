import React from "react";
import { PulseLoader } from "react-spinners";
import { WrapperLoader } from "./Loader.styles";

const Loader = () => {
  return (
    <WrapperLoader>
      <PulseLoader color="#fff" size={20} />
    </WrapperLoader>
  );
};

export default Loader;
