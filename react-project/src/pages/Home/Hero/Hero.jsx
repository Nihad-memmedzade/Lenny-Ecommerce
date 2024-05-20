import React from "react";
import "./Hero.scss";
import Button from "../../../components/buttons/Button";
import heroCardImg from "../../../assets/images/homePage/hero/s 1.svg";
import heroCardMainHeart from "../../../assets/images//homePage/hero/heart-vector.svg";
import heroCardMainStar from "../../../assets/images/homePage/hero/Vector (2).svg";
import heroImg from "../../../assets/images/homePage/hero/image 4.svg";
function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroContainer-left">
        <h1 className="heroContainer-left-title">
          Upgrade Your Wardrobe
          <br />
          With Our Collection
        </h1>
        <p className="heroContainer-left-p">
          Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque
          lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est
          ullamcorper nisl amet non mollis.
        </p>
        <Button cStyle="hero-btn1" text="Buy Now" />
        <Button cStyle="hero-btn2" text="View Detail" />
      </div>
      <div className="heroContainer-right">
        <div className="heroRightImg">
          <img src={heroImg} alt="" />
        </div>
        <div className="heroRightCard">
          <div className="heroRightCircle">
            <div className="heroCircle"></div>
            <div className="heroCircle2"></div>
            <div className="heroLines">
              <div className="heroLine"></div>
              <div className="heroLine"></div>
              <div className="heroLine"></div>
              <div className="heroLine"></div>
            </div>
          </div>
          <div className="heroCardMain">
            <div className="heroCardMain2">
              <div className="heroCardMain2img">
                <div className="heroCardMainHeartImg">
                  <img src={heroCardMainHeart} alt="" />
                </div>

                <img src={heroCardImg} alt="" />
              </div>
            </div>
            <p className="heroCardMain-pr">Green Jacket V2</p>
            <p className="heroCardMain-pr2">Cimahi, Bandung</p>
            <div className="hero-raiting">
              <div className="heroStarImg">
                <img src={heroCardMainStar} alt="" />
              </div>
              <p className="heroRaiting-pr1">4,3</p>
              <p className="heroRaiting-pr1 heroRaiting-pr2">723 Sold</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
