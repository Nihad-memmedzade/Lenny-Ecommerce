import React from "react";
import "./reviewsComment.scss";
import starIcon777 from "..//..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/star.svg";
import userLike from "..//..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/disslike.svg";

function ReviewsComment({userName,ppImg,likeImg,likeCount}) {
  return (
    <div className="reviewsComment">
      <div className="reviewsComment-stars">
        <div className="reviewsComment-star">
          <img src={starIcon777} alt="" />
        </div>
        <div className="reviewsComment-star">
          <img src={starIcon777} alt="" />
        </div>
        <div className="reviewsComment-star">
          <img src={starIcon777} alt="" />
        </div>
        <div className="reviewsComment-star">
          <img src={starIcon777} alt="" />
        </div>
        <div className="reviewsComment-star">
          <img src={starIcon777} alt="" />
        </div>
      </div>
      <h2 className="reviewsComment-comment">
        This is amazing product I have.
      </h2>
      <p className="reviewsComment-date">July 2, 2020 03:29 PM</p>
      <div className="user-container">
        <div className="user-pp-and-name">
          <div className="user-pp">
            <img src={ppImg} alt="" />
          </div>
          <p className="userName-reviews">{userName}</p>
        </div>
        <div className="user-container-buttons">
        <button className="user-container-btn1">
          <div className="user-container-btn1-img">
            <img src={likeImg} alt="" />
          </div>
          {likeCount}
        </button>
        <button className="user-container-btn1 user-container-btn2">
          <div className="user-container-btn1-img">
            <img src={userLike} alt="" />
          </div>
        
        </button>

        </div>
      </div>
    </div>
  );
}

export default ReviewsComment;
