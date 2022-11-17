import React, {useState} from "react";
import ReactPaginate from "react-paginate";
import { GrFormNext } from 'react-icons/gr';

import BlogPost from "./BlogPost";
import useGetBlogs from "../hooks/useGetBlogs";

const BlogLists = () => {
  const blogs = useGetBlogs();
  const [pageNumber, setPageNumber] = useState(0);

  const blogsPerPage = 4;
  const pagesVisited = pageNumber * blogsPerPage;
  const pageCount = Math.ceil(blogs.length / blogsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



  return (
    <>
      {blogs &&
        blogs.slice(pagesVisited, pagesVisited + blogsPerPage).map((item) => (
          <div className="blog-list">
            <BlogPost key={item.id} date={item.date} title={item.title} description={item.desc} id={item.id} />
            <div>
              <hr />
            </div>
          </div>
        ))}
        <ReactPaginate
              previousLabel=""
              nextLabel={<GrFormNext />}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName="paginationBttns"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="next-link"
              activeLinkClassName="paginationActive"
            />
    </>
  );
};

export default BlogLists;
