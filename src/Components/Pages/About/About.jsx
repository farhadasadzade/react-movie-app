import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'

import noIMG from '../../../nopicture.png'

import genres from '../../../genres.json'

const About = () => {

    const movieDetails = useSelector(({about}) => about) 

    const imageSrc = movieDetails.movie.poster_path != null ? `https://image.tmdb.org/t/p/w500/${movieDetails.movie.poster_path}` : noIMG
  

    let ratingClass = ''
    
    if(movieDetails.movie.vote_average >= 8) {
        ratingClass = `about__film-rating rating__1`
    }else if(movieDetails.movie.vote_average >= 6) {
        ratingClass = `about__film-rating rating__2`
    }else if(movieDetails.movie.vote_average >= 4) {
        ratingClass = `about__film-rating rating__3`
    }else if(movieDetails.movie.vote_average >= 2) {
        ratingClass = `about__film-rating rating__4`
    }else if(movieDetails.movie.vote_average >= 0) {
        ratingClass = `about__film-rating rating__5`
    }

    return (
    <div className='about'>
        <div className="container">
            <div className="about__content">
                <img src={imageSrc} alt="poster" />
                <div className="about__details">
                    <h1>{movieDetails.movie.title} ({movieDetails.movie.release_date.slice(0,4)})</h1>
                    <h3>{// eslint-disable-next-line
                        genres.genres.map((genre) => {
                            if(genre.id === movieDetails.movie.genre_ids[0]) {
                            return genre.name
                        }
                    })}
                    </h3>
                    <div className={ratingClass}>
                        {movieDetails.movie.vote_average}
                    </div>
                    <p>
                        <strong>Overview:</strong> <br />
                        {movieDetails.movie.overview} 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
