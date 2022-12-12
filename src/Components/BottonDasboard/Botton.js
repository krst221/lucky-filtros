
import { useNavigate } from "react-router-dom";
import React from 'react'
import './Botton.scss'

const Botton = ({title}) => {
const navigate = useNavigate();
  return (
    <div>
       <button className="c-button-login" onClick={() => navigate("/")}>{title} </button>
    </div>
  )
}

export default Botton