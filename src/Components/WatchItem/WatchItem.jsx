import React, { useState } from 'react'
import genres from '../../genres.json'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { deleteMovie } from '../../redux/actions/watchlist'
import { useDispatch } from 'react-redux'

const WatchItem = ({id, title, imgSrc, genre_ids}) => {

  const [watched, setWatched] = useState(false)

  const dispatch = useDispatch()

  const movieTitle = `watch__film-title ${watched && 'overline'}`
  const movieImg = `${watched && 'watched'}`

  const handleClick = () => {
    dispatch(deleteMovie(id))
  }

  return (
    <li className="watch__item">
        <div className='left'>
          <div className='img-over'>
            <div className={movieImg}></div>
            <img src={imgSrc} alt="film" />
          </div>
        <div className="watch__item-info">
            <h2 className={movieTitle}>{title}</h2>
            <p className="watch__film-genre">
                {// eslint-disable-next-line
                  genres.genres.map((genre) => {
                    if(genre.id === genre_ids[0]) {
                        return genre.name
                    }
                })}
            </p>
        </div>
        </div>
        <div className='right'>
          {!watched && <button onClick={() => setWatched(true)}>İzlə</button>}
          <button onClick={() => handleClick()}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
        
    </li>
  )
}

export default WatchItem
