import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Logo, Form, Input, Button } from "./styled";

function Signup() {
  const [auth, setAuth] = useState({ email: "", password: "" });
  const clickSubmit = function (event) {
    event.preventDefault();
    fetch("http://localhost:3001/api/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
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
        {/* <Input
          type="password"
          placeholder="password again"
          onChange={(event) =>
            setAuth({ ...auth, password2: event.target.value })
          }
        /> */}
        <Button type="submit" onClick={clickSubmit}>
          Sign Up
        </Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;
