import { React } from 'react';
import { useParams } from 'react-router';
import { useCharacterDetails } from '../hooks/useCharacterDetails';
import CharacterDetailsCard from './CharacterDetailsCard';

export default function CharacterDetails() {
  const { id } = useParams();
  const { loading, error, data } = useCharacterDetails(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>${error}</p>;

  return (
    <CharacterDetailsCard key={data.character.id} {...data.character}/>
  )
}