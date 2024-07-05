import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

export default function CheckoutPages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="banner-menu">
        <div className="item-banner-menu">
          <img src="/images/logo-banner.png" alt="" />
          <h3 className="title">Checkout</h3>
          <div className="menu-item">
            <NavLink>Home</NavLink>
            <img src="/images/icon/left.png" alt="" />
            <NavLink className="menu-link">Checkout</NavLink>
          </div>
        </div>
      </div>
      {/* checkout pages */}
      <div className="checkout-pages">
        <div className="container">
          <div className="row">
            <h3>Billing details</h3>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <form action="">
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <div className="form-input">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                  </div>
                  <div className="form-input">
                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="form-input">
                  <label htmlFor="">Company Name (Optional)</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label htmlFor="">Country / Region</label>
                  <select name="" id="">
                    <option value="">Sri Lanka</option>
                    <option value="">Indonesia</option>
                  </select>
                </div>
                <div className="form-input">
                  <label htmlFor="">Street Address</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label htmlFor="">Town / City</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label htmlFor="">Country / Region</label>
                  <select name="" id="">
                    <option value="">Western Province</option>
                    <option value="">Indonesia</option>
                  </select>
                </div>
                <div className="form-input">
                  <label htmlFor="">Zip Code</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label htmlFor="">Phone</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label htmlFor="">Email address</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label htmlFor=""></label>
                  <input type="text" placeholder="Additiona information" />
                </div>
              </form>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <div className="info-checkout">
                <div className="items">
                  <h4>Product</h4>
                  <h4>Subtotal</h4>
                </div>
                <div className="items">
                  <p>
                    Asgaard sofa <span>x 1</span>
                  </p>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="items">
                  <h6>Subtotal</h6>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="items">
                  <h6>Total</h6>
                  <h3>Rs. 250,000.00</h3>
                </div>
              </div>
              <div className="bank-info">
                <div className="lingkaran"></div>
                <h5>Direct Bank Transfer</h5>
              </div>
              <p className="bank-p">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              <div className="bank-info">
                <div className="lingkaran-outline"></div>
                <span>Direct Bank Transfer</span>
              </div>
              <div className="bank-info">
                <div className="lingkaran-outline"></div>
                <span>Cash On Delivery</span>
              </div>
              <p className="p-paragarap">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b>{' '}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="btn-order">Place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* checkout pages */}
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
