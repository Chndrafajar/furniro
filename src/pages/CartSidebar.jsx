import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import { DataProduct } from '../assets/data';

export default function CartSidebar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="single-product">
        <nav aria-label="" className="nav-breadcrum ">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-items">
                <NavLink className="link">Home</NavLink>
              </li>
              <span>&gt;</span>

              <li className="breadcrumb-items">
                <NavLink className="link">Home</NavLink>
              </li>
              <span>&gt;</span>

              <div className="line-single"></div>
              <li className="breadcrumb-items">
                <h6>Asgaard sofa</h6>
              </li>
            </ol>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="items-img">
                <div className="left-img">
                  <img src="/images/single-product/product-1.png" alt="" />
                  <img src="/images/single-product/product-2.png" alt="" />
                  <img src="/images/single-product/product-3.png" alt="" />
                  <img src="/images/single-product/product-5.png" alt="" />
                </div>
                <div className="right-img">
                  <img src="/images/single-product/product-4.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <h2>Asgaard sofa</h2>
                <h4>Rs. 250,000.00</h4>
                <div className="star">
                  <div className="left-star">
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star-half.png" alt="" />
                  </div>
                  <div className="line-star"></div>
                  <span>5 Customer Review</span>
                </div>
                <p className="single-p">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                <div className="size">
                  <span>Size</span>
                  <div className="item-size">
                    <div className="box active">L</div>
                    <div className="box">XL</div>
                    <div className="box">XS</div>
                  </div>
                </div>
                <div className="color">
                  <span>Color</span>
                  <div className="color-item">
                    <div className="lingkaran ungu"></div>
                    <div className="lingkaran black"></div>
                    <div className="lingkaran orange"></div>
                  </div>
                </div>
                <div className="info-button cart-sidebar">
                  <div className="btn-quantity">
                    <div className="min">-</div>
                    <input type="text" disabled placeholder="1" />
                    <div className="plus">+</div>
                  </div>
                  <button className="btn-add">Add To Cart</button>
                </div>

                <div className="line-bottom"></div>
                <div className="info-product">
                  <div className="items">
                    <h5>SKU</h5> <span>:</span> <h5>SS001</h5>
                  </div>
                  <div className="items">
                    <h5>Category</h5> <span>:</span> <h5>Sofas</h5>
                  </div>
                  <div className="items">
                    <h5>Tags</h5> <span>:</span> <h5>Sofa, Chair, Home, Shop</h5>
                  </div>
                  <div className="items">
                    <h5>Share</h5> <span>:</span>{' '}
                    <div className="icons">
                      <img src="/images/icon/fb.png" alt="" />
                      <img src="/images/icon/tw.png" alt="" />
                      <img src="/images/icon/linkedin.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-row"></div>
        <div className="container">
          <div className="nav-tabs">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink to="/des" className="nav-link active" aria-current="page">
                  Description
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Additional Information
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Reviews [5]
                </NavLink>
              </li>
            </ul>
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio
              which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src="/images/single-product/product-6.png" alt="" />
            </div>
            <div className="col-lg-6">
              <img src="/images/single-product/product-7.png" alt="" />
            </div>
          </div>
        </div>
        <div className="line-row"></div>
      </div>
      <div className="our-product" style={{ marginBottom: '60px' }}>
        <h4 className="title-single-product">Related Products</h4>

        <div className="container">
          <div className="row">
            {DataProduct?.slice(0, 4).map((p) => (
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
            <div className="btn-show">
              <button>Show More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
