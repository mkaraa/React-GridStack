import React, { useCallback } from 'react'
import '../styles/navigationbar.scss'

export const NavigationBar = () => {
  return (
    <>
      <img className='img-size' src={require('./img/logo.png')} alt='logo' />
      <a href='/Dashboard'>
        <div className='img-container'>
          <img
            className='menu-img-size'
            src={require('./img/dashboardMenuIcon.png')}
            alt='logo'
          />
          <span class='k-icon k-i-arrow-chevron-right sign'></span>
        </div>
      </a>
    </>
  )
}
