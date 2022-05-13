import React from 'react'
import './index.css'

import genres from '../../genres.json'

const MovieBlock = ({vote_average, title, poster_path, genre_ids}) => {

    const imageSrc = `https://image.tmdb.org/t/p/original/${poster_path}`
return (
    <div className="main__film">
        <img src={imageSrc} alt="poster" />
        <div className="main__film-over"></div>
        <div className="main__film-info">
            <div className="main__film-genre">
                  {// eslint-disable-next-line
                  genres.genres.map((genre) => {
                      if(genre.id === genre_ids[0]) {
                          return genre.name
                      }
                  })}
            </div>
            <div className="main__film-title">
                {title}
            </div>
            <button className='animate__animated animate__slideInUp'>Əlavə et</button>
        </div>
        <div className="main__film-rating">
            {vote_average}
        </div>
    </div>
  )
}

export default MovieBlock
