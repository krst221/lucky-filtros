import { useNavigate } from "react-router-dom";
import React from 'react'
import './ButtonXComponent.scss'

const BottonXCompoment = () => {
const navigate = useNavigate();
  return (
    <div>
       <button className="c-button-X" onClick={() => navigate("/Election")}><i class="fa fa-times" aria-hidden="true"></i></button>
    </div>
  )
}

export default BottonXCompoment