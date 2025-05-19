import React from 'react'
import '../styles/Sobre.css'
import AboutImage from '../components/AboutImage'

const Sobre = () => {
  return (
    <section className="about section">
      <div className="about__title">
        <h2><i className="fas fa-user"></i> Sobre <span>Mim</span></h2>
      </div>

      <div className="about__container">
        <AboutImage />

        <div className="about__content">
          <h3>Quem é Vitor?</h3>
          <p className="about__subtitle">Full Stack Developer</p>

          <p>
            Sou Desenvolvedor, focado no aprendizado contínuo e trabalho em equipe. Graduando em Engenharia de Software pela UFG, Tenho como hábito desenvolver projetos pessoais que me desafiam e contribuem para meu 
            aprimoramento constante, sempre buscando evoluir como profissional e entregar soluções eficientes e bem pensadas.
          </p>
          <br/>
          <p>
            Tenho uma forte dedicação ao estudo de novas tecnologias, sempre buscando me atualizar com as tendências do mercado de desenvolvimento
            de software. Estou constantemente explorando novas ferramentas, linguagens e frameworks, com o objetivo de ampliar minha base de 
            conhecimento e estar preparado para enfrentar desafios variados com soluções modernas e eficazes.
          </p>

          <br/>

          <p><strong>Email:</strong> <span className="about__highlight">vitor.martins.castanheira@gmail.com</span></p>
          <p><strong>Localização:</strong> <span className="about__highlight">Goiânia, Brasil</span></p>

          <button className='about__button'>CV <i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
        </div>
      </div>
    </section>
  )
}

export default Sobre
