import "./FilterPage.scss"
import React from 'react'
import { useEffect,useState } from 'react'


const FilterPage = () => {

let perro = false;
let gato = false;
let pajaro = false;
let macho = false;
let hembra = false;
let pequeño = false;
let grande = false;
let mediano = false;

const dogFunc = () => {perro = !perro}
const catFunc = () => gato = !gato;
const birdFunc = () => pajaro = !pajaro;
const machoFunc = () => {macho = !macho ;  hembra = false}
const hembraFunc = () => {hembra = !hembra ; macho = false}
const pequeFunc = () =>{ pequeño = !pequeño ;  mediano = false ; grande = false}
const medianoFunc = () =>{mediano = !mediano ;  pequeño = false ; grande = false}
const grandeFunc = () => {grande = !grande ; mediano = false ; pequeño = false}
const cons = () => {console.log(macho); console.log(hembra)}
const species = []
const sex = ""
const size = ""



const filtroFunc = () => {
if(perro){
  species.push("perro")
}
if(gato){
  species.push("gato")
}
if(pajaro){
  species.push("pajaro")
}
if(macho){
  sex = "macho"
}else if(hembra){
  sex = "hembra "
}
if(pequeño){
  size = "pequeño"
}else if(mediano){
  size = "mediano"
}else if(grande){
  size = "grande"
}
}

 
  return (
    <div className="p-filter-container">
      <div className="p-filter-holder">
            <button onClick={() =>{filtroFunc()}}>filtro</button>
            <button onClick={() => {dogFunc()}}>perro</button>
            <br></br>
            <button onClick={() => {catFunc()}}>gato</button>
            <br></br>
            <button onClick={() => {birdFunc()}}>pajaro</button>
            <br></br>
            <button onClick={() => {cons()}}>perest</button>
            <br></br>
            <button onClick={() => {machoFunc()}}>macho</button>
              <br></br>
            <button onClick={() => {hembraFunc()}}>hembra</button>
            <br></br>
            <button onClick={() => {pequeFunc()}}>pequeño</button>
            <br></br>
            <button onClick={() => {medianoFunc()}}>mediano</button>
            <br></br>
            <button onClick={() => {grandeFunc()}}>grande</button>
            <br></br>  
      </div>
    </div>
  
  )
}

export default FilterPage