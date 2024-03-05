import React from "react";
import blogImg from "../images/mini.png";

function LatestArticle() {
  return (
    <section className="latest-article max-width">
      <div className="inner--wrapper">
        <div className="img-container">
          <img src={blogImg} alt="blog image" />
        </div>
        <div className="text-description">
          <header>
          <div className="meta--description">
                  <small className="blog--tag">Frontend</small>
                  <div></div>
                  <small className="blog--time">1 hour ago</small>
                </div>
            <h2 className="blog--title">
              Optimizing CSS for faster page loads{" "}
            </h2>
          </header>
          <p className="blog-short__description">
            Not long ago I decided to improve the loading times of my website.
            It already loads pretty fast, but I knew there was still room for
            improvement and one of them was CSS loading. I will walk you through
            the process and show you how you can improve your load times as
            well.
          </p>
          <div className="bottom--action flex">
            <small className="read--estimation">3 mins read</small>
            <a href="" className="text--link">Read Full <i className="ri-arrow-right-line arrow-icon"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestArticle;
