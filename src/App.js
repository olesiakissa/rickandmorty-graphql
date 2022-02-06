import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import Header from './components/Header';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
      <Routes>
        <Route path='/' element={<Navigate to='/characters'/>}/>
        <Route path='/characters' element={
          <CharactersList className="cards-container"/>
        } />
        <Route path='characters/:id' element={<CharacterDetails />} />
      </Routes>
      </main>
    </>
  );
}

