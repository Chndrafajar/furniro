import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5 className="title-funiro">Funiro</h5>
              <p className="title-p">
                400 University Drive Suite 200 Coral
                <br /> Gables, <br /> FL 33134 USA
              </p>
            </div>
            <div className="col-lg-2">
              <span>Links</span>
              <ul className="footer-bar">
                <li className="footer-item">
                  <NavLink className="footer-link">Home</NavLink>
                </li>
                <li className="footer-item">
                  <NavLink className="footer-link">Shop</NavLink>
                </li>
                <li className="footer-item">
                  <NavLink className="footer-link">About</NavLink>
                </li>
                <li className="footer-item">
                  <NavLink className="footer-link">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <span>Help</span>
              <ul className="footer-bar">
                <li className="footer-item">
                  <NavLink className="footer-link">Payment Options</NavLink>
                </li>
                <li className="footer-item">
                  <NavLink className="footer-link">Returns</NavLink>
                </li>
                <li className="footer-item">
                  <NavLink className="footer-link">Privacy Policies</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <span>Newsletter</span>
              <div className="footerinput">
                <input type="text" placeholder="Enter Your Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="copyright-item">
            <span className="copyright">2023 furino. All rights reverved</span>
          </div>
        </div>
      </footer>
    </>
  );
}
