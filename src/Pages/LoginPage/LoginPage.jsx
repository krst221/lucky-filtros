import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import { API } from "../../services/api";
import "./LoginPage.scss"

export default function LoginPage() {
    const { register, handleSubmit } = useForm();
    
    const {setIsLogged} = useContext(IsLoggedContext);
    console.log("hola")

    const onSubmit = formData => {
      console.log(formData)
        API.post('users/login', formData).then(res => {
              // console.log(res.data.userInfo)
             document.cookie = 'token=' + res.data.token;
             document.cookie = 'user=' +  JSON.stringify(res.data.userInfo);
             
            setIsLogged(true);
        })
    }

    return (
      <div className='registro'>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <label htmlFor="email">Email</label>
            <input  id="email"
                   {...register("mail",{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
            
            <label htmlFor="password">Password</label>
            <input  id="password" type="password" defaultValue={'123456Ab*'}
                   {...register("password",{
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
                   })}/> 
           

            
            <button type="submit">Login</button>
        </form>
      </div>
    )
}
