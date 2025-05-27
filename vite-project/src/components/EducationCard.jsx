import React from 'react'
import '../styles/Education.css'

const EducationCard = ({ logo, title, institution, period, status }) => {
    return (
        <div className='education-card'>
            <div className="education-image-box">
                <img src={logo} alt="Logo da instituição" className="education-logo" />
            </div>
            <div className="education-info">
                <h3 className="educationCard-title">{title}</h3>
                <br />
                <p className="education-institution">{institution}</p>
                <p className="education-period">
                    {period} <span className="education-status">| {status}</span>
                </p>
            </div>


        </div>
    )
}

export default EducationCard
