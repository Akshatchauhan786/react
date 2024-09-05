import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBlog } from '../../../redux/features/singleBlog/blogSlice';
import { fetchBlogs } from '../../../redux/features/blogs/blogsSlice'; // Adjust the import path as needed
import DOMPurify from 'dompurify'; // Import dompurify
import { Audio } from "react-loader-spinner";

const SingleBlogPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, isLoading: blogLoading, isError: blogError, error: blogErrorMessage } = useSelector((state) => state.singleBlog);
  const { blogs, isLoading: blogsLoading, isError: blogsError, error: blogsErrorMessage } = useSelector((state) => state.blogs);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchBlog(id));
    dispatch(fetchBlogs()); // Fetch latest posts
  }, [dispatch, id]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogs = blogs.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (blogLoading || blogsLoading) {
    return <div className="flex items-center justify-center h-screen center-container">
    <Audio height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass/>
  </div>;
  }

  if (blogError || !blog) {
    return <div>Error: {blogErrorMessage}</div>;
  }

  if (blogsError || !blogs) {
    return <div>Error fetching latest posts: {blogsErrorMessage}</div>;
  }

  return (
    <div>
      <div className="InnerPageBanner">
        <div className="container">
          <h1>{blog.title}</h1>
        </div>
      </div>

      <div className="InnerPage">
        <div className="BlogPage SingleBlogpage">
          <div className="container">
            <div className="SingleBlogrow">
              <div className="SingleblogLhs">
                <div className="BlogcontentDiv">
                  <div className="BlogImg">
                    <div className="imgwrapper">
                      <div className="sixrationine">
                        {/* Specific styling here */}
                      </div>
                      <a href={`/blogs/${id}`}>
                        <img src={blog.image} alt={blog.title} />
                      </a>
                    </div>
                  </div>
                  <div className="BlogContent">
                    <div className="BlogpostDate">
                      <div className="updatebyDiv">Uploaded by <span>{blog.author}</span></div>
                      <div className="DateDiv">{blog.published_date}</div>
                    </div>
                    <h3><a href={`/blogs/${id}`}>{blog.title}</a></h3>
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }} />
                  </div>
                </div>
              </div>
              <div className="SingleblogRhs">
                <div className="BlogSearchbar">
                  <h4>Search</h4>
                  <form>
                    <input
                      type="text"
                      placeholder="Search here..."
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      required=""
                    />
                    <button className="searchbtn" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                  </form>
                </div>
                <div className="recentPostWidget">
                  <h4>Latest Posts</h4>
                  <div className="recentPostWidgetrow">
                    {filteredBlogs.slice(0, 4).map(post => (
                      <div className="postwidgetflex" key={post.id}>
                        <div className="imgwrapper">
                          <div className="sixrationine">
                            {/* Specific styling for image wrapper */}
                          </div>
                          <a href={`/blogs/${post.id}`}>
                            <img src={post.image} alt={post.title} />
                          </a>
                        </div>
                        <div className="recentpostcontent">
                          <p><a href={`/blogs/${post.id}`}>{post.title}</a></p>
                          <div className="monthdayyear">
                            <p><a href={`/blogs/${post.id}`}>{post.published_date}</a></p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
