import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function ProductComparison() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="banner-menu">
        <div className="item-banner-menu">
          <img src="/images/logo-banner.png" alt="" />
          <h3 className="title" style={{ textAlign: 'center' }}>
            Product Comparison
          </h3>
          <div className="menu-item">
            <NavLink>Home</NavLink>
            <img src="/images/icon/left.png" alt="" />
            <NavLink className="menu-link">Product Comparison</NavLink>
          </div>
        </div>
      </div>
      {/* product-comparison */}
      <div className="product-comparison">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h1>Go to Product page for more Products</h1>
              <NavLink className="view-link">View More</NavLink>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src="/images/product/comparison-1.png" alt="" />
                <h4>Asgaard Sofa</h4>
                <h5>Rs. 250,000.00</h5>
                <div className="review-comparison">
                  <h6>4.7</h6>
                  <div className="icon-star">
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star-half.png" alt="" />
                  </div>
                  <div className="line-com"></div>
                  <span>204 Review</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img src="/images/product/comparison-2.png" alt="" />
                <h4>Outdoor Sofa Set</h4>
                <h5>Rs. 224,000.00</h5>
                <div className="review-comparison">
                  <h6>4.2</h6>
                  <div className="icon-star">
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star.png" alt="" />
                    <img src="/images/icon/star-half.png" alt="" />
                  </div>
                  <div className="line-com"></div>
                  <span>145 Review</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right-item">
                <h3>Add A Product</h3>
                <div className="com-select">
                  <select name="" id="">
                    <option value="">Choose a Product</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row table-row">
            <div className="col-lg-3 table-col">
              <h4>General</h4>
              <ul>
                <li>Sales Package</li>
                <li>Model Number</li>
                <li>Secondary Material</li>
                <li>Configuration</li>
                <li>Upholstery Material</li>
                <li>Upholstery Color</li>
              </ul>
              <h4>Product</h4>
              <ul>
                <li>Filling Material</li>
                <li>Finish Type</li>
                <li>Adjustable Headrest</li>
                <li>Maximum Load Capacity</li>
                <li>Origin of Manufacture</li>
              </ul>
              <h4>Dimensions</h4>
              <ul>
                <li>Width</li>
                <li>Height</li>
                <li>Depth</li>
                <li>Weight</li>
                <li>Seat Weight</li>
                <li>Leg Weight</li>
              </ul>
              <h4>Warranty</h4>
              <ul>
                <li>Warranty Summary</li>
                <li>Warranty Service Type</li>
                <li>Covered in Warranty</li>
                <li>Not Covered in Warranty</li>
                <li>Domestic Warranty</li>
              </ul>
            </div>
            <div className="col-lg-3 table-col">
              <h4></h4>
              <ul>
                <li>1 sectional sofa</li>
                <li>TFCBLIGRBL6SRHS</li>
                <li>Solid Wood</li>
                <li>L-shaped</li>
                <li>Fabric + Cotton</li>
                <li>Bright Grey & Lion</li>
              </ul>
              <h4></h4>
              <ul>
                <li>Foam</li>
                <li>Bright Grey</li>
                <li>No</li>
                <li>280 KG</li>
                <li>India</li>
              </ul>
              <h4></h4>
              <ul>
                <li>265.32 cm</li>
                <li>76 cm</li>
                <li>167.76 cm</li>
                <li>45 KG</li>
                <li>41.52 cm</li>
                <li>5.46 cm</li>
              </ul>
              <h4></h4>
              <ul>
                <li>1 Year Manufacturing Warranty</li>
                <li>For Warranty Claims or Any Product Related Issues Please Email at operations @trevifurniture.com</li>
                <li>Warranty Against Manufacturing Defect</li>
                <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
                <li>1 Year</li>
                <Button>Add To Cart</Button>
              </ul>
            </div>
            <div className="col-lg-3 table-col">
              <h4></h4>
              <ul>
                <li>1 Three Seater, 2 Single Seater</li>
                <li>DTUBLIGRBL568</li>
                <li>Solid Wood</li>
                <li>L-shaped</li>
                <li>Fabric + Cotton</li>
                <li>Bright Grey & Lion</li>
              </ul>
              <h4></h4>
              <ul>
                <li>Matte</li>
                <li>Bright Grey & Lion</li>
                <li>yes</li>
                <li>300 KG</li>
                <li>India</li>
              </ul>
              <h4></h4>
              <ul>
                <li>265.32 cm</li>
                <li>76 cm</li>
                <li>167.76 cm</li>
                <li>65 KG</li>
                <li>41.52 cm</li>
                <li>5.46 cm</li>
              </ul>
              <h4></h4>
              <ul>
                <li>1.2 Year Manufacturing Warranty</li>
                <li>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</li>
                <li>Warranty of the product is limited to manufacturing defects only.</li>
                <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
                <Button>Add To Cart</Button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* product-comparison */}
      <div className="keunggulan">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img src="/images/icon/trophy.png" alt="" />
              <div className="info">
                <h5>High Quality</h5>
                <span>crafted from top materials</span>
              </div>
            </div>
            <div className="col-lg-3">
              <img src="/images/icon/guarantee.png" alt="" />
              <div className="info">
                <h5>Warranty Protection</h5>
                <span>Over 2 years</span>
              </div>
            </div>
            <div className="col-lg-3">
              <img src="/images/icon/shipping.png" alt="" />
              <div className="info">
                <h5>Free Shipping</h5>
                <span>Order over 150 $</span>
              </div>
            </div>
            <div className="col-lg-3">
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
