import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormNavComponent from '../../Components/FormNavComponent/FormNavComponent';
import "./BFormPage.scss"

const BFormPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div> <FormNavComponent></FormNavComponent></div> */}
      <div className='form-adoptB'>
        <h1>Formulario adopcion</h1>
        <h3>Sobre las mascotas</h3>
        <input type="text" placeholder="¿Cuáles?" {...register("Piso,casa,chalet", {required: true})} />
        <input type="text" placeholder="¿Se lleva bien con otros animales?" {...register("Piso,casa,chalet", {required: true})} />
      
        <p>¿Porqué has elegido adoptar?</p>
        <input type="text" placeholder="" {...register("¿Porqué has elegido adoptar?", {required: true, maxLength: 80})} />
      
      
        <p>¿Conoces las necesidades del animal?</p>
        <input type="text" placeholder="" {...register("¿Conoces las necesidades del animal?", {required: true, maxLength: 80})} />
      
      
        <p>¿Conoces sus gastos?</p>
        <input type="text" placeholder="" {...register("¿Conoces sus gastos?", {required: true, maxLength: 80})} />
      
    
        <p>¿Conoces su alimentación?</p>
        <input type="text" placeholder="" {...register("¿Conoces su alimentación?", {required: true, maxLength: 80})} />
      </div>
    
    <div className='botton'>
       <button className="c-button-siguiente" onClick={() => navigate("/CFormPage")}>Continuar</button>
    </div>
  </form>
   
  )
}

export default BFormPage