import './App.css';

import { Route, Routes } from 'react-router';

//Components
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import Search from './Components/Pages/Search/Search';
import WatchList from './Components/Pages/WatchList/WatchList';
import About from './Components/Pages/About/About'
import Playlist from './Components/Pages/Playlist/Playlist';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/search' element={<Search />} />
        <Route path='/watchlist' element={<WatchList />} />
        <Route path='/about' element={<About />} />
        <Route path='/playlist' element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
