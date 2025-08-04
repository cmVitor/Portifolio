import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import ProfileImage from '../components/ProfileImage'
import Typewriter from '../components/Typewriter'

const Home = () => {
    return (
        <section className='home'>
            <div className="home__content">
                <h2 className='home__hello'>Eu sou,</h2>
                <h1 className='home__name'> Vitor M. Castanheira</h1>
                <p className="home__role">Sou: <p><Typewriter texts={['React Developer', 'Estágiario em TI', 'UI/UX', 'Web Developer', 'Software Engineering']}/></p> </p>
                <Link to="/sobre" className="home__button"><span>Sobre mim </span><i class="fa fa-external-link" aria-hidden="true"></i></Link>
                <div className="home__icons">
                    <a href="https://www.linkedin.com/in/vitor-martins-castanheira-749b1024a/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.github.com/cmvitor"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/vitor_cma/"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <ProfileImage/>
        </section>
    )
}

export default Home
