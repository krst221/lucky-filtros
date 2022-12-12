import React from 'react'
import './NewsGalleyHomeComponent.scss'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const NewsGalleyHomeComponent = () => {
  return (
    <div className='c-container-gallery' >
        <SimpleBar className='c-gallery-holder'>
          <div className='c-gallery-holder__holder'>
          <div className='container-art'>
                <img src="https://res.cloudinary.com/dp85dl3cl/image/upload/v1669281869/chinchilla_nkqwzz.png" alt="1"></img>
                <p>10 curiosidades sobre las chinchillas</p>
            </div>
            <div className='container-art' >
                <img src="https://res.cloudinary.com/dp85dl3cl/image/upload/v1669281869/Iguana_zfbcny.png" alt="2"></img>
                <p>¿Sabes que comen las iguanas?</p>
            </div>
            <div className='container-art'>
                <img src="https://res.cloudinary.com/dp85dl3cl/image/upload/v1669281869/perrete_iw7b9p.png" alt="3"></img>
                <p>10 Lugares para visitar con tu perro en Madrid</p>
            </div>
          </div>
            
        </SimpleBar>
        
        
    </div>
  )
}

export default NewsGalleyHomeComponent