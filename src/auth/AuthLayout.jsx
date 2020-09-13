import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "../reduxThunk/selector/User";
import { testAuth } from "../reduxThunk/actions/User";

const StyledLoader = styled(Loader)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function AuthLayout({ children }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuth);
  useEffect(() => {
    console.log("TEST", isAuthenticated);
    !isAuthenticated && dispatch(testAuth());
  }, []);

  return (
    <>
      {isAuthenticated === null ? (
        <StyledLoader
          type="Puff"
          color="#900020"
          height={100}
          width={100}
          timeout={1000}
        />
      ) : (
        children
      )}
    </>
  );
}
