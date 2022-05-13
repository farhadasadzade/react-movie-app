import React from 'react'
import './index.css'

//Component
import MovieBlock from '../../MovieBlock/MovieBlock'

import { useEffect } from 'react'

import { fetchMovies } from '../../../redux/actions/movies'
 
import {useSelector, useDispatch} from 'react-redux'

const Home = () => {

  const dispatch = useDispatch()

  const movies = useSelector(({movies}) => movies.movies.results)

  useEffect(() => {
    dispatch(fetchMovies())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="main">
        <div className="container">
          <div className="main__content">
            {movies && 
              movies.map((movie) => <MovieBlock key={movie.title} {...movie}/>
              )}
          </div>
        </div>
      </main>
  )
}

export default Home
