import React from 'react'
import './navbar.css'

//IMPORTING ICONS
import { MdOutlineShoppingBag, MdSearch, MdLogin  } from "react-icons/md";


export default function Navbar() {
  return (
    <header>
    <div className='nav-left'>
        <ul>
        <li>Men</li>
        <li>Woman</li>
        <li>Kids</li>
        <li>New & Featured</li>
        <li>Gift</li>
        </ul>
    </div>
    <div className="nav-middle">BAZAAR</div>
    <div className="nav-right">
    <MdOutlineShoppingBag />
    <MdSearch/>
    <MdLogin/>
    </div>
    </header>
  )
}
