import React from 'react';
import Button from '../Button';

export default function HeroBanner() {
  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="card">
                <span>New Arrival</span>
                <h2>
                  Discover Our <br />
                  New Collection
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <Button style={{ width: '200px', marginTop: '20px' }}>Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
