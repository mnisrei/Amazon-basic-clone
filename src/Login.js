import React, { useState } from 'react';
import "./Login.css"
import { auth } from "./firebase";
import { Link, useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = event => {
        event.preventDefault();
        //Login logic after this
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in
                history.push("/");
            }).catch((e) => alert(e.message));
    }
    const register = event => {
        event.preventDefault();
        //register logic after this
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //registered in
                history.push("/");
            }).catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
                    alt="logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        type="email"

                    />
                    <h5>Password</h5>
                    <input
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        value={password}
                        type="password"

                    />
                    <button onClick={login} className="login__signInBtn">Sign In</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button onClick={register} className="login__registerBtn">Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
