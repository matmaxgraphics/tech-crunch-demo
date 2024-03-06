import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ post }) {
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <div className="blog--card" key={post.id}>
      <img src={post.jetpack_featured_media_url} alt="" />
      <article className="blog--description">
        <header>
          <div className="meta--description">
            <small className="blog--tag">{post.primary_category.name}</small>
            <div></div>
            <small className="blog--time">{formatDate(post.date)}</small>
          </div>
          <h4 className="blog--title">{post.title.rendered}</h4>
        </header>
        <p
          className="blog-short__description truncate"
          dangerouslySetInnerHTML={createMarkup(post.content.rendered)}
        />
        <div className="bottom--action flex">
          <small className="read--estimation">3 mins read</small>
          <Link to={`/single-article/${post.id}`} className="text--link read-more_btn">
            Read Full <i className="ri-arrow-right-line arrow-icon"></i>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
