import React from 'react'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <Link to='/'>React Movie</Link>
            </div>
            <div className="header__search">
              <input type="text" placeholder="Axtar..." />
              <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <div className="header__links">

            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
