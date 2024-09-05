import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import truncate from 'html-truncate'; // Import html-truncate

const Card = ({ blog }) => {
  if (!blog) {
    return null;
  }

  const { id, title, image, author, published_date, content } = blog;

  // Function to truncate HTML content to 30 words
  const truncateContent = (htmlContent, wordLimit) => {
    const truncated = truncate(htmlContent, wordLimit * 5); // Roughly estimating 5 characters per word for better performance
    return truncated;
  };

  const sanitizedContent = DOMPurify.sanitize(content);
  const truncatedContent = truncateContent(sanitizedContent, 30);

  return (
    <div className="BlogcontentDiv">
      <div className="BlogImg">
        <div className="imgwrapper">
          <div className="sixrationine"></div>
          <Link to={`/blogs/${id}`}>
            <img src={image} alt={title} />
          </Link>
        </div>
      </div>
      <div className="BlogContent">
        <div className='BlogContentTop'>
        <div className="BlogpostDate">
          <div className="updatebyDiv">Uploaded by <span>{author}</span></div>
          <div className="DateDiv">{published_date}</div>
        </div>
        <h3><Link to={`/blogs/${id}`}>{title}</Link></h3>
        <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
        </div>
        <div className='BlogContentcta'>
        <Link to={`/blogs/${id}`} className="cta">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
