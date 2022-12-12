import React from 'react'
import AuthButton from '../../Components/AuthButton/AuthButton'
import LoginUserComponent from '../../Components/LoginUserComponent/LoginUserComponent'
import "./LoginUserPage.scss"

const LoginAsocPage = () => {
  return (
    <div className='p-loginuser-container'>
    <div className='p-loginuser-img'></div>
        <h6>¡Hola! para continuar, inicia sesión o crea una cuenta</h6>
        <LoginUserComponent/>
        {/* <AuthButton></AuthButton> */}
    </div>
  )
}

export default LoginAsocPage
