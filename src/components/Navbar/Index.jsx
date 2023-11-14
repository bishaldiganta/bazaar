import React from 'react'

//IMPORTING ICONS
import { MdOutlineShoppingBag,  } from "react-icons/md";


export const Navbar = () => {
  return (
    <nav>
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
      <img src="" alt="" />
      <p>Login</p>
    </div>
    </nav>
  )
}
