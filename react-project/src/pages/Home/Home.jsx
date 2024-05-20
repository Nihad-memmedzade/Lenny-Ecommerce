import React from "react";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import Product from "./Product/Product";
import Hero2 from "./Hero-2/Hero2";
import "./Home.scss";
import Article from "./Article/Article";


function Home() {


  return (
    <div className="home">
      <Hero />
      <Category />
      <Product />
      <Hero2 />
      <Article />
    </div>
  );
}

export default Home;
