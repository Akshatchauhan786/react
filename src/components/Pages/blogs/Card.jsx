import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import truncate from 'html-truncate';

const Card = ({ blog }) => {
  if (!blog) {
    return null;
  }

  const { slug, title, image, author, published_date, content } = blog;

  // Function to truncate HTML content to 30 words
  const truncateContent = (htmlContent, wordLimit) => {
    const truncated = truncate(htmlContent, wordLimit * 5); // Roughly estimating 5 characters per word for better performance
    return truncated;
  };

  const sanitizedContent = DOMPurify.sanitize(content);
  const truncatedContent = truncateContent(sanitizedContent, 30);

  // Function to format the date to mm-dd-yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const formattedDate = formatDate(published_date);

  return (
    <div className="BlogcontentDiv">
      <div className="BlogImg">
        <div className="imgwrapper">
          <div className="sixrationine"></div>
          <Link to={`/blogs/${slug}`}>
            <img src={image} alt={title} />
          </Link>
        </div>
      </div>
      <div className="BlogContent">
        <div className='BlogContentTop'>
          <div className="BlogpostDate">
            <div className="updatebyDiv">Uploaded by <span>{author}</span></div>
            <div className="DateDiv">{formattedDate}</div>
          </div>
          <h3><Link to={`/blogs/${slug}`}>{title}</Link></h3>
          <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
        </div>
        <div className='BlogContentcta'>
          <Link to={`/blogs/${slug}`} className="cta">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
