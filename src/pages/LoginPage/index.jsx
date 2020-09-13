import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Form, Input, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "../../reduxThunk/selector/User";
import { userLogin } from "../../reduxThunk/actions/User";

export default function LoginPage() {
  //REDUX
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuth);
  //REDUX
  const [auth, setAuth] = useState({ email: "", password: "" });
  const clickSubmit = async (event) => {
    event.preventDefault();
    return dispatch(userLogin({ ...auth }));
  };

  return !isAuthenticated ? (
    <Card>
      <Form>
        <Input
          type="email"
          placeholder="email"
          onChange={(event) => setAuth({ ...auth, email: event.target.value })}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(event) =>
            setAuth({ ...auth, password: event.target.value })
          }
        />
        <Button onClick={clickSubmit} type="submit">
          Sign In
        </Button>
      </Form>
      <Link to="/registration">Don't have an account?</Link>
    </Card>
  ) : (
    <Redirect to="/" />
  );
}
