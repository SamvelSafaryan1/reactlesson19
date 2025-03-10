import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './Header.css'
import { NavLink, useLocation } from 'react-router-dom';
import { Context } from '../../Context/Context';

function Header(){
  let {cards} = useContext(Context)
  console.log(cards);
  
  let {pathname} = useLocation()

  return(
    <header>
      <div>
        <h1>Logo</h1>
      </div>
      <div className='cart-item'>
        {
          pathname === '/card' || <NavLink to='/card'>
          <FaShoppingCart />
          <sub>{cards.length}</sub>
        </NavLink>
        }
        <button><NavLink to='/login'>Login</NavLink></button>
      </div>
    </header>
  )
}

export default Header
