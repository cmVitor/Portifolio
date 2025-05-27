import React from 'react'
import '../styles/Experience.css'
import EducationCard from '../components/EducationCard'
import seinfraLogo from '../assets/Seinfra-logo.png'
import freelasLogo from '../assets/99freelas-logo.png'

const Experience = () => {
    return (
        <section className='experience-section'>
            <h2 className='experience-title'> <i class="fa-solid fa-briefcase"></i>
                 <span> Minhas</span> 
                <span className='highlight'> Experiências</span>
            </h2>

            <EducationCard
                logo= {seinfraLogo}
                title="Estagiário de TI"
                institution="Secretaria de Estado da Infraestrutura - SEINFRA"
                period="Maio de 2025"
                status="Atualmente"
            />
            <EducationCard
                logo= {freelasLogo}
                title="Dev Frontend - Freelancer"
                institution="99Freelas"
                period=""
                status="Desde 2022"
            />
        </section>
    )
}

export default Experience
