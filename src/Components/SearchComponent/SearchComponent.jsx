import React from 'react'
import "./SearchComponent.scss"

const SearchComponent = ({setSearchPj}) => { // aqui el nombre 2º
    const handleFind = (event) => {
        setSearchPj(event.target.value.toLowerCase()) // nombre de la funcion 3º
    }
  return (

    <div className="c-search-container">
        <div className="c-search-holder">
          <input className="searchTerm" onChange={handleFind} type="text" placeholder="Buscar"/>
          <i class="fa fa-search"></i>
        </div>
    </div>

  )
}

export default SearchComponent