import React, { useRef } from "react";
import { useState, useEffect } from "react";

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
      console.log(posts);
    };
    fetchData();
  }, [page]);

  if (error) {
    return <div>Something went wrong, please try again</div>;
  }

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };
  //   if(isLoading){
  //     return <div>loading...</div>
  //   }
  return (
    <section className="article-explore max-width">
      <div className="inner--wrapper">
        <h2>Explore Articles</h2>
        <div className="blog-cards__container">
          {isLoading && <div>Loading...</div>}
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
