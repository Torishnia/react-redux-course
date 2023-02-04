import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FavouritesPage from './pages/fav/FavouritesPage';
import HomePages from './pages/home/HomePage';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <HomePages /> } />
        <Route path='/favourites' element={ <FavouritesPage /> } />
      </Routes>
    </>
  );
}

export default App;
