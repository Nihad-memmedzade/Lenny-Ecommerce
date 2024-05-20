import React from "react";
import "./article.scss";
import ArticleCard from "../../../components/articleCard/ArticleCard";
import Button from "../../../components/buttons/Button";
import articleImg1 from "../..//../assets/images/homePage/article/article1.svg";
import articleImg2 from "../..//../assets/images/homePage/article/article2.svg";
import articleImg3 from "../..//../assets/images/homePage/article/article3.svg";
function Article() {
  return (
    <div className="article">
      <div className="article-top">
        <p className="article-title">Lenny’s Article</p>
        <Button cStyle="article-btn" text="View Detail" />
      </div>
      <div className="article-container">
        <ArticleCard
          title="Make your desk more neat and beautiful"
          dsc="Lorem ipsum dolor sit amet consectetur. Arcu
pellentesque etiam scelerisque pharetra id.
Maecenas diam eu amet cras"
          img={articleImg1}
        />
        <ArticleCard
          title="What are the fashion trend in 2023?"
          dsc="Lorem ipsum dolor sit amet consectetur. Arcu
          pellentesque etiam scelerisque pharetra id.
          Maecenas diam eu amet cras"
          img={articleImg2}
        />
        <ArticleCard
          img={articleImg3}
          title="Tips for Work Life Balance "
          dsc="Lorem ipsum dolor sit amet consectetur. Arcu
        pellentesque etiam scelerisque pharetra id.
        Maecenas diam eu amet cras"
        />
      </div>
    </div>
  );
}

export default Article;
