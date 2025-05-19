import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/Header.css"

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='header__title--link'>
                <p>Vitor</p><img className='header__title--img' src="/Vitor_logo.png" alt="Logo Vitor" />
            </Link>
            <nav className="header__nav">
                <ul className='header__list'>
                    <li className="header__item">
                        <NavLink to='/' className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
                            Home
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink to='/sobre' className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
                            Sobre
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink to='/skills' className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
                            Skills
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink to='/educacao' className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
                            Educação
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink to='/projetos' className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
                            Projetos
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink to='/experiencias' className={({ isActive }) => isActive ? "header__link active" : "header__link"}>
                            Experiências
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Header
