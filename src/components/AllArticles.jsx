import React, { useRef } from "react";
import { useState, useEffect } from "react";

import SkeletonLoader from "./SkeletonLoader";
import BlogCard from "./BlogCard";


import blogImg from "../images/mini.png";

const BASE_URL = "https://techcrunch.com/wp-json/wp/v2";
function AllArticles() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(8);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/posts?per_page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const posts = await response.json();
        

        setPosts(posts);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  if (error) {
    return <div className="max-width error-message"><p>Something went wrong, please try again</p></div>;
  }

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };
  
  
  return (
    <section className="article-explore max-width">
      <div className="inner--wrapper">
        <h2>Explore Articles</h2>
        <div className="blog-cards__container">
          {isLoading && <SkeletonLoader/>}
          {!isLoading &&
            posts.map((post) => <BlogCard key={post.id} post={post} />)}
        </div>

        <div className="load-more__cta">
          <button className="btn" onClick={() => setPage(page + 4)}>
            Load more articles
          </button>
        </div>
      </div>
    </section>
  );
}

export default AllArticles;
