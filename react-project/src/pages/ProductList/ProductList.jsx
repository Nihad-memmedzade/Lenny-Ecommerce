import React from "react";
import "./productList.scss";
import iconProductList from "..//..//assets/images/productList/Vector (2).svg";
import ProductCard from "../../components/productCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetProductsByFilter } from "../../store/reducers/thunks/productThunk";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function ProductList() {
  const {
    products: { data },
  } = useSelector((state) => state.products);
  const [filterProduct, setFilterProduct] = React.useState("");
  const [price, setPrice] = React.useState([]);
  console.log(price, "testt");
  const dispatch = useDispatch();
  function handleChangeFilter(e) {
    if (e.target.checked) {
      setFilterProduct(e.target.value);
    } else {
      setFilterProduct("");
    }
  }

const maxPrice = price[0]
const minPrice  = price[1]
console.log(maxPrice,"ssss");

  React.useEffect(() => {
    dispatch(
      fetchGetProductsByFilter({
        categoryName: filterProduct,
        minPrice: price[0],
        maxPrice: price[1],
      })
    );
  }, [filterProduct, price, dispatch]);

  return (
    <div className="productList">
      <div className="productListFilter">
        <div className="productListFilter-1">
          <div className="productListFilter-1-title">
            <p className="productListFilter-1-p">Category</p>
            <div className="productListFilter-1-img">
              <img src={iconProductList} alt="" />
            </div>
          </div>
          <div className="productListFilter-1-row">
            <input
              type="checkbox"
              value="Electronics"
              className="productListFilter-1-input"
              onChange={handleChangeFilter}
            />
            <p className="productListFilter-1-row-p">Electronic</p>
          </div>
          <div className="productListFilter-1-row">
            <input
              type="checkbox"
              value="Fashion"
              className="productListFilter-1-input"
              onChange={handleChangeFilter}
            />
            <p className="productListFilter-1-row-p">Fashion</p>
          </div>
          <div className="productListFilter-1-row">
            <input
              type="checkbox"
              value="Action Figure"
              className="productListFilter-1-input"
              onChange={handleChangeFilter}
            />
            <p className="productListFilter-1-row-p">Action Figure</p>
          </div>
          <div className="productListFilter-1-row">
            <input
              type="checkbox"
              value="Book"
              className="productListFilter-1-input"
              onChange={handleChangeFilter}
            />
            <p className="productListFilter-1-row-p">Book</p>
          </div>
          <div className="productListFilter-1-row">
            <input
              type="checkbox"
              value="Gaming"
              className="productListFilter-1-input"
              onChange={handleChangeFilter}
            />
            <p className="productListFilter-1-row-p">Gaming</p>
          </div>
        </div>
        <div>
          <div className="sortPrice">
            <p className="sortPrice-title">Price Range</p>
          <div className="prices">
            <div className="priceMin">
              <p className="priceMin-title">Minimum price</p>
              <p className="price1">{minPrice}</p></div>
              <div className="price-line"></div>
            <div className="priceMin">
            <p className="priceMin-title">Maximum price</p>
              <p className="price1">{maxPrice}</p></div>
          </div>
            <Slider
              range
              min={0}
              max={3000}
              startPoint={0}
              onChangeComplete={(e) => setPrice(e)}
            />
          </div>
        </div>
      </div>

      <div className="productBySearch">
        {Array.isArray(data) &&
          data?.map(({ id, attributes }) => {
            return (
              <ProductCard
                id={id}
                key={id}
                img={`${import.meta.env.VITE_URL}${
                  attributes?.productImage?.data?.attributes?.url
                }`}
                name={attributes?.productName}
                price={attributes?.price}
                raiting={attributes?.raiting}
                dsc={attributes?.descriptionShort}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ProductList;
