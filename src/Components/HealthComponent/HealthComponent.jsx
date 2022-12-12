import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./HealthComponent.scss"

const HealthComponent = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState({})
  let vacunado = 'Si'
  let desparasitado = 'Si'
  let sano = 'Si'
  let esterilizado = 'Si'
  let identicado = 'Si'
  let microchi = 'Si'
  

  useEffect(() => {
    const getPetById = async () =>{
      const {data} = await axios.get(`http://localhost:8000/pets/${id}`)
      console.log(data.pet)
      setPet(data.pet);            
    };
    getPetById();
    },[]);
    console.log(pet.animalProtectors)
    pet.vaccinated ? vacunado = 'Si' : vacunado = 'No'
    pet.dewormed ? desparasitado = 'Si' : desparasitado = 'No'
    pet.healthy ? sano = 'Si' : sano = 'No'
    pet.sterilized ? esterilizado = 'Si' : esterilizado = 'No'
    pet.identified ? identicado = 'Si' : identicado = 'No'
    pet.microchip ? microchi = 'Si' : microchi = 'No'
  return (
    <div className='c-health-container'>
      <div className='c-health-holder'>
        <div className='c-heath-patita'>
        <div className='c-heath-patita__img'><span>Vacunado</span></div><p>{vacunado}</p>
        </div>
        <div className='c-heath-patita'>
        <div className='c-heath-patita__img'><span>Desparasitado</span></div><p>{desparasitado}</p>
        </div>
        <div className='c-heath-patita'>
        <div className='c-heath-patita__img'><span>Sano</span></div><p>{sano}</p>
        </div>
        <div className='c-heath-patita'>
        <div className='c-heath-patita__img'><span>Esterilizado</span></div><p>{esterilizado}</p>
        </div> 
        <div className='c-heath-patita'>
        <div className='c-heath-patita__img'><span>Identificado</span></div><p>{identicado}</p>
        </div>
        <div className='c-heath-patita'>
        <div className='c-heath-patita__img'><span>Microchip</span></div><p>{microchi}</p>
        </div> 
        <div className='c-health-box'>
            <h6>Tienes que saber</h6>
            <p>{pet.personality}</p>
        </div>
      </div>
          
    </div>
  )
}

export default HealthComponent