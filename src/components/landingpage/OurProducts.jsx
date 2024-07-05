import React from 'react';
import { DataProduct } from '../../assets/data';

export default function OurProducts() {
  return (
    <section className="our-product">
      <div className="container">
        <div className="row">
          <h3>Our Products</h3>
        </div>
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
          <div className="btn-show">
            <button>Show More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
