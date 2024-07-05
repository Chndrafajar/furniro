import React from 'react';

export default function BrowseRange() {
  return (
    <section className="browse-range">
      <div className="container">
        <div className="row">
          <h4 className="title">Browse The Range</h4>
          <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-4 col-sm-6">
            <img src="/images/range/dining.png" alt="" />
            <h4 className="range-title">Dining</h4>
          </div>
          <div className="col-md-4 col-sm-6">
            <img src="/images/range/living.png" alt="" />
            <h4 className="range-title">Living</h4>
          </div>
          <div className="col-md-4 col-sm-6">
            <img src="/images/range/bedroom.png" alt="" />
            <h4 className="range-title">Bedroom</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
