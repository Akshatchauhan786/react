// /* eslint-disable no-undef */
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { fetchRelatedBlogs } from "../../redux/features/relatedBlogs/relatedBlogsSlice";
// import { fetchRelatedBlogs } from "C:/Users/admin/OneDrive/Desktop/Afno/Afno/src/redux/features/relatedBlogs/relatedBlogsSlice.js";
// import RelatedBlogCard from "./RelatedBlogCard";

import React from 'react';

const PopularBlog = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <div>No popular blogs available</div>;
  }

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularBlog;
