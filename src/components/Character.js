import React from 'react';

export default function Character(props) {
return (
    <div className='character-card flex'>
            <img className='character-image' src={props.image} alt={props.name} />
            <div className='character-details flex'>
              <h2 className='character-name'>{props.name}</h2>
              <a className='character-link' href='#'>Read more</a>
            </div>
    </div>
  )
}