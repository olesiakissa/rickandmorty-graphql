import React from 'react';
import {useCharacters} from '../hooks/useCharacters';
import Character from './Character';

export default function CharactersList() {
  const {loading, error, data} = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error happened while fetching the data...</p>;

  const characters = data.characters.results.map(character => (
    <Character key={character.id}
               {...character} 
               />
  ))
  return (
    <div className='cards-container'>
      {characters}
    </div>
  )
}
