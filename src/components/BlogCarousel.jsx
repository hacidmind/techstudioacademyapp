import React from "react";
import Carousel from "react-bootstrap/Carousel";

import useAppProvider from "../hooks/useAppProvider";
import BlogPost from "./BlogPost";

const BlogCarousel = () => {
  const { blogs } = useAppProvider();

  return (
    <Carousel controls={false} variant="dark">
      {blogs.map((item) => (
        <Carousel.Item>
          <BlogPost
            key={item.id}
            date={item.date}
            title={item.title}
            description={item.desc}
            id={item.id}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BlogCarousel;
