// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import '../styles/main.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Contact Information</h2>
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Printing Street, Tech City, TC 10001</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>info@zenobiadigital.com</p>
            </div>
            <div className="info-item">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Send Us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          {/* Placeholder for map */}
          <div className="map-placeholder">
            <h3>Our Location</h3>
            <div className="map-frame"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;