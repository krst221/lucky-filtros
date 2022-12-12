import axios from "axios";
import React, { useEffect, useState } from 'react'

const AdoptionStatus = () => {

const [user, setPets] = useState ([]);
  
  useEffect(() => {
      const getData = async () => {
      const {data} = await axios.get("http://localhost:9000/animalProtectors");
      setPets(data);
  
      };
      getData()

  },[]);

  return (
    <div>AdoptionStatus</div>
  )
}

export default AdoptionStatus