import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import starIconProduct from "..//..//..//..//assets/images/homePage/product/star.svg";
import shoppingIcon from "..//..//..//..//assets/images/productList/shopping-cart.svg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./productHero.css";
import { addToShoppingCart } from "../../../../store/reducers/shoppingCartReducer";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ProductHero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const {
    products: { data },
  } = useSelector((state) => state.products);

  function handleAddtoShoppingCart() {
    dispatch(addToShoppingCart({ ...data, isSelected: false }));
  }

  const dataAtributes = data?.attributes;
  const dataId = data?.id;

  const productImages = data?.attributes?.images?.data;

  console.log(data, "productHerooo");
  return (
    <div className="productHero">
      <div className="productHero-left">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <>
            {productImages?.map(({ id, attributes }) => {
              return (
                <SwiperSlide key={id}>
                  <img
                    src={`${import.meta.env.VITE_URL}${attributes?.url}`}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={7}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <>
            {productImages?.map(({ id, attributes }) => {
              return (
                <SwiperSlide className="swiperSlide" key={id}>
                  <img
                    className="swiper-slide-bottom"
                    src={`${import.meta.env.VITE_URL}${attributes?.url}`}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      </div>

      <div className="productHero-right">
        <p className="productHero-right-title">{dataAtributes?.productName}</p>
        <div className="productHero-raiting-sold">
          <div className="productHero-StarIcon">
            <img src={starIconProduct} alt="" />
          </div>
          <span className="productHero-raiting">4,8</span>
          <div className="productHero-raiting-circle"></div>
          <p className="productHero-raiting-p">
            <span className="productHero-raiting-span">1,238</span> Sold
          </p>
        </div>
        <span className="productHero-right-price">
          $ {dataAtributes?.price}
        </span>
        <p className="productHero-right-description">
          G502 X LIGHTSPEED is the latest addition to legendary G502 lineage.
          Featuring our first-ever LIGHTFORCE hybrid optical-mechanical switches
          and updated LIGHTSPEED wireless protocol with 68% faster response
          rate.
        </p>
        <div className="productHero-line"></div>

        <p className="productHero-right">Product Variant :</p>
        <div className="productVariant-cnt">
          <div className="productHero-types">
            <p className="productHero-types-title">Types</p>
            <select className="productHero-types-select">
              <option className="productHero-types-option">Wireless</option>
              <option className="productHero-types-option">Bluetooth</option>
            </select>
          </div>
          <div className="productHero-types">
            <p className="productHero-types-title">Color</p>
            <select className="productHero-types-select">
              <option className="productHero-types-option">Black</option>
              <option className="productHero-types-option">Yellow</option>
            </select>
          </div>
        </div>
        <div className="productHero-right-buttons">
          <button className="productHero-right-btn1">Buy Now</button>
          <button
            className="productHero-right-btn1 productHero-right-btn2"
            onClick={handleAddtoShoppingCart}
          >
            <img src={shoppingIcon} alt="" />
            Add to Chart
          </button>
        </div>
      </div>
    </div>
  );
}
