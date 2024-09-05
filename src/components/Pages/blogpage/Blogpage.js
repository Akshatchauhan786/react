import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../../redux/features/blogs/blogsSlice"; // Adjusted relative path
import { Audio } from "react-loader-spinner";

import Card from "../blogs/Card";

const Blogpage = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Replace loading state with a loader animation
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen center-container">
        <Audio height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass/>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  // Calculate the current page's blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render pagination only if there are more than blogsPerPage blogs
  const shouldRenderPagination = blogs.length > blogsPerPage;

  return (
    <div className="">
      <div className="InnerPageBanner">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="BlogPage">
        <div className="container">
          <div className="Blogrow">
            {currentBlogs.map((blog) => (
              <Card key={blog.id} blog={blog} />
            ))}
          </div>
          {shouldRenderPagination && (
            <div className="flex justify-center gaginationDiv">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="mx-1 px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
