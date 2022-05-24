import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'

import { deletePlayList } from '../../../redux/actions/playlist'

import PlaylistItem from '../../PlaylistItem/PlaylistItem'

const Playlist = () => {

    const dispatch = useDispatch()

    const playlistNames = useSelector(({playlist}) => playlist.names)
    const playlistMovies = useSelector(({playlist}) => playlist.playlistArray)

    const [name, setName] = useState(playlistNames[0])
    const [list, setList] = useState([])

    

    useEffect(() => {
        setName(playlistNames[0])
        const list =// eslint-disable-next-line
     playlistMovies && playlistMovies.filter((item) => {
        if(item.playlistName === name) {
            return item
        }
    })
        setList(list)
    }, [playlistNames, name])
    
    const select = useRef()

    const deletePlaylist = () => {
        if(window.confirm('Playlist-i silmək istədiyinizə əminsiniz?')) {
            dispatch(deletePlayList(name))
        } 
    }

  return (
    <main className="main">
        <div className="container_watch">
          <div className="playlist__content">
            <div className="watch__header">
                <h1 className="watch__title">Playlist-lər:</h1>
                {playlistNames.length > 0 && 
                    <select ref={select} onChange={() => setName(select.current.value)}>
                        {
                            playlistNames.map(item => {
                               return  <option key={item} value={item}>{item}</option>
                            })
                        }
                    </select>
                }
                <p onClick={deletePlaylist}>Playlist-i sil</p>
            </div>
            <ul className="playlist">
                {list.length === 1 &&
                    list[0].movies.movies.map((movie) => {
                        return <PlaylistItem key={movie.title} {...movie}/>
                    })
                }
            </ul>
          </div>
        </div>
    </main>
  )
}

export default Playlist
