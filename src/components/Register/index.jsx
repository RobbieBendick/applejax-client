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
    const [formStateHolder, setFormStateHolder] = useState({
        email: {
            isValid: false,
            isVisited: false,
            value: "",
        },
        username: {
            isValid: false,
            isVisited: false,
            value: "",
        },
        password: {
            isValid: false,
            isVisited: false,
            value: "",
        }
    });
  const {email, username, password} = formStateHolder;
  const shouldShowErrorEmail = !email.isValid && email.isVisited;
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
                value={email.value}
                onChange={e => setFormStateHolder({...formStateHolder, email: {...email, value: e.currentTarget.value, isValid: validateEmail(e.currentTarget.value)}})}
                onBlur={() => setFormStateHolder({...formStateHolder, email: {...email, isVisited: true}})}
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
                value={username.value}
                onChange={e => setFormStateHolder({...formStateHolder, username: {...username, value: e.currentTarget.value}})}
                onBlur={() => setFormStateHolder({...formStateHolder, username: {...username, isVisited: true}})}
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
                value={password.value}
                onChange={e => setFormStateHolder({...formStateHolder, password: {...password, value: e.currentTarget.value}})}
                onBlur={() => setFormStateHolder({...formStateHolder, password: {...password, isVisited: true}})}
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