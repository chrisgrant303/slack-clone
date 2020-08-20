import React from 'react';
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
            })
                .catch((error) => {
                    alert(error.message);
                }));
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""></img>
                <h1>Sign in to Vantage Peak HQ</h1>
                <p>vantagepeakvans.fakeslack.com</p>
                <Button>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
