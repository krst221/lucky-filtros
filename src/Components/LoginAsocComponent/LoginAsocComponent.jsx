import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import { API } from "../../services/api";
import "./LoginAsocComponent.scss"

const LoginAsocComponent = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    
    const {setIsLogged,setProtector} = useContext(IsLoggedContext);
    

    const onSubmit = formData => {
      console.log(formData)
        API.post('animalProtector/login', formData).then(res => {
            console.log("ee")         
             document.cookie = 'token=' + res.data.token;
             document.cookie = 'user=' +  JSON.stringify(res.data.ProtectorInfo);
             setProtector(res.data.ProtectorInfo)             
             setIsLogged(res.data.token);
             console.log(res.data.token)
             
             
              //setIsLogged ? navigate("/Main") : alert("error")
        })
    }
  return (
    <div className='c-loginasoc-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            
            <div className="c-input-wrapper">
            <i className="fa fa-envelope-o c-input-icon" aria-hidden="true"></i> 
            <input  id="email" className='c-input'
                   {...register("mail",{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
             
            </div>
            <div className="c-input-wrapper">
            <i className="fa fa-eye c-input-icon" aria-hidden="true"></i>
            <input  id="password" className='c-input' type="password" defaultValue={'123456Ab!'}
                   {...register("password",{
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
                   })}/> 
                   
            
            <p>¿Has olvidado tu contraseña?</p>   
            </div>
            
            <div className='c-loginasoc-button'>
              <button type="submit" className='c-loginasoc-button__blue' >Iniciar Sesión</button>
              <button type="submit" className='c-loginasoc-button__white' onClick={() => navigate("/RegAsocPage")}>Crear Cuenta</button>
            </div>
            
        </form>
      </div>
  )
}

export default LoginAsocComponent