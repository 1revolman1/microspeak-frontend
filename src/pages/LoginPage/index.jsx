import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Logo, Form, Input, Button } from "./styled";
import { AuthContext } from "../../auth";

export default function LoginPage() {
  const { onLogin, isAuthenticated } = useContext(AuthContext);
  const [auth, setAuth] = useState({ email: "", password: "" });
  const clickSubmit = async (event) => {
    event.preventDefault();
    onLogin(auth);
    console.log(isAuthenticated);
    // fetch("http://localhost:3001/api/user/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(auth),
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
  };
  return (
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
  );
}
