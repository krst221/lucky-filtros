import React from "react";
import { useContext } from "react";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";
import { getCookieUtil } from "../../utils/getCookieUtil";
import { removeCookieUtil } from "../../utils/removeCookieUtil";
import "./AuthButton.scss"

export default function AuthButton () {
    const {isLogged, setIsLogged} = useContext(IsLoggedContext);
    
    const stringUser = getCookieUtil('user');
    
    const user = JSON.parse(stringUser ? stringUser : '{}');
    console.log(user?.photo)

    const signOut = () => {
        removeCookieUtil('user');
        removeCookieUtil('token');

        setIsLogged(false);
        
    }

    return isLogged ? (
        <p className="red">
            Welcome! {user.name}
            <button
                onClick={signOut}
            >
                Sign out
            </button>
        </p>
    ) : (
        
        <p>You are not logged in.</p>

    );
}
