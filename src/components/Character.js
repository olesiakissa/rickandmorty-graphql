import React from 'react';
import { Link } from 'react-router-dom';

export default function Character(props) {
return (
    <Link to={`/characters/${props.id}`} style={{textDecoration: 'none'}}>
      <div className='character-card flex'>
          <img className='character-image' src={props.image} alt={props.name} />
          <div className='character-description flex'>
            <h2 className='card-heading'>{props.name}</h2>
            <button className='character-link' style={{textDecoration: 'underline'}}>Read more</button>
          </div>
        </div>
    </Link>
  )
}