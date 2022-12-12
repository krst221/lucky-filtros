import "./OnboardingPage.scss"
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import onboarding1 from '../../assets/images/onboarding1.png'
import onboarding2 from '../../assets/images/onboarding2.png'
import onboarding3 from '../../assets/images/onboarding3.png'
import ButtonXComponent from '../../Components/ButtonXComponent/ButtonXComponent'



function OnboardingPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  return (
    <div className="o-c-container">

      <div className="o-c-button"><ButtonXComponent></ButtonXComponent></div>
    <div className="o-c-holder">
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item interval={1000}>
      <div className="o-c-card">
        <img
            className="o-c-card__img"
            src={onboarding1}
            alt="First slide"
          />
          <Carousel.Caption>
          <div className="o-c-card__caption">
          <h4>Encuentra todo tipo de servicios que tienes cerca de ti</h4>
          </div>
          </Carousel.Caption>
      </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className="o-c-card">
        <img
          className="o-c-card__img"
          src={onboarding2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className="o-c-card__caption">
          <h4>Adopta desde tu móvil</h4>
          <p>Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p>
        </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="o-c-card">
        <img
            className="o-c-card__img"
            src={onboarding3}
            alt="Third slide"
          />
        <Carousel.Caption>
          <div className="o-c-card__caption">
            <h4>Si eres una asociación sube a tus peludos para darles más difusión</h4>
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>

  );
}

export default OnboardingPage;
