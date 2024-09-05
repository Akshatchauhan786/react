// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchBlogs } from '../../redux/features/blogs/blogsSlice';
// import { fetchBlogs } from 'C:/Users/admin/OneDrive/Desktop/Afno/Afno/src/redux/features/blogs/blogsSlice.js';
// import Card from './Card';

import React from 'react';
import Card from './Card';

const PostCards = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <div>No post cards available</div>;
  }

  return (
    <div>
      {blogs.map((blog) => (
        <Card key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default PostCards;
