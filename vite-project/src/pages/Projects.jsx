import React from 'react'
import '../styles/Projects.css'
import ProjectCard from '../components/ProjectCard'
import project1Img from '../assets/project1.png'
import project2Img from '../assets/project2.png'
import project3Img from '../assets/project3.png'
import project4Img from '../assets/project4.png'
import project5Img from '../assets/project5.png'
import project6Img from '../assets/project6.png'
import project7Img from '../assets/project7.png'

const Projects = () => {
  return (
    <section className='projects-section'>
        <h2 className='projects-title'> <i class="fa-solid fa-laptop-code"></i> Meus <span className='highlight'>Projetos</span></h2>
        <p className='projects-subtitle'>Aqui estão alguns dos projetos que desenvolvi. Clique para ver o repositório no GitHub.</p>

        <ProjectCard 
          projectName="Landing Page"
          projectImg={project2Img}
          projectLink="https://github.com/cmVitor/Portifolio"
        />
        <ProjectCard 
          projectName="Portifolio Website"
          projectImg={project1Img}
          projectLink="https://github.com/cmVitor/Portifolio"
        />
        <ProjectCard 
          projectName="Replica Spotify"
          projectImg={project3Img}
          projectLink="https://github.com/cmVitor/Projeto-Spotify"
        />
        <ProjectCard 
          projectName="Tela de Login"
          projectImg={project4Img}
          projectLink="https://github.com/cmVitor/LandingPage"
        />
        <ProjectCard 
          projectName="API restful E-commerce"
          projectImg={project5Img}
          projectLink="https://github.com/cmVitor/API-REST-Ecommerce"
        />
        <ProjectCard 
          projectName="Jogo JUJUs Adventure"
          projectImg={project7Img}
          projectLink="https://gd.games/grupo_ux/juju-s-adventure"
        />
    
    </section>
  )
}

export default Projects
