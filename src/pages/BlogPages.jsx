import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { dataBlog, recentPostData } from '../assets/data';

export default function BlogPages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="banner-menu">
        <div className="item-banner-menu">
          <img src="/images/logo-banner.png" alt="" />
          <h3 className="title">Blog</h3>
          <div className="menu-item">
            <NavLink>Home</NavLink>
            <img src="/images/icon/left.png" alt="" />
            <NavLink className="menu-link">Blog</NavLink>
          </div>
        </div>
      </div>
      {/* blog-pages */}
      <div className="blog-pages">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card-blog">
                {dataBlog.map((b) => (
                  <div className="card-blog-item" key={b.id}>
                    <img src={b.image} alt="" />
                    <div className="icons-blog">
                      <div className="icons-item">
                        <img src="/images/icon/admin-user.png" alt="" />
                        <span>{b.user}</span>
                      </div>
                      <div className="icons-item">
                        <img src="/images/icon/calender.png" alt="" />
                        <span>{b.date}</span>
                      </div>
                      <div className="icons-item">
                        <img src="/images/icon/tag.png" alt="" />
                        <span>{b.tag}</span>
                      </div>
                    </div>
                    <h2>{b.title}</h2>
                    <p>{b.desc}</p>
                    <button className="btn-read-more">Read More</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-left">
                <div className="blog-search">
                  <input type="text" />
                  <img src="/images/icon/search.png" alt="" />
                </div>
                <div className="categories">
                  <h4>Categories</h4>
                  <div className="item">
                    <span>Crafts</span>
                    <span>2</span>
                  </div>
                  <div className="item">
                    <span>Design</span>
                    <span>8</span>
                  </div>
                  <div className="item">
                    <span>Handmade</span>
                    <span>7</span>
                  </div>
                  <div className="item">
                    <span>Interior</span>
                    <span>1</span>
                  </div>
                  <div className="item">
                    <span>Wood</span>
                    <span>8</span>
                  </div>
                </div>

                <div className="recent-post">
                  <h4>Recent Post</h4>
                  {recentPostData.map((r) => (
                    <div className="item-recent-post" key={r.id}>
                      <img src={r.image} alt="" />
                      <div className="info">
                        <span>{r.title}</span>
                        <div className="date">{r.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
      {/* blog-pages */}
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
