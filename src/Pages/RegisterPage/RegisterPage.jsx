import React from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import "./RegisterPage.scss"


export default function RegisterPage () {
    const { register, handleSubmit } = useForm();  
 

    const onSubmit = formData => {
        console.log("hola")
        API.post('users/register', formData).then(res => {
            console.log('Register user');
           
        })
    }


    return (
        <div className='registro'>
        <form onSubmit={handleSubmit(onSubmit)}>

          
            <label htmlFor="name">Name</label>
            <input  id="name" 
                   {...register("name",{ required: true })}/>

          
            <label htmlFor="email">Email</label>
            <input  id="email" 
                   {...register("mail",{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>

           
            <label htmlFor="password">Password</label>
            <input  id="password" type="password"
                  {...register("password",{ required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ })}/>
           
            <label htmlFor="photo">Img</label>
            <input  id="photo" 
                   {...register("photo",{ required: true })}/>

            <button  type="submit" >Register</button>
        </form>
        </div>
    )
}
