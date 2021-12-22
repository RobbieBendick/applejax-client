import * as React from "react";
import { useState } from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { useStyletron } from "baseui";
import { Alert } from "baseui/icon";
import { Button } from "baseui/button";
import { Helmet } from "react-helmet";
import axios from "axios";

function Negative() {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        paddingRight: theme.sizing.scale500,
        color: theme.colors.negative400,
      })}
    >
      <Alert size="22px" />
    </div>
  );
}

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [isValid, setIsValid] = useState({
    username: false,
    password: false,
  });
  const [isVisited, setIsVisited] = useState({
    email: false,
    username: false,
    password: false,
  });
  const [css, theme] = useStyletron();

  // function loginAPICall() {
  //   axios.post("http://localhost:9000/login", {
  //     username: values.username,
  //     password: values.password
  //   }).then(res => console.log(res))
  //   .catch(err => console.error(err))
  // }

  return (
    <>
      <Helmet>
        {" "}
        <title>Login - Applejax</title>
      </Helmet>
      <form
        className={css({
          width: "50%",
          margin: "0 auto",
          paddingTop: "35px",
        })}
        onSubmit={(e) => {
          e.preventDefault();
          // loginAPICall();
        }}
      >
        <FormControl label="Your username">
          <Input
            placeholder="Enter your username"
            id="username-input-id"
            value={values.username}
            onChange={(e) =>
              setValues({ ...values, username: e.currentTarget.value })
            }
            onBlur={() => setIsVisited({ ...isVisited, username: true })}
            type="username"
            required
          />
        </FormControl>
        <FormControl label="Your password">
          <Input
            placeholder="Enter your password"
            id="password-input-id"
            value={values.password}
            onChange={(e) =>
              setValues({ ...values, password: e.currentTarget.value })
            }
            onBlur={() => setIsVisited({ ...isVisited, password: true })}
            type="password"
            autoComplete="current-password"
            required
          />
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}

export default Login;
