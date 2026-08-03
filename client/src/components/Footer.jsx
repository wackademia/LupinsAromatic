import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#home" className="footer__logo">
          <img src="/images/logo-mark.jpg" alt="Lupin's Aromatic — home" />
        </a>
        <p>© {new Date().getFullYear()} Lupin's Aromatic. All rights reserved.</p>
        <p className="footer__note">A catalog showcase — not a store.</p>
      </motion.div>
    </footer>
  );
}
