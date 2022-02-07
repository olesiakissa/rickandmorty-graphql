import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterDetailsCard(props) {
return (
  <div className='character-details-card flex' aria-labelledby='character-name' tabIndex={-1}>
      <h2 className='card-heading' id='character-name'>{props.name}</h2>
      <div className='character-card bg-transparent details' tabIndex={0}>
              <img src={props.image} alt={props.name} />
              <div className='character-description card-details flex'>
                <p>{`Status: ${props.status}`}</p>
                <p>{`Species: ${props.species}`}</p>
                <h3 className='card-heading fw-700'>Last known location</h3>
                <p>{props.location.name}</p>
                <h3 className='card-heading fw-700'>First seen in</h3>
                <p>{props.episode[0].episode} {props.episode[0].name}</p>
              </div>
      </div>
      <Link to={`/characters`}>
        <button className='btn-homepage'>Back to homepage</button>
      </Link>
    </div>
  )
}