import React from 'react';

const RelatedBlogCard = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <div>No related blogs available</div>;
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

export default RelatedBlogCard;
