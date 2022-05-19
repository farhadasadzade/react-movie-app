import React, { useState } from 'react'
import genres from '../../genres.json'

const PlaylistItem = ({id, title, imgSrc, genre_ids}) => {

  const [watched, setWatched] = useState(false)

  const movieTitle = `watch__film-title ${watched && 'overline'}`
  const movieImg = `${watched && 'watched'}`

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
        <div className='righta'>
          {!watched && <button onClick={() => setWatched(true)}>İzlədim</button>}
        </div>
    </li>
  )
}

export default PlaylistItem
