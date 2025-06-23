import React from 'react'
// import Logo from '../Images/logo.png'
import Thugs from '../Images/logo2.png'
import { Outlet,Link } from 'react-router-dom'
import Footer from './Footer'
export default function Navigation({size}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand  text-light" to="/"><img src={Thugs} alt="" height="80px" width="145px" className='me-3' /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item mx-5">
                <li><Link rel="stylesheet" to="/" class="nav-link text-light">Home</Link></li>
              </li>
              <li class="nav-item mx-5">
                <li><Link rel="stylesheet" to="/About" class="nav-link text-light">About</Link></li>
              </li>
              <li class="nav-item dropdown mx-5">
                <a class="nav-link  text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Category</a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/whiskey">Whiskey</Link></li>
                  <li><Link class="dropdown-item" to="/vodka">Vodka</Link></li>
                  <li><Link class="dropdown-item" to="/beer">Beer</Link></li>
                  <li><Link class="dropdown-item" to="/rum">Rum</Link></li>
                  <li><Link class="dropdown-item" to="/cocktail">Cocktail</Link></li>
                  <li><Link class="dropdown-item" to="/domestic">Domestic</Link></li>
                </ul>
              </li>
            <li class="nav-item mx-5">
                <li><Link rel="stylesheet" to="/LoginPage" class="nav-link text-light">LoginPage</Link></li>
              </li>
            </ul>
          </div>
          <Link to="/cart"><button className='btn btn-warning mycartbtn'>Cart <span className='badge bg-danger'>{size}</span></button></Link>
        </div>
      </nav>
      <Outlet />
      <Footer/>
    </>
  )
}
