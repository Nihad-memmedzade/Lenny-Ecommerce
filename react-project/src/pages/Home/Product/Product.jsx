import React from "react";
import "./product.scss";
import ProductCard from "..//../..//components/productCard/ProductCard";
import Button from "../../../components/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProducts } from "../../../store/reducers/thunks/productThunk";

function Product() {
  const dispatch = useDispatch();

  const {
    products: { data },
  } = useSelector((state) => state.products);
  console.log(data, "sssaaallaaaamm");

  const [loadProduct, setLoadProduct] = React.useState({
    more: true,
    less: false,
  });

  React.useEffect(() => {
    dispatch(fetchGetProducts(8));
  }, [dispatch]);

  function clickLoadProductMore() {
    setLoadProduct((prev) => ({ less:true, more: false }));
    dispatch(fetchGetProducts());
  }

  function clickLoadProductLess() {
    setLoadProduct((prev) => ({ more:true, less: false }));

    dispatch(fetchGetProducts(8));
  }

  console.log(loadProduct.more, "+++++++++++ss");

  return (
    <div className="product">
      <div className="product-title">
        <h1 className="product-title1">Popular Product on Lenny</h1>
        <p className="product-title2">
          Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
        </p>
      </div>
      <div className="product-container">
        {Array.isArray(data) &&
          data?.map(({ id, attributes }) => {
            return (
              <ProductCard
                id={id}
                key={id}
                img={`${import.meta.env.VITE_URL}${
                  attributes?.productImage?.data?.attributes?.url
                }`}
                name={attributes.productName}
                price={attributes.price}
                raiting={attributes.raiting}
                dsc={attributes.descriptionShort}
              />
            );
          })}
      </div>
      {loadProduct.more && (
        <Button
          fn={clickLoadProductMore}
          cStyle="productButton"
          text="Load More"
        />
      )}

      {loadProduct.less && (
        <button onClick={clickLoadProductLess} className="productButton">
          Load Less
        </button>
      )}
    </div>
  );
}

export default Product;
