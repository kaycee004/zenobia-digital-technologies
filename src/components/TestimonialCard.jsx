// src/components/TestimonialCard.jsx
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < testimonial.rating ? 'filled' : 'empty'}
          />
        ))}
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="client-info">
        <h4>{testimonial.name}</h4>
        <p>{testimonial.company}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;