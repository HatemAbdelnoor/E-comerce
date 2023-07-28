import styles from './Navbar.module.css';

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext.js'
import { IconBase, icons } from 'react-icons';
export default function Navbar({userDate, LogOut}) {
  let {getLoggedUserCart}=useContext(CartContext);
  
async function getCart(){

  let response=await getLoggedUserCart();
   setcartDetails(response.data);
  console.log(response);
}
useEffect (()=>{
  getCart();},[]);

const [cartDetails, setcartDetails] = useState(null);

console.log(cartDetails);

  return <>
  <nav className="navbar  navbar-expand navbar-light bg-light">

  <div className="collapse navbar-collapse " id="navbarNavDropdown">

      {userDate!==null ?
    <ul className="navbar-nav">
      <li className='nav-item active w-100 '>
      </li>
      <li className="nav-item active">  
        <Link className="nav-link" to="">Home</Link>
      </li>
      
      <li className="nav-item">
      <Link className="nav-link" to="proudcts">Proudcts </Link>
      </li>
      <li  className="nav-item  cartt">
      <Link className="nav-link" to="cart"> Cart </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="brands">Brands</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="categories">Categories</Link>
      </li>
      </ul>:null}

      <ul className="navbar-nav ms-auto mb-2  ">
        <li className='d-flex  align-items-center me-3' >
        <i className='fab mx-2 fa-facebook' ></i>
        <i className='fab mx-2 fa-twitter' ></i>
        <i className='fab mx-2 fa-instagram' ></i>
        <i className='fab mx-2 fa-tiktok' ></i>
        <i className='fab mx-2 fa-linkedin' ></i>
        <i className='fab mx-2 fa-youtube' ></i>

          </li>
          {userDate===null ? 
          <>
            <li className="nav-item">
      <Link className="nav-link" to="login">Login</Link>
      </li> 
      <li className="nav-item">
      <Link className="nav-link" to="register">Register</Link>
      </li>
          </>:
    
   <li className='nav-item'>
    <li onClick={LogOut}   className='nav-link ' >Logout  </li>
   </li> }
  
   </ul>
 
  </div>
  
</nav>
  
  </>

 };