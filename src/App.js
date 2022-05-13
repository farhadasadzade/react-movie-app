import './App.css';

import { Route, Routes } from 'react-router';

//Components
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
      </Routes>
    </div>
  );
}

export default App;
