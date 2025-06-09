// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-column">
          <h3>Zenobia Digital</h3>
          <p>Premium printing solutions with cutting-edge technology and exceptional craftsmanship.</p>
          <div className="social-links">
            <a href="www.facebook.com"><FaFacebook /></a>
            <a href="www.x.com"><FaTwitter /></a>
            <a href="www.instagram.com"><FaInstagram /></a>
            <a href="www.linkedin.com"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/blog">Blog</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <a href="printing">Digital Printing</a>
          <a href="large">Large Format Printing</a>
          <a href="3d">3D Printing</a>
          <a href="package">Packaging Solutions</a>
          <a href="graphics">Graphic Design</a>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>Shop 59 & 60 Amsterdam Shopping Complex, Beside Eco bank along Ugbowo-Lagos road
          Benin City, Edo State</p>
          <p>Phone: +234 (906) 380-1503</p>
          <p>Email: info@zenobiadigital.com</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Zenobia Digital Technologies. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;