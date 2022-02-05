import React from 'react';
import CharactersList from './components/CharactersList';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <main className="main flex">
        <CharactersList className="cards-container"/>
      </main>
    </>
  );
}

