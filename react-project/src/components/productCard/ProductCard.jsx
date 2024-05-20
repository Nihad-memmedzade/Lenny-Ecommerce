import React from "react";
import "./productCard.scss";
import heartIconProduct from "../../assets/images/homePage/product/heart-vector.svg";
import starIconProduct from "../../assets/images/homePage/product/star.svg";
import { Link } from "react-router-dom";

function ProductCard({ img, name, price, dsc, raiting,id}) {
  return (
    <Link to={`/product-list/${id}`}>
    <div className="productCard">
      <div className="productCard-top">
        <div className="productHeartIcon">
          <img src={heartIconProduct} alt="" className="heartIconProductt" />
        </div>
        <div className="productCardImg1">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="productCard-bottom">
        <div className="productCard-Bottom-titleAndPrice">
          <p className="productCard-productName">{name}</p>
          <span className="productCard-productPrice">${price}</span>
        </div>
        <p className="productCard-bottom-dsc">{dsc}</p>
        <div className="productCard-bottom-raiting">
          <div className="productStarIcon">
            <img src={starIconProduct} alt="" />
          </div>
          <span className="productCard-bottom-raiting">{raiting}</span>
          <div className="productCard-bottom-circle"></div>
          <p className="productCard-bottom-raiting-p">
            <span className="productCard-bottom-raiting-span">1,238</span> Sold
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProductCard;
