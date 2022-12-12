import React from "react";
import { useContext } from "react";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";
import { getCookieUtil } from "../../utils/getCookieUtil";
import { removeCookieUtil } from "../../utils/removeCookieUtil";
import "./ButtonLogoutComponent.scss"

export default function ButtonLogoutComponent ({title,img,route}) {
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
        <>
            <button className="c-button-users" onClick={signOut}>
            <div><img src={img} alt=""></img> {title}</div><div> <i className="fa fa-chevron-right" aria-hidden="true"></i></div></button>
        </>
    ) : (
        <p>You are not logged in.</p>
    );
}
