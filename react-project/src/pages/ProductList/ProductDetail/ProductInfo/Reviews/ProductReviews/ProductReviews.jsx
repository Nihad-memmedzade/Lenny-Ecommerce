import React from "react";
import "./productReviews.scss";
import raitingCircle from "..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/productReviews/raiting-circle.svg";
import starIcon from "..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/productReviews/star.svg";

function ProductReviews() {
  return (
    <div className="productReviews">
      <h1 className="productReviews-title">Product Reviews</h1>
      <div className="productReviews-container">
        <div className="productReviews-container-left">
          <div className="productReviews-container-left-cnt">
            <div className="productReviews-container-raitingCircle-cnt">
              <img src={raitingCircle} alt="" />
              <span className="productReviews-num">4.8</span>
            </div>
            <div className="productReviews-container-star-cnt">
              <div className="productReviews-stars">
                <div className="productReviews-star">
                  <img src={starIcon} alt="" />
                </div>
                <div className="productReviews-star">
                  <img src={starIcon} alt="" />
                </div>
                <div className="productReviews-star">
                  <img src={starIcon} alt="" />
                </div>
                <div className="productReviews-star">
                  <img src={starIcon} alt="" />
                </div>
                <div className="productReviews-star">
                  <img src={starIcon} alt="" />
                </div>
              </div>
              <p className="productReviews-container-star-p">
                from 1,25k reviews
              </p>
            </div>
          </div>
        </div>
        <div className="productReviews-container-right">
          <div className="productReviews-container-right-col1">
            <div className="productReviews-container-right-col1-left">
              <span className="productReviews-container-right-col1-left-span">
                5.0
              </span>
              <div className="productReviews-container-right-col1-left-icon">
                <img src={starIcon} alt="" />
              </div>
            </div>
            <div className="productReviews-container-right-col1-center">
              <div className="productReviews-container-right-col1-line1"></div>
              <div className="productReviews-container-right-col1-line2"></div>
            </div>
            <span className="productReviews-container-right-col1-right">
              282
            </span>
          </div>
          <div className="productReviews-container-right-col1">
            <div className="productReviews-container-right-col1-left">
              <span className="productReviews-container-right-col1-left-span">
                4.0
              </span>
              <div className="productReviews-container-right-col1-left-icon">
                <img src={starIcon} alt="" />
              </div>
            </div>
            <div className="productReviews-container-right-col1-center">
              <div className="productReviews-container-right-col1-line1"></div>
              <div className="productReviews-container-right-col1-line2 productReviews-container-right-col1-line2-1"></div>
            </div>
            <span className="productReviews-container-right-col1-right">
              38
            </span>
          </div>
          <div className="productReviews-container-right-col1">
            <div className="productReviews-container-right-col1-left">
              <span className="productReviews-container-right-col1-left-span">
                3.0
              </span>
              <div className="productReviews-container-right-col1-left-icon">
                <img src={starIcon} alt="" />
              </div>
            </div>
            <div className="productReviews-container-right-col1-center">
              <div className="productReviews-container-right-col1-line1"></div>
              <div className="productReviews-container-right-col1-line2 productReviews-container-right-col1-line2-2"></div>
            </div>
            <span className="productReviews-container-right-col1-right">4</span>
          </div>
          <div className="productReviews-container-right-col1">
            <div className="productReviews-container-right-col1-left">
              <span className="productReviews-container-right-col1-left-span">
                2.0
              </span>
              <div className="productReviews-container-right-col1-left-icon">
                <img src={starIcon} alt="" />
              </div>
            </div>
            <div className="productReviews-container-right-col1-center">
              <div className="productReviews-container-right-col1-line1"></div>
            </div>
            <span className="productReviews-container-right-col1-right">0</span>
          </div>
          <div className="productReviews-container-right-col1">
            <div className="productReviews-container-right-col1-left">
              <span className="productReviews-container-right-col1-left-span">
                1.0
              </span>
              <div className="productReviews-container-right-col1-left-icon">
                <img src={starIcon} alt="" />
              </div>
            </div>
            <div className="productReviews-container-right-col1-center">
              <div className="productReviews-container-right-col1-line1"></div>
            </div>
            <span className="productReviews-container-right-col1-right">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
