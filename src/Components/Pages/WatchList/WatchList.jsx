import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WatchItem from '../../WatchItem/WatchItem'
import { clearList } from '../../../redux/actions/watchlist'
import './index.css'

//Components


const WatchList = () => {

  const dispatch = useDispatch()

  const movieList = useSelector(({watchList}) => watchList)

  const handleClick = () => {
    if(window.confirm('Bütün siyahını silmək istədiyinizə əminsiniz?')) {
      dispatch(clearList())
    }
  }

  return (
    <div className='watch'>
        <div className="container_watch">
          <div className="watch__header">
            <h1 className="watch__title">Filmlərim:</h1>
            <p onClick={() => handleClick()}>Hamısını sil</p>
          </div>
          <ul className="watch__list">
          {movieList.movies &&
            movieList.movies.map((item) => {
              return <WatchItem key={item.id} {...item}/>
            })}
          </ul>
        </div>
    </div>
  )
}

export default WatchList
