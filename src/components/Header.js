import React from 'react';
import logo from '../logo.svg';

export default function Header() {
  return (
    <div className='header flex'>
      <img className='header-logo' src={logo} alt="Rick Sanchez" />
      <h1 className='header-title fw-400'>Characters List</h1>
    </div>
  )
}