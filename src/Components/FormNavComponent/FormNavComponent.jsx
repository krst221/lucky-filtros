
import React from 'react'
import { NavLink } from "react-router-dom"


const FormNavComponent = () => {
  return (
    <div className="c-navform-container">
      <ul>
        <li>
          <NavLink to='/AdoptFormPage' activeclassname={'active'}><button className="c-navform-a">aaaaa</button></NavLink>
        </li>
        <li>
          <NavLink to='/BFormPage' activeclassname={'active'}><button className="c-navform-b">bbbbbb</button></NavLink>
        </li>
        <li>
          <NavLink to='/CFormPage' activeclassname={'active'}><button className="c-navform-c">ccccc</button></NavLink>
        </li>
      </ul>
    </div>
  )
}
export default FormNavComponent