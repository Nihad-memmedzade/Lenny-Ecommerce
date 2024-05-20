import React from "react";
import "./productInfo.scss";
import DetailProduct from "./DetailProduct/DetailProduct";
import Merchant from "./Merchant/Merchant";
import Reviews from "./Reviews/Reviews";
import RelatedProduct from "./RelatedProduct/RelatedProduct";

function ProductInfo() {
  const [container1Clicked, setContainer1Clicked] = React.useState(true);
  const [container2Clicked, setContainer2Clicked] = React.useState(false);
  const [container3Cicked, setContainer3Clicked] = React.useState(false);
  const [container4Clicked, setContainer4Clicked] = React.useState(false);

  const handleContainer1Click = () => {
    setContainer1Clicked(true);
    setContainer2Clicked(false);
    setContainer3Clicked(false);
    setContainer4Clicked(false);
  };

  const handleContainer2Click = () => {
    setContainer2Clicked(true);
    setContainer1Clicked(false);
    setContainer3Clicked(false);
    setContainer4Clicked(false);
  };

  const handleContainer3Click = () => {
    setContainer3Clicked(true);
    setContainer2Clicked(false);
    setContainer1Clicked(false);
    setContainer4Clicked(false);
  };

  const handleContainer4Click = () => {
    setContainer3Clicked(false);
    setContainer2Clicked(false);
    setContainer1Clicked(false);
    setContainer4Clicked(true);
  };

  return (
    <div className="productInfo">
      <div className="product-info-titles">
        <p
          className={
            container1Clicked ? "product-info-title1" : "product-info-title"
          }
          onClick={handleContainer1Click}
        >
          Detail Product
        </p>
        <p
          className={
            container2Clicked ? "product-info-title1" : "product-info-title"
          }
          onClick={handleContainer2Click}
        >
          Merchant
        </p>
        <p
          className={
            container3Cicked ? "product-info-title1" : "product-info-title"
          }
          onClick={handleContainer3Click}
        >
          Reviews
        </p>
        <p   className={
            container4Clicked ? "product-info-title1" : "product-info-title"
          }
          onClick={handleContainer4Click}>Related Product</p>
      </div>
      <div className="product-Info-line1"></div>
      {container1Clicked && <DetailProduct />}

      {container2Clicked && <Merchant />}
      {container3Cicked && <Reviews />}
      {container4Clicked && <RelatedProduct />}
    </div>
  );
}

export default ProductInfo;
