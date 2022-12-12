import "./MorePage.scss"
import React from 'react'
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent"
import ButtonBlueUsers from "../../Components/ButtonBlueUsers/ButtonBlueUsers"
import ButtonLogoutComponent from "../../Components/ButtonLogoutComponent/ButtonLogoutComponent";
const MorePage = () => {
  return (
    <div className="p-more-container">
      <div  className='p-more-holder'>
            <div className='button-container'>
            <ButtonBlueUsers title={"Asociaciones Protectoras"} route={"AsociationPage"} img={"./assets/icons/protectora.png"}></ButtonBlueUsers>
            </div>
            <div className='button-container'>
            <ButtonBlueUsers title={"Eventos"} route={"MainPage"} img={"./assets/icons/events.png"}></ButtonBlueUsers>
            </div>
            <div className='button-container'>
            <ButtonBlueUsers title={"Curiosidades"} route={"MainPage"} img={"./assets/icons/blog.png"}></ButtonBlueUsers>
            </div>
            <div className='button-container'>
            <ButtonBlueUsers title={"Ayuda"} route={"MainPage"} img={"./assets/icons/help.png"}></ButtonBlueUsers>
            </div>
            <div className='button-container'>
            <ButtonBlueUsers title={"Configuracion"} route={"MainPage"} img={"./assets/icons/setting.png"}></ButtonBlueUsers>
            </div>
          <div className='button-container__auth'><ButtonLogoutComponent title={"Cerrar Sesión"} img={"./assets/icons/out.png"}/></div>
      </div>
      <NavbarComponent/>
    </div>
  )
}
export default MorePage