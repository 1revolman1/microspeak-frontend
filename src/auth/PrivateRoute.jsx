import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthContext } from "./index";
import { useSelector } from "react-redux";
import { isAuth } from "../reduxThunk/selector/User";

function PrivateRoute({ component: Component, ...rest }) {
  // const { isAuthenticated } = useContext(AuthContext);
  const isAuthenticated = useSelector(isAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
