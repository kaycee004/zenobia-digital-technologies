// src/pages/Blog.jsx
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import '../styles/main.scss';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of 3D Printing in Manufacturing',
    excerpt: 'Exploring how 3D printing is revolutionizing production lines and supply chains.',
    date: 'May 15, 2023',
    category: 'Technology',
    image: '3d-printing.jpg',
  },
  {
    id: 2,
    title: 'Choosing the Right Paper Stock for Your Project',
    excerpt: 'A guide to selecting the perfect paper for your printing needs.',
    date: 'April 28, 2023',
    category: 'Materials',
    image: 'paper-stock.jpg',
  },
  {
    id: 3,
    title: 'Sustainable Printing Practices',
    excerpt: 'How we reduce our environmental impact while maintaining quality.',
    date: 'March 10, 2023',
    category: 'Sustainability',
    image: 'sustainable-printing.jpg',
  },
  {
    id: 4,
    title: 'The Psychology of Color in Marketing Materials',
    excerpt: 'How color choices affect customer perception and response.',
    date: 'February 22, 2023',
    category: 'Design',
    image: 'color-psychology.jpg',
  },
  {
    id: 5,
    title: 'Large Format Printing for Maximum Impact',
    excerpt: 'Best practices for creating eye-catching large format prints.',
    date: 'January 15, 2023',
    category: 'Techniques',
    image: 'large-format.jpg',
  },
  {
    id: 6,
    title: 'Packaging That Sells: Design Tips',
    excerpt: 'How to create packaging that protects your product and boosts sales.',
    date: 'December 5, 2022',
    category: 'Design',
    image: 'packaging-design.jpg',
  },
];

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Printing Insights & News
          </motion.h1>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <motion.div
            className="blog-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;