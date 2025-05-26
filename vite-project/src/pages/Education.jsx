import React from 'react'
import '../styles/Education.css'
import EducationCard from '../components/EducationCard'
import ufgLogo from '../assets/UFG_logo.png'
import ccbeuLogo from '../assets/CCBEU-logo.png'

const Education = () => {
  return (
    <section className='education-section'>
      <h2 className='education-title'><i class="fa-solid fa-user-graduate"></i> Sobre <span className='highlight'>Minha Educação</span> </h2>
      <EducationCard
        logo= {ufgLogo}
        title="Bacharelado em Engenharia de Software"
        institution="Universidade Federal de Goiás - UFG"
        period="2022 - 2026"
        status="Cursando"
      />
      <EducationCard
        logo= {ccbeuLogo}
        title="Curso de Inglês - Certificação nível B2"
        institution="Centro Cultural Brasil Estados Unidos - CCBEU"
        period="2015 - 2021"
        status="Completo"
      />

    </section>
  )
}

export default Education
