import React from "react";
import "./merchant.scss";
import logo999 from "../../..//../../assets/images/productDetail/productInfo/merchant/logo.svg";
import chatIcon from "../../..//../../assets/images/productDetail/productInfo/merchant/chat-icon.svg";
import storeIcon from "../../..//../../assets/images/productDetail/productInfo/merchant/store-icon.svg";
import Button from "../../../../../components/buttons/Button";
function Merchant() {
  return (
    <div className="merchant">
      <h1 className="merchant-title">Merchant Information</h1>
      <div className="merchant-container">
        <div className="merchant-left-conteiner">
          <div className="merchant-left-cnt1">
            <div className="merchant-logo">
              <img src={logo999} alt="" className="merchant-logo-img" />
            </div>
          </div>
          <div className="merchant-left-cnt2">
            <p className="merchant-left-cnt2-p1">Logitech Indonesia</p>
            <p className="merchant-left-cnt2-p2">Jakarta Pusat</p>
            <div className="merchant-buttons">
              <Button cStyle="merchant-btn1" text="Top Rated Merchant" />
              <Button cStyle="merchant-btn1" text="Best Merchant" />
            </div>
          </div>
        </div>
        <div className="merchant-right-conteiner">
          <button className="merchant-right-btn1">
            <img src={chatIcon} alt="" />
            Chat
          </button>
          <button className="merchant-right-btn1 merchant-right-btn2">
            <img src={storeIcon} alt="" />
            Visit Merchant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Merchant;
