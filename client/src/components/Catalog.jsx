import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard.jsx";
import { fadeUp } from "../lib/motion.js";

export default function Catalog({ products, categories, error }) {
  const [active, setActive] = useState("All");
  const filters = ["All", ...categories];
  const shown =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalog" className="section">
      <motion.div
        className="section__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <p className="section__eyebrow">The collection</p>
        <h2 className="section__title">Shop all</h2>
      </motion.div>

      {categories.length > 0 && (
        <div className="filters">
          {filters.map((c) => (
            <button
              key={c}
              className={`filter ${active === c ? "is-active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
              {active === c && (
                <motion.span layoutId="filter-pill" className="filter__pill" transition={{ type: "spring", stiffness: 350, damping: 30 }} />
              )}
            </button>
          ))}
        </div>
      )}

      {error && <p className="notice">{error}</p>}
      {!error && shown.length === 0 && (
        <p className="notice">No products yet — add some in the data file and run the seed.</p>
      )}

      <motion.div layout className="grid grid--4">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <ProductCard key={p._id || p.name} product={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
