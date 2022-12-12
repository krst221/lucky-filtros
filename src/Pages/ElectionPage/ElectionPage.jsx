import "./ElectionPage.scss"
import React from 'react'
import ButtonDashboardComponent from '../../Components/ButtonDashboardComponent/ButtonDashboardComponent'

const ElectionPage = () => {
  return (
    <div className="c-election-container">
      <div className="c-election-content">
      <p>¿Cómo quieres entrar?</p>
      <ButtonDashboardComponent title='Usuario' route='LoginUserPage'></ButtonDashboardComponent>
      <ButtonDashboardComponent title='Asociación Protectora' route='LoginAsocPage'></ButtonDashboardComponent>
      <a href="/Main">Registrarse en otro momento</a>
      </div>
    </div>
  )
}


export default ElectionPage