import React from 'react';
import '../styles/Sobre.css' 
import aboutImg from '../assets/foto-CampusParty.jpeg'

const AboutImage = () => {
  return (
    <div className="about__image-container">
      <img src= {aboutImg} alt="Vitor Martins" className="about__image" />
    </div>
  );
};

export default AboutImage;