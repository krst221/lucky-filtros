import "./NavbarComponent.scss"
import React,{ useState } from 'react'
import { NavLink } from "react-router-dom"
import { getCookieUtil } from "../../utils/getCookieUtil";

const NavbarComponent = () => {
  const stringUser = getCookieUtil('user');
  const user = JSON.parse(stringUser ? stringUser : '{}');
  console.log(user?.photo)
  const [isLogged, setIsLogged] = useState(!!getCookieUtil('token'));
  return (
    <div className="c-navbar-container">
      <ul>
        <li>
          <NavLink to='/Main' activeclassname={'active'}><button className="c-navbar-button__home"></button></NavLink>
        </li>
        <li>
          <NavLink to='/MapPage' activeclassname={'active'}><button className="c-navbar-button__map"></button></NavLink>
        </li>
        <li>
          <NavLink to='/AdoptPage' activeclassname={'active'}><button className="c-navbar-button__adopt"></button></NavLink>
        </li>
        <li>
        {isLogged &&  <NavLink to='/ProfilePage' activeclassname={'active'}><button className="c-navbar-button__profile"><img className="c-nav-img" src={user.photo} alt=""></img></button></NavLink>}
        </li>
        <li>
          <NavLink to='/MorePage' activeclassname={'active'}><button className="c-navbar-button__more"></button></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavbarComponent