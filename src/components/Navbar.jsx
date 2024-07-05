import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNavbar);

  const handleSetActive = (to) => {
    console.log(to); // Optional: handle setActive event
  };

  return (
    <>
      <nav className={navbar ? 'navbar active navbar-expand-lg' : 'navbar navbar-expand-lg'}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <span className="navbar-toggler-icon" />
          </button>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">Contact</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="icon-link">
                <img src="/images/icon/account.png" alt="" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="icon-link">
                <img src="/images/icon/search.png" alt="" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="icon-link">
                <img src="/images/icon/heart.png" alt="" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="icon-link">
                <img src="/images/icon/cart.png" alt="" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* bottom bar */}
      <nav className="bottom-bar">
        <ul className="navbar-bottom">
          <li className="nav-item">
            <NavLink className="icon-link">
              <img src="/images/icon/account.png" alt="" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="icon-link">
              <img src="/images/icon/search.png" alt="" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="icon-link">
              <img src="/images/icon/heart.png" alt="" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="icon-link">
              <img src="/images/icon/cart.png" alt="" />
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* offcanvas bar */}
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            <img src="/images/logo.svg" alt="" />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
