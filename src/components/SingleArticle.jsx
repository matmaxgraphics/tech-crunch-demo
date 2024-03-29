import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";
import Navbar from "./Navbar";
import blogImg from "../images/mini.png";

const BASE_URL = "https://techcrunch.com/wp-json/wp/v2";

function SingleArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/posts/${id}?per_page=1`);
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        const articleData = await response.json();

        const strippedArticleData = stripArticleData(articleData);

        setArticle(strippedArticleData);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
      //   console.log(article);
    };
    fetchData();
  }, [id]);

  const stripArticleData = (articleData) => {
    return {
      id: articleData.id,
      date: articleData.date,
      author: articleData.yoast_head_json?.author,
      title: articleData.title?.rendered,
      image: articleData.jetpack_featured_media_url,
      content: articleData.content?.rendered,
    };
  };

  if (error || !article) {
    return (
      <div className="max-width error-message">
        <p>Something went wrong, please try again</p>
      </div>
    );
  }

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <>
      <Navbar />
      <section className="blog--wrapper max-width">
        {isLoading && <SkeletonLoader />}
        {!isLoading && (
          <div className="article--container">
            <h1 className="article--title">{article.title}</h1>
            <div className="meta--description">
              <small
                className="blog--author"
                dangerouslySetInnerHTML={createMarkup(article.author)}
              ></small>
              <div></div>
              <small className="blog--time">{formatDate(article.date)}</small>
            </div>

            <img src={article.image} alt="" className="article--banner" />
            <article
              className="article--main_content"
              dangerouslySetInnerHTML={createMarkup(article.content)}
            ></article>
          </div>
        )}
      </section>
    </>
  );
}

export default SingleArticle;
