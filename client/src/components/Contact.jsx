import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion.js";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Catalog site — no backend mail. Just a friendly confirmation.
    setSent(true);
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact__grid">
        <motion.div
          className="contact__info"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer(0.12)}
        >
          <motion.p className="section__eyebrow" variants={fadeUp}>Say hello</motion.p>
          <motion.h2 className="section__title" variants={fadeUp}>Get in touch</motion.h2>
          <motion.p variants={fadeUp}>Questions about a product or stockists? We'd love to hear from you.</motion.p>
          <motion.ul className="contact__list" variants={fadeUp}>
            <li><span>Email</span>hello@lupinsaromatic.example</li>
            <li><span>Phone</span>+880 000 000000</li>
            <li><span>Studio</span>Dhaka, Bangladesh</li>
          </motion.ul>
          <motion.div className="contact__social" variants={fadeUp}>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Pinterest">Pinterest</a>
          </motion.div>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.p
                key="thanks"
                className="contact__thanks"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Thank you — we'll be in touch soon.
              </motion.p>
            ) : (
              <motion.div
                key="fields"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <label>
                  Name
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="4" required />
                </label>
                <motion.button
                  type="submit"
                  className="btn"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Send message
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
