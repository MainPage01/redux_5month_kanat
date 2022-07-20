import React, { useContext } from 'react'
import { Context } from '../context';
// import { AiOutlineInstagram, } from 'react-icons/fa';

export default function Footer() {

  const socials = ['instagram', 'reddit', 'lalafo', 'somethingelse']
  const { style, currentStyle } = useContext(Context)

  function getSocials(element, index) {
    return <li style={{ listStyle: 'none' }} key={index}>{element}</li>
  }

  return (
    <div style={currentStyle}>
      <h1 style={{ textAlign: 'center' }}>Footer component</h1>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        {socials.map((getSocials))}
      </ul>
    </div>
  )
}
