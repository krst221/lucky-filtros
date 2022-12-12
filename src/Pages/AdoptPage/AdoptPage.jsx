import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import SimpleBar from "simplebar-react";

import "./AdoptPage.scss";
import ButtonBlueUsers from "../../Components/ButtonBlueUsers/ButtonBlueUsers";

const AdoptPage = () => {

  const speciesList = ["perro", "gato", "conejo", "cobaya", "pequeño", "huron", "pez", "reptil", "anfibio", "insecto", "pajaro"];
  const sexList = ["macho", "hembra"];
  const sizeList = ["pequeño", "mediano", "grande"];
  
  const [filtro, setFiltro] = useState(false);
  const [species, setSpecies] = useState(speciesList)
  const [sex, setSex] = useState(sexList)
  const [size, setSize] = useState(sizeList)
  
  const [allPets, setPets] = useState([]);
  const [searchPet, setSearchPet] = useState([]);
  
  const resetFil = () => {
    setSpecies(speciesList);
    setSex(sexList);
    setSize(sizeList);
  }
  const filFunc = () => setFiltro(!filtro);

  const filterPets =  allPets.filter((pets) =>
      (sex.includes(pets.sex)) &&
      (size.includes(pets.size)) &&
      (species.includes(pets.species)) && 
      (pets.name.toLowerCase().includes(searchPet))
      
  ); 
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:8000/pets");
      setPets(data);
    };
    getData();
  }, []);

  return (
    <>
      {!filtro &&
      <div className="p-adopt-container">
        <SearchComponent setSearchPj={setSearchPet}></SearchComponent>
        <div className="p-adopt-holder">
          <div className="p-adopt-menu">
            <div className="p-adopt-pets">
              <a href="/">
                Mis mascotas
                <img src="./assets/icons/mS.png" alt="more" />
              </a>
              <p>Accede al perfil de tus mascotas</p>
              <img src="./assets/images/animals.png" alt="carousel" />
            </div>
            <ButtonBlueUsers
              title={"Estado de la adopción"}
              route={"AdoptionStatusPage"}
              img={"./assets/icons/empty.png"}
            ></ButtonBlueUsers>
            <div className="p-adopt-menu__filter">
              <h6>Animales en adopcion</h6>
              <button
                className="p-button-filter"
                onClick={() =>{filFunc()}}
              ></button>
            </div>
          </div>
          <SimpleBar className="c-adopt-gallery-holder">
            <div className="c-adopt-gallery-holder__box">
              {filterPets.map((item, index) => {
               
                return (
                 <>
                 {item.condition === "disponible" &&
                  <div className="c-adopt-gallery-card">
                    <Link to={`/AdoptPage/${item._id}`}>
                      <div className="c-adopt-gallery-card__img">
                        <img
                          className="image"
                          src={item.photo}
                          alt={item.name}
                        />
                        <div className="c-adopt-gallery-card__text">
                          <h4>{item?.name}</h4>
                          <h6>{item?.condition}</h6>
                        </div>
                      </div>
                      <button>
                        <img src="./assets/icons/favo.png" alt="favorites" />
                      </button>
                  
                    </Link>
                  </div>
                 }
                  </>
                );
              })}
            </div>
          </SimpleBar>
        </div>

        <NavbarComponent />
        </div>
        }
        {filtro &&
        
        <div className="p-adopt-filter-close">
        <button className="o-c-button"
            onClick={() => {
              filFunc();
            }}
          >
          
          <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <div className="p-adopt-filter-container">
          <div className="p-adopt-filter-holder">
          <h2>Filtros</h2>
          <div className="p-adopt-filter-button">
          
          <button className={`${species === speciesList[0] ? 'p-adopt-filter-button__dog__s' : 'p-adopt-filter-button__dog'}`} onClick={() => setSpecies(speciesList[0])}>Perro</button>
          
          <button className={`${species === speciesList[1] ? 'p-adopt-filter-button__cat__s' : 'p-adopt-filter-button__cat'}`} onClick={() => setSpecies(speciesList[1])}>Gato</button>
          
          <button className={`${species === speciesList[2] ? 'p-adopt-filter-button__rabbit__s' : 'p-adopt-filter-button__rabbit'}`} onClick={() => setSpecies(speciesList[2])} >Conejo</button>

          <button className={`${species === speciesList[3] ? 'p-adopt-filter-button__hamster__s' : 'p-adopt-filter-button__hamster'}`} onClick={() => setSpecies(speciesList[3])}>Cobaya</button>

          <button className={`${species === speciesList[4] ? 'p-adopt-filter-button__coati__s' : 'p-adopt-filter-button__coati'}`} onClick={() => setSpecies(speciesList[4])} >Pequeño mamifero</button>

          <button className={`${species === speciesList[5] ? 'p-adopt-filter-button__ferret__s' : 'p-adopt-filter-button__ferret'}`} onClick={() => setSpecies(speciesList[5])} >Hurón</button>

          <button className={`${species === speciesList[6] ? 'p-adopt-filter-button__fish__s' : 'p-adopt-filter-button__fish'}`} onClick={() => setSpecies(speciesList[6])} >Pez</button>

          <button className={`${species === speciesList[7] ? 'p-adopt-filter-button__snake__s' : 'p-adopt-filter-button__snake'}`} onClick={() => setSpecies(speciesList[7])} >Reptil</button>

          <button className={`${species === speciesList[8] ? 'p-adopt-filter-button__frog__s' : 'p-adopt-filter-button__frog'}`} onClick={() => setSpecies(speciesList[8])} >Anfibio</button>

          <button className={`${species === speciesList[9] ? 'p-adopt-filter-button__spider__s' : 'p-adopt-filter-button__spider'}`} onClick={() => setSpecies(speciesList[9])} >Arácnido o Insecto</button>
          
          <button className={`${species === speciesList[10] ? 'p-adopt-filter-button__bird__s' : 'p-adopt-filter-button__bird'}`} onClick={() => setSpecies(speciesList[10])}>Pájaro</button>

          <div className="p-adopt-filter-button-sex">
            
          <button className={`${sex === sexList[0] ? 'p-adopt-filter-button-sex__boy__s' : 'p-adopt-filter-button-sex__boy'}`} onClick={() => setSex(sexList[0])}>Macho</button>
          
          <button className={`${sex === sexList[1] ? 'p-adopt-filter-button-sex__girl__s' : 'p-adopt-filter-button-sex__girl'}`} onClick={() => setSex(sexList[1])}>Hembra</button>

          </div>
          
          <div className="p-adopt-filter-button-size">
        
          <button className={`${size === sizeList[0] ? 'p-adopt-filter-button-size__small__s' : 'p-adopt-filter-button-size__small'}`} onClick={() => setSize(sizeList[0])}>Pequeño</button>
          
          <button className={`${size === sizeList[1] ? 'p-adopt-filter-button-size__mid__s' : 'p-adopt-filter-button-size__mid'}`} onClick={() => setSize(sizeList[1])}>Mediano</button>
          
          <button className={`${size === sizeList[2] ? 'p-adopt-filter-button-size__big__s' : 'p-adopt-filter-button-size__big'}`} onClick={() => setSize(sizeList[2])}>Grande</button>
          
          </div>
          </div>
          <div className="p-adopt-filter-button__apply">
          <button onClick={() => resetFil()}>Reiniciar Filtros</button>
          <button onClick={() => filFunc()}>Aplicar</button>
          </div>
          </div>
          </div>
          </div>
        }
    </>
  );
};

export default AdoptPage;
