import axios from 'axios';
import "./PetDetailPage.scss"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import DataComponent from '../../Components/DataComponent/DataComponent';
import HealthComponent from '../../Components/HealthComponent/HealthComponent';
import AdoptionComponent from '../../Components/AdoptionComponent/AdoptionComponent';
import { getCookieUtil } from "../../utils/getCookieUtil";
const PetDetailPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(!!getCookieUtil('token'));

  
  const [pet, setPet] = useState({})
  
  const [showDetails, setShowDetails] = useState("datos", "salud", "adopcion");
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

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
    <div>
    <div className='p-petdetail-container'> 
      <div className='p-petdetail-holder'>
        <div className='p-petdetail-image'>
        <img src={pet.photo} alt={pet.name}/>
        <button  className='p-petdetail-image__back' onClick={() => navigate("/AdoptPage")}><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
        
        <div className='p-petdetail-image__card'>
            <div className='p-petdetail-image__text'>
              <h6>{pet.name}</h6>
              <small>{pet.city}</small>
            </div>
            <div className='p-petdetail-image__buttons'>
              <button  className='p-petdetail-image__card__fav' onClick={() => navigate("/AdoptFormPage")}></button>
              <button  className='p-petdetail-image__card__adopt' onClick={() => navigate("/AdoptFormPage")}></button>
            </div>
        </div>
        </div>
        <div className='p-petdetail-bottomhold'>
        <div className="p-petdetail-nav">
            <h4
              className={active ? "p-petdetail-nav__item-active" : "p-petdetail-nav__item"}
              onClick={() => {
                setShowDetails("datos");
                setActive(true);
                setActive2(false);
                setActive3(false);
              }}
            >
              Datos
            </h4>
            <h4
              className={active2 ? "p-petdetail-nav__item-active" : "p-petdetail-nav__item"}
              onClick={() => {
                setShowDetails("salud");
                setActive(false);
                setActive2(true);
                setActive3(false);
              }}
            >
              Salud
            </h4>
            <h4
              className={active3 ? "p-petdetail-nav__item-active" : "p-petdetail-nav__item"}
              onClick={() => {
                setShowDetails("adopcion");
                setActive(false);
                setActive2(false);
                setActive3(true);
              }}
            >
              Adopción
            </h4>
          </div>
          <div>
            {showDetails === "datos" && <DataComponent/>}
            {showDetails === "salud" && <HealthComponent/>}
            {showDetails === "adopcion" && <AdoptionComponent />}
          </div>
          <div className="p-petdetail-button">
            <button className="p-petdetail-button__white" onClick={() => navigate("/DonatePage")}>Apadrinar</button>
            {isLogged &&  <button className="p-petdetail-button__red" onClick={() =>navigate("/AdoptFormPage")}>Adoptar</button> }
          </div>
      </div>
     </div>
    </div>
  </div>
  )
}

export default PetDetailPage
