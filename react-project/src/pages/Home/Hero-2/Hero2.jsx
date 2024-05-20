import React from "react";
import "./hero2.scss";
import ipadImg from "../../../assets/images/homePage/hero2/iPad Air 2020.svg";
import Button from "../../../components/buttons/Button";
function Hero2() {
  return (
    <div className="hero2">
      <div className="hero2-left">
        <img src={ipadImg} alt="" />
      </div>
      <div className="hero2-right">
        <h2 className="hero2-title">Ipad Air Gen 5</h2>
        <p className="hero2-description">
          Lorem ipsum dolor sit amet consectetur. Integer cursus cursus <br />
          in sapien quam risus sed <br />
          diam.
        </p>
        <Button cStyle="hero2-btn1" text="Buy $900" />
        <Button cStyle="hero2-btn2" text="View Detail" />
      </div>
    </div>
  );
}

export default Hero2;
