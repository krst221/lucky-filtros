import "./AdoptionStatusPage.scss"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import SimpleBar from "simplebar-react";
import { getCookieUtil } from "../../utils/getCookieUtil";

const AdoptstatusionStatusPage = () => {
  const [pets, setPets] = useState([]);

  const stringUser = getCookieUtil('user');
  console.log(stringUser)

  const user = JSON.parse(stringUser ? stringUser : '{}');
  console.log(user?._id)




  useEffect(() => {
    const getData = async () => {
      //console.log(`"http://localhost:8000/users/user/${user._id}"`);
      //const { data } = await axios.get("http://localhost:8000/users/user/${user._id}");
      const { data } = await axios.get("http://localhost:8000/pets")
      setPets(data);
      console.log(data);
    };
    getData();
  }, []);
  return (
    <>
     
      <div className="p-adoptstatus-container">
     
        <div className="p-adoptstatus-holder">
          <div className="p-adoptstatus-menu">
          
           
            <div className="p-adoptstatus-menu__filter">
              <h6>Animales adoptados</h6>
             
            </div>
          </div>
          <SimpleBar className="c-adoptstatus-gallery-holder">
            <div className="c-adoptstatus-gallery-holder__box">
              {pets.map((item, index) => {
               
                return (
                 
                 <>
                 {(item._id == user.pets[0] || item._id == user.pets[1] || item._id == user.pets[2]
                  || item._id == user.pets[3]  || item._id == user.pets[4] ) &&
                 
                  <div className="c-adoptstatus-gallery-card">
                    <Link to={`/AdoptPage/${item._id}`}>
                      <div className="c-adoptstatus-gallery-card__img">
                        <img
                          className="image"
                          src={item.photo}
                          alt={item.name}
                        />
                        <div className="c-adoptstatus-gallery-card__text">
                          <h4>{item?.name}</h4>
                          
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
    </>
  )
}

export default AdoptstatusionStatusPage
