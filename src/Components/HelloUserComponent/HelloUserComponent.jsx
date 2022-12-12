import React from "react";
import { useContext } from "react";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";
import { getCookieUtil } from "../../utils/getCookieUtil";
import "./HelloUserComponent.scss"

export default function HelloUserComponent () {
    const {isLogged} = useContext(IsLoggedContext);
    
    const stringUser = getCookieUtil('user');
    
    const user = JSON.parse(stringUser ? stringUser : '{}');
    console.log(user?.photo)

    

    return isLogged ? (
        <h5>¡Hola {user.name}!</h5>
    ) : (
        <h5>You are not logged in.</h5>
    );
}