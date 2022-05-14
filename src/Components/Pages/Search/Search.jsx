import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSearchPage } from '../../../redux/actions/search'

import ContentLoader from 'react-content-loader'

//Components
import MovieBlock from '../../MovieBlock/MovieBlock'

const Search = () => {

  const dispatch = useDispatch()

  const movies = useSelector(({search}) => search.searchMovies.results)
  const totalPages = useSelector(({search}) => search.searchMovies.total_pages)
  const isLoaded = useSelector(({search}) => search.isLoadedSearch)
  const page = useSelector(({search}) => search.pageSearch)
  const query = useSelector(({search}) => search.query)

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

  const handleClick = (num) => {
    window.scrollTo(0, 0)
    dispatch(setSearchPage(num, query))
  }

  return (
    <main className="main">
        <div className="container">
          <div className="main__content">
            {isLoaded ? movies.map(movie => <MovieBlock key={movie.title} {...movie}/>) : loadingBlocks}
          </div>
          <div className="main__pages">
            <div>
              {page > 1 && <button onClick={() => handleClick(page - 1)}>&#x2190; Əvvəlki</button>}
            </div>
            <div>
              {page !== totalPages && <button onClick={() => handleClick(page + 1)}>Növbəti &#x2192;</button>}
            </div>
          </div>
        </div>
      </main>
  )
}

export default Search
