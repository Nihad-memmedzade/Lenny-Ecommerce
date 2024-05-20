import React from "react";
import "./categoryCard.scss";
import { fetchGetProductsByFilter } from "../../store/reducers/thunks/productThunk";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { route1 } from "../../routes/route1";

function CategoryCard({ img, name, amount }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  const [categorydata, setCategory] = React.useState("");
  const [data1, setData1] = React.useState("");

  console.log(categorydata, "testCtg");

  // const apiUrl = `http://localhost:1337/api`;

  //  async function filterCategory(){
  //   const getCategory = await fetch(`${apiUrl}/product-list/products?&filters[categories][title][$eq]=${categorydata}`)
  //   let result = await getCategory.json();
  // setData1(result)
  // }
  // console.log(data1,"asdasdasdasdasd");

  function categoryFilter() {
    dispatch(fetchGetProductsByFilter({ categoryName: categorydata }));
  }

  return (
    <div
      className="categoryCard"
      onClick={() => {
        setCategory(name);
        navigate(route1.ProductList);
        categoryFilter()
     
      }}
    >
      <div className="categoryCardImg">
        <img src={img} alt="" />
      </div>
      <p className="categoryCard-productName">{name}</p>
      <p className="categoryCard-productAmount">{amount}k products</p>
    </div>
  );
}

export default CategoryCard;
