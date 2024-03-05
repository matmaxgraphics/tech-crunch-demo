import React from "react";
import blogImg from "../images/mini.png";

function AllArticles() {
  return (
    <section className="article-explore max-width">
      <div className="inner--wrapper">
        <h2>Explore Articles</h2>
        <div className="blog-cards__container">
          <div className="blog--card">
            <img src={blogImg} alt="" />
            <article className="blog--description">
              <header>
                <div className="meta--description">
                  <small className="blog--tag">Frontend</small>
                  <div></div>
                  <small className="blog--time">1 hour ago</small>
                </div>
                <h4 className="blog--title">
                  Optimizing CSS for faster page loads{" "}
                </h4>
              </header>
              <p className="blog-short__description">
                Not long ago I decided to improve the loading times of my
                website. It already loads pretty fast, but I knew there was
                still room for improvement and one of them was CSS loading. I
                will walk you through the process and show you how you can
                improve your load times as well.
              </p>
              <div className="bottom--action flex">
                <small className="read--estimation">3 mins read</small>
                <a href="" className="text--link read-more_btn">
                  Read Full <i className="ri-arrow-right-line arrow-icon"></i>
                </a>
              </div>
            </article>
          </div>

          <div className="blog--card">
            <img src={blogImg} alt="" />
            <article className="blog--description">
              <header>
                <div className="meta--description">
                  <small className="blog--tag">Frontend</small>
                  <div></div>
                  <small className="blog--time">1 hour ago</small>
                </div>
                <h4 className="blog--title">
                  Optimizing CSS for faster page loads{" "}
                </h4>
              </header>
              <p className="blog-short__description">
                Not long ago I decided to improve the loading times of my
                website. It already loads pretty fast, but I knew there was
                still room for improvement and one of them was CSS loading. I
                will walk you through the process and show you how you can
                improve your load times as well.
              </p>
              <div className="bottom--action flex">
                <small className="read--estimation">3 mins read</small>
                <a href="" className="text--link read-more_btn">
                  Read Full <i className="ri-arrow-right-line arrow-icon"></i>
                </a>
              </div>
            </article>
          </div>

          <div className="blog--card">
            <img src={blogImg} alt="" />
            <article className="blog--description">
              <header>
                <div className="meta--description">
                  <small className="blog--tag">Frontend</small>
                  <div></div>
                  <small className="blog--time">1 hour ago</small>
                </div>
                <h4 className="blog--title">
                  Optimizing CSS for faster page loads{" "}
                </h4>
              </header>
              <p className="blog-short__description">
                Not long ago I decided to improve the loading times of my
                website. It already loads pretty fast, but I knew there was
                still room for improvement and one of them was CSS loading. I
                will walk you through the process and show you how you can
                improve your load times as well.
              </p>
              <div className="bottom--action flex">
                <small className="read--estimation">3 mins read</small>
                <a href="" className="text--link read-more_btn">
                  Read Full <i className="ri-arrow-right-line arrow-icon"></i>
                </a>
              </div>
            </article>
          </div>
        </div>

        <div className="load-more__cta">
          <button className="btn">Load more articles</button>
        </div>
      </div>
    </section>
  );
}

export default AllArticles;
