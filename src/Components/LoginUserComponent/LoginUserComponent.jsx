import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import { API } from "../../services/api";
import "./LoginUserComponent.scss"

const LoginUserComponent = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    
    const {setIsLogged,setUser} = useContext(IsLoggedContext);
    
    

    const onSubmit = formData => {
      console.log(formData)
        API.post('users/login', formData).then(res => {
              console.log(res.data.userInfo)
             document.cookie = 'token=' + res.data.token;
             document.cookie = 'user=' +  JSON.stringify(res.data.userInfo);
             setUser(res.data.userInfo)
            setIsLogged(res.data.token);
            console.log(res.data.token)
            setIsLogged ? navigate("/Main") : alert("error")
        })
    }
  return (
    <div className='c-loginuser-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            
            <div className="c-input-wrapper">
            <i className="fa fa-envelope-o c-input-icon" aria-hidden="true"></i> 
            <input  id="email" className='c-input'
                   {...register("mail",{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
             
            </div>
            <div className="c-input-wrapper">
            <i className="fa fa-eye c-input-icon" aria-hidden="true"></i>
            <input  id="password" className='c-input' type="password" defaultValue={'123456Ab*'}
                   {...register("password",{
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
                   })}/> 
                   
            
            <p>¿Has olvidado tu contraseña?</p>   
            </div>
            
            <div className='c-loginuser-button'>
            {/* <button type="submit" >Login</button> */}
              <button type="submit" className='c-loginuser-button__blue'>Iniciar Sesión</button>
              <button type="submit" className='c-loginuser-button__white' onClick={() => navigate("/RegUserPage")}>Crear Cuenta</button>
            </div>
            
        </form>
      </div>
        
     
      
  )
}

export default LoginUserComponent