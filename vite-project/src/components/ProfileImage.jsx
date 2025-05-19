import React from 'react'
import '../styles/Home.css'
import profile from '../assets/foto-vitor.jpg'

const ProfileImage = () => {
  return (
    <div className='home__image'>
      <img src={profile} alt="Vitor Martins Castanheira" />
    </div>
  )
}

export default ProfileImage
