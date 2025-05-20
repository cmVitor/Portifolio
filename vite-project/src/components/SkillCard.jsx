import React from 'react';
import '../styles/Skills.css'; 

const SkillCard = ({ name, icon }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} className="skill-icon" />
      <p>{name}</p>
    </div>
  );
};

export default SkillCard;