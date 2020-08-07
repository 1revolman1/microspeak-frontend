import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Form, Input, Button } from "./styled";
import { AuthContext } from "../../auth";

export default function LoginPage() {
  const { onLogin, isAuthenticated } = useContext(AuthContext);
  const [auth, setAuth] = useState({ email: "", password: "" });
  const clickSubmit = async (event) => {
    event.preventDefault();
    return onLogin({ ...auth });
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
