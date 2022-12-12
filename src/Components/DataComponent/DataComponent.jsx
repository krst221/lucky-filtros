import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./DataComponent.scss"
const DataComponent = () => {
    const {id} = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState({})
  
  

  useEffect(() => {
    const getPetById = async () =>{
      const {data} = await axios.get(`http://localhost:8000/pets/${id}`)
      console.log(data.pet)
      setPet(data.pet);            
    };
    getPetById();
    },[]);
    console.log(pet.animalProtectors)

  return (
    <div className='c-data-container'>
      <div className='c-data-holder'>
      <div className='c-data-patita'>
        <div className='c-data-patita__img'><span>Especie</span></div><p>{pet.species}</p>
        </div> 
        <div className='c-data-patita'>
        <div className='c-data-patita__img'><span>Cumpleaños</span></div><p>{pet.birthday}</p>
        </div>
        <div className='c-data-patita'>
        <div className='c-data-patita__img'><span>Sexo</span></div><p>{pet.sex}</p>
        </div>
        <div className='c-data-patita'>
        <div className='c-data-patita__img'><span>Tamaño</span></div><p>{pet.size}</p>
        </div>
        <div className='c-data-patita'>
        <div className='c-data-patita__img'><span>Peso</span></div><p>{pet.weigth}</p>
        </div>
            <div className='c-data-box'>
            <h6>Personalidad</h6>
            <p>{pet.record}</p>
           </div>
           <div className='c-data-box2'>
            <h6>Historia</h6>
            <p>{pet.description}</p>
           </div>
                   
    </div>
    </div>
  )
}

export default DataComponent