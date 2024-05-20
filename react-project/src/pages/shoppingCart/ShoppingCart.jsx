import React from "react";
import "./shoppingCart.scss";
import deleteBtn from "..//..//assets/images/shoppingCart/trash.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProduct,
  removeFromCart,
  decreasCart,
  increasCart,
} from "..//..//store/reducers/shoppingCartReducer";
import RelatedProduct from "../ProductList/ProductDetail/ProductInfo/RelatedProduct/RelatedProduct";

function ShoppingCart() {
  const dispatch = useDispatch();

  const { shoppingCartProducts } = useSelector((state) => state.shoppingCart);

  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleCheckboxChange = ({ itemId, isSelected }) => {
    dispatch(selectedProduct({ itemId, isSelected }));
  };

  const handleRemoveCart = (element) => {
    dispatch(removeFromCart(element));
  };

  const handleDecreaseCart = (elem) => {
    dispatch(decreasCart(elem));
  };

  const handleIncreaseCart = (elem) => {
    dispatch(increasCart(elem));
  };

  React.useEffect(() => {
    let newPrice = shoppingCartProducts.reduce(
      (total, { attributes, itemQuantity, isSelected }, qnt) => {
        if (isSelected) {
          qnt = itemQuantity;
          return total + attributes.price * qnt;
        }
        return total;
      },
      0
    );
    console.log("newPrice", newPrice);

    setTotalPrice(newPrice);
  }, [shoppingCartProducts]);
console.log(shoppingCartProducts,"asdasd");
  return (
    <div className="shoppingCart">
      <h1 className="shoppingCart-title">Shopping Chart</h1>
      <div className="shoppingCart-container">
        <div className="shoppingCart-card-cnt">
          {shoppingCartProducts?.map((elem) => {
            return (
              <div className="shoppingCart-card" key={elem.id}>
                <div className="shopping-left">
                <input
                  type="checkbox"
                  className="shopping-check"
                  checked={elem.isSelected}
                  onChange={(e) => {
                    handleCheckboxChange({
                      isSelected: e.target.checked,
                      itemId: elem.id,
                    });
                  }}
                />
                <div className="shoppingCart-img">
                  <img
                    src={`${import.meta.env.VITE_URL}${
                      elem.attributes?.productImage?.data?.attributes?.url
                    }`}
                    alt=""
                  />
                </div>
                <div className="shoppingCart-info">
                  <p className="shoppingCart-productName">
                    {elem.attributes.productName}
                  </p>
                  <p className="shoppingCart-productDsc">
                    {elem.attributes.descriptionShort}
                  </p>
                  <p className="shoppingCart-productPrice">
                    $ {elem.attributes.price}
                  </p>
                </div>
                </div>
              <div className="shopping-bottom">
                <div className="incrementAndDecrement">
                  <button
                    className="decrementBtn"
                    disabled={elem.itemQuantity === 1}
                    onClick={() => handleDecreaseCart(elem)}
                  >
                    -
                  </button>
                  <span className="productQuantity">{elem.itemQuantity}</span>
                  <button
                    className="decrementBtn incrementBtn"
                    onClick={() => handleIncreaseCart(elem)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => {
                    handleRemoveCart(elem);
                  }}
                >
                  <img src={deleteBtn} alt="" />
                </button>
              </div>
              </div>
            );
          })}
        </div>
        <div className="shoppingCart-total-cnt">
          <p className="shoppingCart-total-title">Product Summary</p>
          {shoppingCartProducts.some((item) => item.isSelected) ? (
            shoppingCartProducts.map(({ attributes, isSelected, id }) => {
              if (isSelected) {
                return (
                  <div className="shoppingCart-total-price" key={id}>
                    <p className="total-ProductName">
                      {attributes.productName}
                    </p>
                    <span className="total-price-product">
                      $ {attributes.price}
                    </span>
                  </div>
                );
              }
            })
          ) : (
            <p className="selectedProduct-name">No product selected</p>
          )}

          <div className="shoppingCart-line"></div>
          <div className="shoppingCart-total-price">
            <p className="total-price-p">Total Price</p>
            <span className="total-price">$ {totalPrice}</span>
          </div>
          <div className="shoppingCart-total-price">
            <p className="total-price-p">Total Price (Discount)</p>
            <span className="total-price">$ 0</span>
          </div>
          <div className="shoppingCart-total-price">
            <p className="total-price-p">Tax & Fee</p>
            <span className="total-price">$ 0</span>
          </div>
          <div className="shoppingCart-line"></div>
          <div className="shoppingCart-total-price">
            <p className="total-price-p2">Total Price</p>
            <span className="total-price2">$ {totalPrice}</span>
          </div>

          <button className="checkBtn">Checkout</button>
        </div>
      </div>
      <RelatedProduct/>
    </div>

  );
}

export default ShoppingCart;

// {shoppingCartSelectedProduct&& shoppingCartSelectedProduct.map(({id,attributes})=>{
//   return
// })}
