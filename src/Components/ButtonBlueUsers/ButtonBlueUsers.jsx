import './ButtonBlueUsers.scss';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ButtonBlueUsers = ({title,img,route}) => {
    const navigate = useNavigate();
  return (
    <div>

       <button className="c-button-users" onClick={() => navigate(`/${route}`)}>
       <div><img src={img} alt=""></img> {title}</div><div> <i className="fa fa-chevron-right" aria-hidden="true"></i></div> </button>
    </div>
  )
}

export default ButtonBlueUsers