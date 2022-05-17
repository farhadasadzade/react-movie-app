import React, {useEffect, useState} from 'react'
import { useRef } from 'react'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTv } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../redux/actions/movies'
import { fetchSearch } from '../../redux/actions/search'

const Header = () => {

  const [name, setName] = useState('')
  const [searchQuery,setSearchQuery] = useState('')

  const searchInput = useRef()
  const searchMobileInput = useRef()
  const cartBtn = useRef()

  const dispatch = useDispatch()

  const totalFilms = useSelector(({watchList}) => watchList.totalFilms)

  const handleChange = () => {
    setSearchQuery(searchInput.current.value.split(' ').join('%20'))
  }

  const handleMobileChange = () => {
    setSearchQuery(searchMobileInput.current.value.split(' ').join('%20'))
  }

  const handleClick = () => {
    dispatch(fetchSearch(1, searchQuery))
  }
  
  useEffect(() => {
    setName('shake')
    setTimeout(() => {
      setName('')
    }, 500)
  },[totalFilms]) 

  return (
    <div className='header__parent'>
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
              <Link to='/watchlist'> <button className={name} ref={cartBtn}> <FontAwesomeIcon icon={faTv}/> {totalFilms > 0 && <span>{totalFilms}</span>}</button> </Link>
            </div>
          </div>
        </div>
    </header>
    <div className="header__mobile">
      <div className="header__mobile__search">
              <input type="text" placeholder="Axtar..." ref={searchMobileInput} onChange={() => handleMobileChange()}/>
              <Link to='/search'> <button onClick={() => handleClick()}><FontAwesomeIcon icon={faMagnifyingGlass} /></button> </Link>
            </div>
      </div>
    </div>
  )
}

export default Header
