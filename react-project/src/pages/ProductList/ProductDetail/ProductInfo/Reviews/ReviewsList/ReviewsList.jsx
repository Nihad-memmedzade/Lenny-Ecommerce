import React from "react";
import "./reviewsList.scss";
import Button from "..//..//..//..//..//../components/buttons/Button";
import ReviewsComment from "./ReviewsComment/ReviewsComment";
import userPP1 from "..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/pp.svg";
import userPP2 from "..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/pp2.svg";
import userPP3 from "..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/pp3.svg";
import userPP4 from "..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/pp4.svg";
import activeLike from "..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/green-like.svg";
import commentLike from "..//..//..//..//..//../assets/images/productDetail/productInfo/reviews/reviewsList/like.svg";

function ReviewsList() {
  return (
    <div className="reviewsList">
      <h1 className="reviewsList-title">Review Lists</h1>
      <div className="reviewsList-buttons">
        <Button cStyle="reviewsList-btn1" text="All Reviews" />
        <Button cStyle="reviewsList-btn2" text="With Photo & Video" />
        <Button
          cStyle=" reviewsList-btn2 reviewsList-btn3"
          text="With Description"
        />
      </div>
      <div className="reviewsComment-container">
        <ReviewsComment
          userName="Darrell Steward"
          likeCount="128"
          ppImg={userPP1}
          likeImg={activeLike}
        />
        <div className="reviewsComment-container-line"></div>
        <ReviewsComment
          userName="Darlene Robertson"
          likeCount="82"
          ppImg={userPP2}
          likeImg={commentLike}
        />
        <div className="reviewsComment-container-line"></div>
        <ReviewsComment
          userName="Kathryn Murphy"
          likeCount="9"
          ppImg={userPP3}
          likeImg={commentLike}
        />
        <div className="reviewsComment-container-line"></div>
        <ReviewsComment
          userName="Ronald Richards"
          likeCount="124"
          ppImg={userPP4}
          likeImg={commentLike}
        />
      </div>
    </div>
  );
}

export default ReviewsList;
