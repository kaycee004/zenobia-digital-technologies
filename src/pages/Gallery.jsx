// src/pages/Gallery.jsx
import { motion } from 'framer-motion';
import GalleryItem from '../components/GalleryItem';
import '../styles/main.scss';

const galleryItems = [
  { id: 1, title: 'Business Cards', category: 'commercial', image: 'business-cards.jpg' },
  { id: 2, title: 'Product Packaging', category: 'packaging', image: 'packaging.jpg' },
  { id: 3, title: 'Event Banner', category: 'large-format', image: 'banner.jpg' },
  { id: 4, title: 'Brochures', category: 'commercial', image: 'brochures.jpg' },
  { id: 5, title: '3D Printed Model', category: '3d-printing', image: '3d-model.jpg' },
  { id: 6, title: 'Poster Design', category: 'large-format', image: 'poster.jpg' },
  { id: 7, title: 'Stationery Set', category: 'commercial', image: 'stationery.jpg' },
  { id: 8, title: 'Retail Display', category: 'packaging', image: 'retail-display.jpg' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'all',
    'commercial',
    'large-format',
    'packaging',
    '3d-printing',
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Work Gallery
          </motion.h1>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <motion.div
            className="gallery-filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map(category => (
              <button
                key={category}
                className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="gallery-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;