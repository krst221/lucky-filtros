import React,{ useState, useEffect, createContext} from "react";
import axios from "axios";
export const PetContext = createContext();

const BASEURL ="http://localhost:8000/pets";

export const PetContextProvider =({ children }) => {

    const [pets, setPets] = useState([]);
    const [species] =  useState;
    const [sex] =  useState;
    const [size] =  useState;
    const [hola] =  useState;
    

    

    useEffect(()=> {

        const getPets = async () => {
            const petsApi= await axios.get(BASEURL);
            setPets(petsApi.data)
        };
        getPets();
    
    },[]);

    
    return (
        <PetContext.Provider value={{pets,species,sex,size,hola}}>
      {children}
       </PetContext.Provider>
    )    
}