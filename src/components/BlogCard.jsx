// src/components/BlogCard.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="blog-image">
        {/* Placeholder for blog image */}
        <div className="image-placeholder"></div>
      </div>
      <div className="blog-meta">
        <span className="category">{post.category}</span>
        <span className="date">{post.date}</span>
      </div>
      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-excerpt">{post.excerpt}</p>
      <Link to={`/blog/${post.id}`} className="read-more">
        Read More →
      </Link>
    </motion.article>
  );
};

export default BlogCard;