import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  shoppingCartProducts: [],
  shoppingCartTotalQuantity: 0,
  shoppingCartTotalAmount: 0,
  shoppingCartSelectedProduct: [],
};

export const shoppingCartReducer = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToShoppingCart: (state, { payload }) => {
      const itemIndex = state.shoppingCartProducts.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex >= 0) {
        state.shoppingCartProducts[itemIndex].itemQuantity += 1;
        toast.info(
          `Increased ${state.shoppingCartProducts[itemIndex].attributes.productName} quantity`,
          {
            position: "bottom-right",
          }
        );
      } else {
        const tempProduct = { ...payload, itemQuantity: 1 };
        state.shoppingCartProducts.push(tempProduct);
        toast.success(`${payload.attributes.productName} Added`, {
          position: "bottom-right",
        });
      }
    },
    selectedProduct: (state, { payload }) => {
      const updatedProducts = state.shoppingCartProducts.map((product) => {
        if (payload.itemId === product.id) {
          return {
            ...product,
            isSelected: payload.isSelected,
          };
        }
        return product;
      });
      state.shoppingCartProducts = updatedProducts;
    },
    removeFromCart: (state, { payload }) => {
      const nextCartItem = state.shoppingCartProducts.filter(
        (shoppingCartProducts) => shoppingCartProducts.id !== payload.id
      );
      state.shoppingCartProducts = nextCartItem;
    },
    decreasCart: (state, { payload }) => {
      const updatedProducts = state.shoppingCartProducts.map((product) => {
        if (payload.id === product.id) {
          const count =
            product.itemQuantity > 1
              ? product.itemQuantity - 1
              : product.itemQuantity;
          return {
            ...product,
            itemQuantity: count,
          };
        }
        return product;
      });
      state.shoppingCartProducts = updatedProducts;
    },
    increasCart: (state, { payload }) => {
      const updatedProducts = state.shoppingCartProducts.map((product) => {
        if (payload.id === product.id) {
          const count = product.itemQuantity + 1;
          console.log("count", count);
          return {
            ...product,
            itemQuantity: count,
          };
        }
        return product;
      });
      state.shoppingCartProducts = updatedProducts;
    },
  },
});

export const {
  addToShoppingCart,
  selectedProduct,
  removeFromCart,
  decreasCart,
  increasCart,
} = shoppingCartReducer.actions;

export default shoppingCartReducer.reducer;
