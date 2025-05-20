import React from 'react'
import '../styles/Skills.css'
import SkillCard from '../components/SkillCard'
import skillsData from '../data/skills.json' // Importando os dados de habilidades
import { useEffect, useState } from 'react';

const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(skillsData);
    }, []);

    return (
        <section className='skills-section'>
            <h2><i class="fa-solid fa-laptop-code"></i> Skills & <span className="highlight">Habilidades</span></h2>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} icon={skill.icon} />
                ))}
            </div>
            <div className="skills-footer">
                <span className="learning-icon"><i class="fa-solid fa-book"> </i></span>
                <span className="learning-text">Sempre explorando novas tecnologias e buscando aprender mais!</span>
            </div>
        </section>
    )
}

export default Skills
