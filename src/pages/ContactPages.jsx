import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

export default function ContactPages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="banner-menu">
        <div className="item-banner-menu">
          <img src="/images/logo-banner.png" alt="" />
          <h3 className="title">Contact</h3>
          <div className="menu-item">
            <NavLink>Home</NavLink>
            <img src="/images/icon/left.png" alt="" />
            <NavLink className="menu-link">Contact</NavLink>
          </div>
        </div>
      </div>
      <div className="contact-pages">
        <div className="container">
          <div className="row">
            <h3>Get In Touch With Us</h3>
            <p>
              For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>
          <div className="item-contact">
            <div className="card-item-contact">
              <div className="item">
                <div className="left-info">
                  <img src="/images/icon/location.png" alt="" />
                  <div className="info">
                    <h5>Address</h5>
                    <span>
                      236 5th SE Avenue, <br /> New York NY10000, <br /> United States
                    </span>
                  </div>
                </div>
                <div className="left-input">
                  <label htmlFor="">Your Name</label>
                  <input type="text" placeholder="Abc" />
                </div>
              </div>
            </div>
            <div className="card-item-contact">
              <div className="item">
                <div className="left-info">
                  <img src="/images/icon/phone.png" alt="" />
                  <div className="info">
                    <h5>Phone</h5>
                    <span>
                      Mobile: +(84) 546-6789 <br />
                      Hotline: +(84) 456-6789
                    </span>
                  </div>
                </div>
                <div className="left-input">
                  <label htmlFor="">Email Address</label>
                  <input type="email" placeholder="Abc@" />
                </div>
              </div>
            </div>
            <div className="card-item-contact">
              <div className="item">
                <div className="left-info">
                  <img src="/images/icon/clock.png" alt="" />
                  <div className="info">
                    <h5>Working Time</h5>
                    <span>
                      Monday-Friday: 9:00 - <br /> 22:00
                      <br /> Saturday-Sunday: 9:00 - <br /> 21:00
                    </span>
                  </div>
                </div>
                <div className="left-input">
                  <label htmlFor="">Subject</label>
                  <input type="email" placeholder="This is an optional" />
                </div>
              </div>
            </div>
            <div className="card-item-contact">
              <div className="item">
                <div className="left-info"></div>
                <div className="left-input">
                  <label htmlFor="">Message</label>
                  <textarea name="" placeholder="Message"></textarea>
                  <Button style={{ marginTop: '30px', width: '120px' }}>Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="keunggulan">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <img src="/images/icon/trophy.png" alt="" />
              <div className="info">
                <h5>High Quality</h5>
                <span>crafted from top materials</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/icon/guarantee.png" alt="" />
              <div className="info">
                <h5>Warranty Protection</h5>
                <span>Over 2 years</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/icon/shipping.png" alt="" />
              <div className="info">
                <h5>Free Shipping</h5>
                <span>Order over 150 $</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/icon/customer-support.png" alt="" />
              <div className="info">
                <h5>24 / 7 Support</h5>
                <span>Dedicated support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
