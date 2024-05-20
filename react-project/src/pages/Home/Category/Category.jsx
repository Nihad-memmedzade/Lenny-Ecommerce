import React from "react";
import "./category.scss";
import CategoryCard from "../../../components/categoryCard/CategoryCard";
import Button from "../../../components/buttons/Button";
import { getCategory } from "../../../api/category";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetCategory } from "../../../store/reducers/thunks/categoryThunk";
import { fetchGetProductsByFilter } from "../../../store/reducers/thunks/productThunk";
import { useNavigate } from "react-router-dom";
function Category() {

  const {
    category: { data },
  } = useSelector((state) => state.category);



  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGetCategory());
  }, [dispatch]);
  console.log(data, "rrrr");



  return (
    <div className="category">
      <div className="category-title">
        <p className="category-pr">Featured Category</p>
        <Button cStyle="category-btn" text="View Detail" />
      </div>
      <div className="category-container">
        {data?.map(({ id, attributes }) => {
          return (
            <CategoryCard
              key={id}
              img={`${import.meta.env.VITE_URL}${
                attributes?.image?.data?.attributes?.url
              }`}
              name={attributes?.title}
              amount={attributes?.amount}
              
            />
          );
        })}
      </div>
 
    </div>
  );
}

export default Category;
