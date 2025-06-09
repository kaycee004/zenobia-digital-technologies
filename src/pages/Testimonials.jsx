// src/pages/Testimonials.jsx
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import '../styles/main.scss';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Creative Designs Co.',
    text: 'Zenobia Digital transformed our marketing materials with their exceptional printing quality. The colors were vibrant and exactly matched our brand guidelines.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Tech Innovations LLC',
    text: 'The 3D printing services helped us create perfect prototypes for our product. Fast turnaround and excellent attention to detail.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Event Masters',
    text: 'Our event banners and signage printed by Zenobia were stunning. They handled our last-minute request with professionalism.',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Wilson',
    company: 'Wilson & Associates',
    text: 'Consistently high-quality business cards and stationery. They understand the importance of premium materials for professional branding.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h1>
        </div>
      </section>

      <section className="testimonials-content">
        <div className="container">
          <motion.div
            className="testimonials-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to Experience Our Quality?</h2>
            <p>Join our satisfied clients and let us bring your printing projects to life.</p>
            <a href="/contact" className="cta-button">
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;