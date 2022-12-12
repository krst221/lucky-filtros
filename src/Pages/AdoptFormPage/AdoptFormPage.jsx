import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormNavComponent from '../../Components/FormNavComponent/FormNavComponent'
import "./AdoptFormPage.scss"

const AdoptFormPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (

      <div className='formularioCompleto'>
      <form  onSubmit={handleSubmit(onSubmit)}>
      <div className='form-adopt'>
      <div className="head-form">
        <h1>Formulario adopcion</h1>
      </div>
      
      <div className='datos'>
        <h3>Tus datos</h3>
        <input type="text" placeholder="Nombre y apellidos" {...register("First name", {required: true, maxLength: 80})} />
        
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        
        <input type="tel" placeholder="Teléfono" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
        
        <input type="DNI" placeholder="DNI" {...register("First name", {required: true})} />
             
        
        <h3>Dirección</h3>
        <input type="text" placeholder="Calle,número,piso" {...register("First name", {required: true})} />
        <input type="text" placeholder="Código postal" {...register("First name", {required: true})} />
        <input type="text" placeholder="Ciudad" {...register("First name", {required: true})} />
        </div>
        </div>
       <div className='acepto'> 
       <input type="Checkbox" placeholder="..." {...register("First name", {required: true})} />
       <span>Acepto los términos y condiciones de la adopción</span>
       </div>
       <input type="submit" />
        <div className='botton' >
       <button className="c-button-siguiente" onClick={() => navigate("/BFormPage")}>Continuar</button>
       </div>
      
    {/* <FormNavComponent></FormNavComponent> */}
    </form>
    </div>
  )
}

export default AdoptFormPage