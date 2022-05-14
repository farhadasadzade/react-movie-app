import React from 'react'
import ContentLoader from "react-content-loader"
import './index.css'

//Component
import MovieBlock from '../../MovieBlock/MovieBlock'

import { useEffect } from 'react'

import { setPage } from '../../../redux/actions/movies'
 
import {useSelector, useDispatch} from 'react-redux'

const Home = () => {

  const dispatch = useDispatch()

  const isLoaded = useSelector(({movies}) => movies.isLoaded)
  const movies = useSelector(({movies}) => movies.movies.results)
  const page = useSelector(({movies}) => movies.page)

  useEffect(() => {
    dispatch(setPage(page))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handlePages = (num) => {
    window.scrollTo(0, 0)
    dispatch(setPage(num))
  }

  const loadingBlocks = Array(20).fill(0).map((item, index) => {return (
    <ContentLoader key={index}
    speed={2}
    width={250}
    height={376}
    viewBox="0 0 250 376"
    backgroundColor="#a1a1a1"
    foregroundColor="#d1d1d1"
  >
    <rect x="0" y="0" rx="4" ry="4" width="250" height="376" />
  </ContentLoader>
  )})

  return (
    <main className="main">
        <div className="container">
          <div className="main__content">
            {isLoaded ?  
                movies.map((movie) => <MovieBlock key={movie.title} {...movie}/>)
                : loadingBlocks
              }
          </div>
          <div className="main__pages">
            <div>
              {page > 1 && <button onClick={() => handlePages(page - 1)}>&#x2190; Əvvəlki</button>}
            </div>
            <div>
              <button onClick={() => handlePages(page + 1)}>Növbəti &#x2192;</button>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Home
