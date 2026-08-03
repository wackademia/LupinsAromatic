import { motion } from "framer-motion";
import ProductCard from "./ProductCard.jsx";
import { fadeUp } from "../lib/motion.js";

export default function Featured({ products }) {
  if (!products.length) return null;
  return (
    <section className="section featured">
      <motion.div
        className="section__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <p className="section__eyebrow">Handpicked</p>
        <h2 className="section__title">Featured favourites</h2>
      </motion.div>
      <div className="grid grid--3">
        {products.map((p, i) => (
          <ProductCard key={p._id || p.name} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
