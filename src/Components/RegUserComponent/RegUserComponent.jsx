import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import "./RegUserComponent.scss"

const RegUserComponent = () => {
    const { register, handleSubmit } = useForm();  
 

    const onSubmit = formData => {
        console.log("hola")
        API.post('users/register', formData).then(res => {
            console.log('Register user');
           
        })
    }
  return (
    <div className='c-reguser-container'>

        <form className='c-reguser-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="c-input-wrapper">
                <i class="fa fa-user-o c-input-icon" aria-hidden="true"></i>
                <input  id="name" className='c-input' {...register("name",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-map-marker c-input-icon" aria-hidden="true"></i>
                <input  id="direction" className='c-input' {...register("direction",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i class="fa fa-file-image-o c-input-icon" aria-hidden="true"></i>
                <input  id="photo" className='c-input' {...register("photo",{ required: true })}/>
                </div>
                <div className="c-input-wrapper">
                <i className="fa fa-envelope-o c-input-icon" aria-hidden="true"></i> 
                <input  id="email" className='c-input' {...register("mail",{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
                </div>
                <div className="c-input-wrapper">
                <i className="fa fa-eye c-input-icon" aria-hidden="true"></i>
                <input  id="password" className='c-input' type="password" {...register("password",{ required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ })}/>
                </div>
                <div className='c-regasoc-button'><button  type="submit" className='c-regasoc-button__blue'>Register</button></div>
            </form>
        </div>
  )
}

export default RegUserComponent