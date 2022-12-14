import React from 'react'
import ipamLogo from '../../assets/ipam_logo.png'
import './header.scss'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={ipamLogo} />
        <h3>Instituto de Pesquisa Ambiental da Amazônia</h3>
      </div>
    </header>
  )
}

export default Header