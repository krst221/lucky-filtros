import React from 'react'
import LoginAsocComponent from '../../Components/LoginAsocComponent/LoginAsocComponent'
import "./LoginAsocPage.scss"
const LoginAsocPage = () => {
  return (
    <div className='p-loginasoc-container'>
        <div className='p-loginasoc-img'></div>
        <h6>¡Hola! para continuar, inicia sesión o crea una cuenta</h6>
        <LoginAsocComponent/>
    </div>
  )
}
export default LoginAsocPage