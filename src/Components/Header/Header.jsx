import React from 'react'
import { useRef } from 'react'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setPage } from '../../redux/actions/movies'
import { fetchSearch } from '../../redux/actions/search'

const Header = () => {

  const searchInput = useRef()

  const dispatch = useDispatch()

  let searchQuery = ''
  const handleChange = () => {
    searchQuery = searchInput.current.value.split(' ').join('%20')
  }

  const handleClick = () => {
    dispatch(fetchSearch(1, searchQuery))
  }

  return (
    <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo" onClick={() => dispatch(setPage(1))}>
              <Link to='/' onClick={() => searchInput.current.value = ''}>React Movie</Link>
            </div>
            <div className="header__search">
              <input type="text" placeholder="Axtar..." ref={searchInput} onChange={() => handleChange()}/>
              <Link to='/search'> <button onClick={() => handleClick()}><FontAwesomeIcon icon={faMagnifyingGlass} /></button> </Link>
            </div>
            <div className="header__links">

            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
