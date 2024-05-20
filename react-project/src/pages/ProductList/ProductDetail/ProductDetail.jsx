import React from "react";
import "./productDetail.scss";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../../api/products";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductHero from "./ProductHero/ProductHero";
import { useSelector } from "react-redux";

function ProductDetail() {
  const [singleProduct, setSingleProduct] = React.useState();
  const {
    products: { data },
  } = useSelector((state) => state.products);

  console.log(data, "tessstt");
  const { id } = useParams();
  console.log(id, "ididididididid");

  const fetch = async () => {
    const res = await getProductsById(id);
    setSingleProduct(res.data);
  };

  React.useEffect(() => {
    fetch();
    window.scrollTo(0, 0);
  }, []);
  console.log(singleProduct);
  return (
    <div className="productDetail">
      <ProductHero />
      <ProductInfo />
    </div>
  );
}

export default ProductDetail;
