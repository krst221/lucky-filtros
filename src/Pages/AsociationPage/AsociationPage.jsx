import axios from "axios";
import React, { useEffect, useState } from 'react'
import SearchComponent from "../../Components/SearchComponent/SearchComponent";

const AsociationPage = () => {

    const [allProtectors, setProtector] = useState([]);
    const [searchProtector, setSearchProtector] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get("http://localhost:8000/animalProtector/user");
            setProtector(data);
        };
        getData()

    }, []);

    const filterProtectors = allProtectors.filter((protectors) => protectors.name.toLowerCase().includes(searchProtector));
    

    return (

    <div>AsociationPage
        <div>
        <SearchComponent setSearchProtector={setSearchProtector}></SearchComponent>
        </div>

        {filterProtectors.map((item, index) => {
            return (
            <div>
                <div>
                    <img src={item.photo} alt={item.name} />
                    <div>
                        <h4>{item?.name}</h4>
                        <h6>{item?.mail}</h6>
                    </div>
                </div>
                <button><img src='./assets/icons/favo.png' alt='favorites'/></button> 
                
            </div> 
            )
        })} 
    </div>
  )
}

export default AsociationPage;