import React, { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import Thugs from '../Images/logo2.png';

export default function Navigation({ size }) {
  const collapseRef = useRef(null);

  const handleNavLinkClick = () => {
    if (collapseRef.current && window.innerWidth < 992) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.current) 
        || new window.bootstrap.Collapse(collapseRef.current, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/"><img src={Thugs} alt="" height="80px" width="145px" className='me-3' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar" ref={collapseRef}>
            <ul className="navbar-nav">
              <li className="nav-item mx-5">
                <Link to="/" className="nav-link text-light" onClick={handleNavLinkClick}>Home</Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/About" className="nav-link text-light" onClick={handleNavLinkClick}>About</Link>
              </li>
              <li className="nav-item dropdown mx-5">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown">
                  Category
                </a>
                <ul className="dropdown-menu">
                  {["whiskey", "vodka", "beer", "rum", "cocktail", "domestic"].map((item) => (
                    <li key={item}>
                      <Link className="dropdown-item" to={`/${item}`} onClick={handleNavLinkClick}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item mx-5">
                <Link to="/LoginPage" className="nav-link text-light" onClick={handleNavLinkClick}>LoginPage</Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/cart" onClick={handleNavLinkClick}>
                  <button className='btn btn-warning mycartbtn'>
                    Cart <span className='badge bg-danger'>{size}</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
