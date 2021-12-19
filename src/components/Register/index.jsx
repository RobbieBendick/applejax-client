import  * as React from 'react';
import {useState} from "react";
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {useStyletron} from 'baseui';
import {Alert} from 'baseui/icon';
import {Button} from 'baseui/button';
import {validate as validateEmail} from 'email-validator';
function Negative() {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.sizing.scale500,
        color: theme.colors.negative400,
      })}
    >
      <Alert size="22px" />
    </div>
  );
}

function Register() {
    const [values, setValues] = useState({
        email: "",
        username: "",
        password: ""
    });

    const [isValid, setIsValid] = useState({
        email: false,
        username: false,
        password: false,
    })
    const [isVisited, setIsVisited] = useState({
        email: false,
        username: false,
        password: false,
    })
  const shouldShowErrorEmail = !isValid.email && isVisited.email;
  const [css, theme] = useStyletron();

  return (
        <>
        <form className={css({
            width: "50%",
            margin: "0 auto",
            paddingTop: "35px"
        })} 
        onSubmit={e => e.preventDefault()}>
        <FormControl
            label="Your email"
            error={
            shouldShowErrorEmail
                ? 'Please input a valid email address'
                : null
            }
        >
            <Input
            placeholder="Enter your email"
            id="email-input-id"
            value={values.email}
            onChange={e => {
                setValues({...values, email: e.currentTarget.value});
                setIsValid({...isValid, email: validateEmail(e.currentTarget.value)});
                console.log(values);
            }}
            onBlur={e => setIsVisited({...isVisited, email: true})}
            error={shouldShowErrorEmail}
            overrides={shouldShowErrorEmail ? {After: Negative} : {}}
            type="email"
            required
            />
        </FormControl>
        <FormControl
            label="Your username"
        >
            <Input
            placeholder="Enter your username"
            id="username-input-id"
            value={values.username}
            onChange={e => setValues({...values, username: e.currentTarget.value})}
            onBlur={() => setIsVisited({ ...isVisited, username: true })}
            type="username"
            required
            />
        </FormControl>
        <FormControl
            label="Your password"
        >
            <Input
            placeholder="Enter your password"
            id="password-input-id"
            value={values.password}
            onChange={e => setValues({...values, password: e.currentTarget.value})}
            onBlur={() => setIsVisited({...isVisited, password: true})}
            type="password"
            autoComplete="current-password"
            required
            />
        </FormControl>
        <Button type="submit">Register</Button>
        </form>
        </>
    
  );
}

export default Register;