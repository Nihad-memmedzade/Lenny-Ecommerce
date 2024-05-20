import React from "react";
import "./detailProduct.scss";
import tickCircle from "../../..//../../assets/images/productDetail/productInfo/detailProduct/tick-circle.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetcProductsById } from "../../../../../store/reducers/thunks/productThunk";
// import { getProductsById } from "../../../../../api/products";

function DetailProduct() {
  const dispatch = useDispatch();
  const {
    products: { data },
  } = useSelector((state) => state.products);

  const { id } = useParams();
  React.useEffect(() => {
    dispatch(fetcProductsById(id));
  }, []);


  console.log(data,"forSwipper");

  return (
    <div className="detailProductInfo">
      {data && (
        <p className="productInfo-productname">
          {data?.attributes?.productName}
        </p>
      )}
      {data && (
        <p className="productInfo-productDescription">
          {data?.attributes?.descriptionLong}
        </p>
      )}
      <div className="productInfo-container">
        <div className="specification">
          <p className="specification-title">Specification</p>
          <div className="specifition-row1">
            <p className="specifition-row-pr1">Brand</p>
            <p className="specifition-row-pr2">Logitech</p>
          </div>
          <div className="specifition-row1 specifition-row2">
            <p className="specifition-row-pr1">Type</p>
            <p className="specifition-row-pr2">Wired</p>
          </div>
          <div className="specifition-row1">
            <p className="specifition-row-pr1">Resolution</p>
            <p className="specifition-row-pr2">100-25600 dpi</p>
          </div>
          <div className="specifition-row1 specifition-row2">
            <p className="specifition-row-pr1">Max Speed</p>
            <p className="specifition-row-pr2">40G2</p>
          </div>
          <div className="specifition-row1">
            <p className="specifition-row-pr1">Max Acceleration</p>
            <p className="specifition-row-pr2">300 IPS</p>
          </div>
        </div>
        <div className="inTheBox">
          <p className="inTheBox-title">In The Box</p>
          <div className="inTheBox-row">
            <div className="tick-circle">
              <img src={tickCircle} alt="" />
            </div>
            <p className="inTheBox-row-pr">
              UG502 X LIGHTSPEED Wireless Gaming Mouse
            </p>
          </div>
          <div className="inTheBox-row">
            <div className="tick-circle">
              <img src={tickCircle} alt="" />
            </div>
            <p className="inTheBox-row-pr">DPI-Shift button cover</p>
          </div>
          <div className="inTheBox-row">
            <div className="tick-circle">
              <img src={tickCircle} alt="" />
            </div>
            <p className="inTheBox-row-pr">USB-C charging cable</p>
          </div>
          <div className="inTheBox-row">
            <div className="tick-circle">
              <img src={tickCircle} alt="" />
            </div>
            <p className="inTheBox-row-pr">LIGHTSPEED USB-A receiver</p>
          </div>
          <div className="inTheBox-row">
            <div className="tick-circle">
              <img src={tickCircle} alt="" />
            </div>
            <p className="inTheBox-row-pr">USB extension cable</p>
          </div>
          <div className="inTheBox-row">
            <div className="tick-circle">
              <img src={tickCircle} alt="" />
            </div>
            <p className="inTheBox-row-pr">User Documentation</p>
          </div>
        </div>
        <div className="systemRequired">
          <p className="systemRequired-title">System Required</p>
          <p className="systemRequired-pr">
            - USB port <br />
            - Internet access for optional software <br />
            download <br />
            - Windows® 10 or later <br />- macOS 10.14 or later
          </p>
        </div>
      </div>
      <div className="product-Info-line1 product-Info-line2"></div>
    </div>
  );
}

export default DetailProduct;
