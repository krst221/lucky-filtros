import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormNavComponent from '../../Components/FormNavComponent/FormNavComponent';
import './CFormPage.scss'


const CFormPage = () => {
  const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <div className='p-cform-comtainer'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='p-cform-holder'>
       {/* <FormNavComponent></FormNavComponent> */}
      <h2>Familia y hogar</h2>
      <h3>¿Dónde vives?</h3>
      <input type="text" placeholder="Piso,casa,chalet..." {...register("Piso,casa,chalet", {required: true})} />
      <div className='p-cform-checks'>
        <div className='p-cform-checks__title'>
          <p>¿Vives de alquiler?</p>
        </div>
        <div className='p-cform-checks__check'>
          <span><p>Si</p><input {...register("Si", { required: true })} type="radio" value="Yes" /></span>
           <span><p>No</p><input {...register("No", { required: true })} type="radio" value="No" /></span>
        </div>
      </div>
      <div className='p-cform-checks'>
      <div className='p-cform-checks__title'>
      <p>¿Tu casero permite animales?</p>
      </div>
      <div className='p-cform-checks__check'>
      <span><p>Si</p><input {...register("Si", { required: true })} type="radio" value="Yes" /></span>
      <span><p>No</p><input {...register("No", { required: true })} type="radio" value="No" /></span>
      </div>
      </div>
      <div className='p-cform-checks'>
      <div className='p-cform-checks__title'>
      <p>¿Crees que podrías mudarte pronto?</p>
      </div>
      <div className='p-cform-checks__check'>
      <span><p>Si</p><input {...register("Si", { required: true })} type="radio" value="Yes" /></span>
      <span><p>No</p><input {...register("No", { required: true })} type="radio" value="No" /></span>
      </div>
      </div>
      <div className='p-cform-checks'>
      <div className='p-cform-checks__title'>
      <p>¿Tiene jardín?</p>
      </div>
      <div className='p-cform-checks__check'>
      <span><p>Si</p><input {...register("Si", { required: true })} type="radio" value="Yes" /></span>
      <span><p>No</p><input {...register("No", { required: true })} type="radio" value="No" /></span>
      </div>
      </div>
      <div className='p-cform-checks'>
      <div className='p-cform-checks__title'>
      <p>¿Vives con otras personas?</p>
      </div>
      <div className='p-cform-checks__check'>
      <span><p>Si</p><input {...register("Si", { required: true })} type="radio" value="Yes" /></span>
      <span><p>No</p><input {...register("No", { required: true })} type="radio" value="No" /></span>
      </div>
      </div>
      <div className='p-cform-checks'>
      <div className='p-cform-checks__title'>
      <p>¿Tu casero permite animales?</p>
      </div>
      <div className='p-cform-checks__check'>
      <span><p>Si</p><input {...register("Si", { required: true })} type="radio" value="Yes" /></span>
      <span><p>No</p><input {...register("No", { required: true })} type="radio" value="No" /></span>
      </div>
      </div>
      <div className='p-cform-checks'>
      <div className='p-cform-checks__title'>
      <p>¿Estan todos de acuerdo con la adopción?</p>
      </div>
      <div className='p-cform-checks__check'>
      <span><p>Si</p><input {...register("Si", { required: true })} type="radio" value="Yes" /></span>
      <span><p>No</p><input {...register("No", { required: true })} type="radio" value="No" /></span>
      </div>
      </div>
      <div className='p-cform-checks'>
      <div className='p-cform-checks__title'>
      <p>¿Estan todos de acuerdo con la adopción?</p>
      </div>
      <div className='p-cform-checks__check'>
      <span><p>Si</p><input {...register("Si", { required: true })} type="radio" value="Yes" /></span>
      <span><p>No</p><input {...register("No", { required: true })} type="radio" value="No" /></span>
      </div>
      </div>
      <div className='p-cform-checks'>
      <div className='p-cform-checks__title'>
      <p>¿Estas de acuerdo con que visitemos tu casa?</p>
      </div>
      <div className='p-cform-checks__check'>
      <span><p>Si</p><input {...register("Si", { required: true })} type="radio" value="Yes" /></span>
      <span><p>No</p><input {...register("No", { required: true })} type="radio" value="No" /></span>
      </div>
      </div>
      <div>
       <button className="p-petdetail-button__red" onClick={() => navigate("/CFormPage")}>ENVIAR</button>
    </div>
    </div>
    </form>
  </div>
  )

}

export default CFormPage
