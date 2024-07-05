import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import { DataProduct } from '../assets/data';
import Footer from '../components/Footer';

export default function CartPages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="banner-menu">
        <div className="item-banner-menu">
          <img src="/images/logo-banner.png" alt="" />
          <h3 className="title">Cart</h3>
          <div className="menu-item">
            <NavLink>Home</NavLink>
            <img src="/images/icon/left.png" alt="" />
            <NavLink className="menu-link">Cart</NavLink>
          </div>
        </div>
      </div>
      <div className="cart-pages">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="img-item">
                        <img src="/images/product/product-cart.png" alt="" />
                        <span>Asgaard Sofa</span>
                      </div>
                    </td>
                    <td>
                      <span>Rs. 250,000.00</span>
                    </td>
                    <td>
                      <input type="text" placeholder="1" className="input-quantity" />
                    </td>
                    <td>
                      <span className="subtotal">Rs. 250,000.00</span>
                    </td>
                    <td>
                      <div className="icon-delete">
                        <img src="/images/icon/delete.png" alt="" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <h1>Cart Totals</h1>

                <div className="subtotal">
                  <h6>
                    Subtotal: <span>Rp. 250,000.00</span>
                  </h6>
                </div>
                <div className="total">
                  <h6>
                    Total: <span>Rp. 250,000.00</span>
                  </h6>
                </div>
                <button>Checkout</button>
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
