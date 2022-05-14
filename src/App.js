import './App.css';

import { Route, Routes } from 'react-router';

//Components
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import Search from './Components/Pages/Search/Search';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
