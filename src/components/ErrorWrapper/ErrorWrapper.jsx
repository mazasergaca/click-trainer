import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { resetError } from "../../redux/user/user-slice";
import userSelectors from "../../redux/user/user-selectors";

const ErrorWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const error = useSelector(userSelectors.getError);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [error]);

  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ErrorWrapper;
