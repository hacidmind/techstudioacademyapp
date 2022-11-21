import React from "react";

import "../../scss/blog.scss";
import { Images } from "../../Icons&Images";
import BlogLists from "../../components/BlogLists";
import BlogCarousel from "../../components/BlogCarousel";
import useGetBlogs from "../../hooks/useGetBlogs";

const Blog = () => {
  const blogs = useGetBlogs();
  return (
    blogs && (
      <main className="blog">
        <section className="blog__section1">
          <article className="blog__section1-article1">
            <p>Get First hand weekly updates from out Team</p>
            <h3>Welcome to Techstudio Blog</h3>
            <div>
              <input type="email" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </article>
          <article className="blog__section1-article2">
            <img src={Images.coffee} alt="coffee" />
          </article>
        </section>
        <section className="blog__section2">
          <BlogCarousel />
        </section>
        <div>
          <p>Older Posts</p>
          <hr />
        </div>
        <section className="blog__section2">
          <BlogLists />
        </section>
      </main>
    )
  );
};

export default Blog;
