import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import { DataProduct } from '../assets/data';
import Footer from '../components/Footer';

export default function ShopPages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="banner-menu">
        <div className="item-banner-menu">
          <img src="/images/logo-banner.png" alt="" />
          <h3 className="title">Shop</h3>
          <div className="menu-item">
            <NavLink>Home</NavLink>
            <img src="/images/icon/left.png" alt="" />
            <NavLink className="menu-link">Shop</NavLink>
          </div>
        </div>
      </div>
      <div className="filter-bar">
        <div className="container">
          <div className="filter-left">
            <div className="icons-filter">
              <img src="/images/icon/filtering.png" alt="" />
              <span>Filtering</span>
            </div>
            <img src="/images/icon/big-round.png" alt="" />
            <img src="/images/icon/view-list.png" alt="" />
            <div className="line-left"></div>
            <p>Showing 1–16 of 32 results</p>
          </div>
          <div className="filter-right">
            <div className="filter-right-item">
              <span>Show</span>
              <input type="text" placeholder="16" />
            </div>
            <div className="filter-right-item">
              <span>Show</span>
              <select name="" id="">
                <option value="">Default</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="our-product">
        <div className="container">
          <div className="row">
            {DataProduct.map((p) => (
              <div className="col-lg-4 col-xl-3 col-sm-6" key={p.id}>
                <div className="card">
                  <img src={p.image} alt="" />
                  {p.diskon ? <div className="diskon-product">-{p.diskon}%</div> : p.status ? <div className="status-product">{p.status}</div> : <div></div>}

                  <div className="back-overlay">
                    <button className="btn-cart">Add To Cart</button>
                    <div className="icons-overlay">
                      <div className="icons-item">
                        <img src="/images/icon/share.png" alt="" />
                        <span>Share</span>
                      </div>
                      <div className="icons-item">
                        <img src="/images/icon/arrow.png" alt="" />
                        <span>Compare</span>
                      </div>
                      <div className="icons-item">
                        <img src="/images/icon/heart-white.png" alt="" />
                        <span>Like</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>{p.name}</h4>
                    <span className="desc">{p.desc}</span>
                    <h5>
                      Rp{p.price.toLocaleString()} <span>Rp {p.price * (1 - p.diskon / 100).toLocaleString()}</span>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="placeholder-btn">
              <div className="items active">1</div>
              <div className="items">2</div>
              <div className="items">3</div>
              <div className="items-next">Next</div>
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
