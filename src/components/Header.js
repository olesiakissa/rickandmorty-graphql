import React from 'react';
import logo from '../logo.svg';

export default function Header() {
  return (
    <header className='header flex'>
      <img aria-hidden='true'
           className='header-logo' 
           src={logo} 
           alt="Rick Sanchez" />
      <h1 className='header-title fw-400'>Characters List</h1>
    </header>
  )
}