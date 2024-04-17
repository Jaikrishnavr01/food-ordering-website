import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-Download' id='app-download'>
      <p>For Better Experience Download  <br/>JK-Food App</p>

      <div className="app-Download-platforms">
        <img src={assets.play_store} alt="playstore-logo" />
        <img src={assets.app_store} alt="appstore-logo" />
      </div>
    </div>
  )
}

export default AppDownload