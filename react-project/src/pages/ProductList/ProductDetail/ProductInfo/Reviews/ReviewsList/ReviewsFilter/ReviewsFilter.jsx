import React from "react";
import "./reviewsFilter.scss";
import bestFilterIcon from "..//..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/arrow-down.svg";
import filterStarIcon from "..//..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/star.svg";
function ReviewsFilter({cStyle}) {
  return (
    <div className={`reviewsFilter ${cStyle}`}>
      <h1 className="reviewsFilter-title">Reviews Filter</h1>
      <div className="reviewsFilter-line"></div>
      <div className="reviews-bestFilter">
        <div className="bestFilter-title-container">
          <h1 className="bestFilter-title">Best Filter</h1>
          <div className="bestFilter-icon">
            <img src={bestFilterIcon} alt="" />
          </div>
        </div>
        <div className="bestFilter-container">
          <div className="bestFilter-col">
            <input type="checkbox" className="bestFilter-input" />
            <div className="bestFilter-icon">
              <img src={filterStarIcon} alt="" />
            </div>
            <p className="bestFilter-span">5</p>
          </div>
          <div className="bestFilter-col">
            <input type="checkbox" className="bestFilter-input" />
            <div className="bestFilter-icon">
              <img src={filterStarIcon} alt="" />
            </div>
            <p className="bestFilter-span">4</p>
          </div>
          <div className="bestFilter-col">
            <input type="checkbox" className="bestFilter-input" />
            <div className="bestFilter-icon">
              <img src={filterStarIcon} alt="" />
            </div>
            <p className="bestFilter-span">3</p>
          </div>
          <div className="bestFilter-col">
            <input type="checkbox" className="bestFilter-input" />
            <div className="bestFilter-icon">
              <img src={filterStarIcon} alt="" />
            </div>
            <p className="bestFilter-span">2</p>
          </div>

          <div className="bestFilter-col">
            <input type="checkbox" className="bestFilter-input" />
            <div className="bestFilter-icon">
              <img src={filterStarIcon} alt="" />
            </div>
            <p className="bestFilter-span">1</p>
          </div>
          <div className="reviewsFilter-line"></div>
        </div>
      </div>

      <div className="topicFilter">
        
        <div className="bestFilter-title-container">
          <h1 className="bestFilter-title">Review Topics</h1>
          <div className="bestFilter-icon">
            <img src={bestFilterIcon} alt="" />
          </div>
        </div>
        <div className="bestFilter-container">
        <div className="bestFilter-col">
          <input type="checkbox" className="bestFilter-input" />
          <p className="bestFilter-span">Product Quality</p>
        </div>
        <div className="bestFilter-col">
          <input type="checkbox" className="bestFilter-input" />
          <p className="bestFilter-span">Seller Services</p>
        </div>
        <div className="bestFilter-col">
          <input type="checkbox" className="bestFilter-input" />
          <p className="bestFilter-span">Product Price</p>
        </div>
        <div className="bestFilter-col">
          <input type="checkbox" className="bestFilter-input" />
          <p className="bestFilter-span">Shipment</p>
        </div>
        <div className="bestFilter-col">
          <input type="checkbox" className="bestFilter-input" />
          <p className="bestFilter-span">Match with Description</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsFilter;
