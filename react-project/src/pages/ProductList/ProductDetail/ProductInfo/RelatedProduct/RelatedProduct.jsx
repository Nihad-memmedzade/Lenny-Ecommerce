import React from "react";
import "./relatedProduct.scss";
import Button from "../../../../../components/buttons/Button";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../../../../../api/products";
import ProductCard from "../../../../../components/productCard/ProductCard";
function RelatedProduct() {
  const dispatch = useDispatch();
    const [productmain, setProduct] = React.useState([]);
    async function fetch() {
      const result = await getProducts(4);
      setProduct(result.data);
    }
    React.useEffect(() => {
      fetch();
    }, []);
  return (
    <div className="relatedProduct">
      <div className="relatedProduct-title-container">
        <h1 className="relatedProduct-title">Related Product</h1>
        <Button cStyle="relatedProduct-btn" text="View Detail"/>
      </div>
      <div className="relatedProduct-container">
      {productmain.map(({ id, attributes }) => {
          return (
            <ProductCard
         id={id}
              key={id}
              img={`${import.meta.env.VITE_URL}${
                attributes.productImage.data.attributes.url
              }`}
              name={attributes.productName}
              price={attributes.price}
              raiting={attributes.raiting}
              dsc={attributes.descriptionShort}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProduct;
