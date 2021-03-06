import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Form, Input, Button } from "./styled";
import { userRegistrationLink } from "../../service/routeLinks";

export default function Signup() {
  const [auth, setAuth] = useState({ email: "", password: "", nickname: "" });
  const clickSubmit = function (event) {
    event.preventDefault();
    fetch(userRegistrationLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.success) {
          alert("Success registration");
        } else alert("Failed registration");
      });
  };
  return (
    <Card>
      <Form>
        <Input
          type="text"
          placeholder="Nickname"
          onChange={(event) =>
            setAuth({ ...auth, nickname: event.target.value })
          }
        />
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
        <Button type="submit" onClick={clickSubmit}>
          Sign Up
        </Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}
