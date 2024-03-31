import React from 'react'
import construction_icon from '../../assets/constrution01.gif'
import './SiteUnderContruction.css'
const SiteUnderContruction = () => {
  return (
    <div className='siteundercontruction'>
      <img src={construction_icon} alt="constrution-logo" />
      <p>Jaikrishna is working on this website please be patient </p>
    </div>
  )
}

export default SiteUnderContruction
