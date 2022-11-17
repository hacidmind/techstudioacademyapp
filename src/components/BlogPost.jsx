import React from "react";
import { useNavigate } from "react-router-dom";

import { Images } from "../Icons&Images";

const BlogPost = ({date, title, description, id}) => {
  const navigate = useNavigate();

  const handleRouteBlog = (id) => {
    navigate(`/blogPage/${id}`)
  }
  return (
    <section className="blog-post">
      <article className="blog-post-article1">
        <span>{date}</span>
        <h2>{title}</h2>
        <p>{description}<span onClick={()=>handleRouteBlog(id)}>Read All</span>
        </p>
      </article>
      <article className="blog-post-article2">
        <img src={Images.blog} alt="blog" />
      </article>
    </section>
  );
};

export default BlogPost;
