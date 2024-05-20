import React from "react";
import "./articleCard.scss";

function ArticleCard({  title, dsc, img }) {
  return (
    <div className="articleCard">
      <div className="articleCardImg">
        <img src={img} alt="" />
      </div>
      <p className="articleCard-date">22 Dec 2022</p>
      <p className="articleCard-title">{title}</p>
      <p className="articleCard-description">{dsc}</p>
    </div>
  );
}

export default ArticleCard;
