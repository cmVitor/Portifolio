import React from 'react'

const ProjectCard = ({projectImg, projectName, projectLink}) => {
    return (
        <a href={projectLink} className='project-card'>
            <img className='project-img' src={projectImg} alt="imagem do projeto" />
            <div  className="project-description">
                <h2>{projectName}</h2>
                <p>Veja o Repositório <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
            </div>
            

        </a>
    )
}

export default ProjectCard
