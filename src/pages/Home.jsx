// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Premium Printing Solutions</h1>
            <p>Transforming your ideas into stunning printed materials with cutting-edge technology.</p>
            <Link to="/contact" className="cta-button">
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {[
              {
                title: 'Digital Printing',
                description: 'High-quality digital prints for all your needs.',
                icon: '🖨️',
              },
              {
                title: 'Large Format Printing',
                description: 'Banners, posters, and signage for maximum impact.',
                icon: '📏',
              },
              {
                title: '3D Printing',
                description: 'Bring your designs to life with our 3D printing services.',
                icon: '🧊',
              },
              {
                title: 'Packaging Solutions',
                description: 'Custom packaging that makes your product stand out.',
                icon: '📦',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-content"
          >
            <h2>About Zenobia Digital Technologies</h2>
            <p>
              Founded in 2015, Zenobia Digital Technologies has been at the forefront of printing
              innovation. We combine traditional craftsmanship with cutting-edge technology to
              deliver exceptional results for our clients.
            </p>
            <Link to="/contact" className="cta-button secondary">
              Learn More
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-image"
          >
            {/* Placeholder for about image */}
            <div className="image-placeholder"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;