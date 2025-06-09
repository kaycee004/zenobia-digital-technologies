// src/components/GalleryItem.jsx
import { motion } from 'framer-motion';

const GalleryItem = ({ item, index }) => {
  return (
    <motion.div
      className="gallery-item"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="image-container">
        {/* Placeholder for gallery image */}
        <div className="image-placeholder"></div>
      </div>
      <div className="overlay">
        <h3>{item.title}</h3>
        <p>{item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
      </div>
    </motion.div>
  );
};

export default GalleryItem;