import React from 'react'
import './index.css'
import 'animate.css';
import noIMG from '../../nopicture.png'

import genres from '../../genres.json'

import { addMovie } from '../../redux/actions/watchlist';
import { addAbout } from '../../redux/actions/about';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieBlock = ({id, vote_average, title, poster_path, genre_ids, overview, release_date}) => {

    const dispatch = useDispatch()

    const imageSrc = poster_path != null ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noIMG

    let ratingClass = ''
    
    if(vote_average >= 8) {
        ratingClass = `main__film-rating rating__1`
    }else if(vote_average >= 6) {
        ratingClass = `main__film-rating rating__2`
    }else if(vote_average >= 4) {
        ratingClass = `main__film-rating rating__3`
    }else if(vote_average >= 2) {
        ratingClass = `main__film-rating rating__4`
    }else if(vote_average >= 0) {
        ratingClass = `main__film-rating rating__5`
    }

    const handleClick = () => {
        const movieObj = {
            id,
            title,
            genre_ids,
            imgSrc: imageSrc
        }
        dispatch(addMovie(movieObj))
    }

    const handleAboutClick = () => {
        dispatch(addAbout({title, overview, release_date, genre_ids, poster_path, vote_average}))
    }

    return (
            <div className="main__film">
                <Link to='/about' onClick={() => handleAboutClick()}>
                    
                </Link>
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
                    <button onClick={() => handleClick()} className='animate__animated animate__slideInUp'>Əlavə et</button>
                </div>
                <div className={ratingClass}>
                    {vote_average}
                    </div>
            </div>
  )
}

export default MovieBlock
