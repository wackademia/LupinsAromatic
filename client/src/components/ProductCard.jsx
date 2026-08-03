import { forwardRef, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import CardCanvas from "../three/CardCanvas.jsx";

const ProductCard = forwardRef(function ProductCard({ product, index = 0 }, forwardedRef) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  function setRefs(node) {
    ref.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 220, damping: 22 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.article
      ref={setRefs}
      layout
      className="card"
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.25 } }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card__media">
        <CardCanvas image={product.image} hovered={hovered} />
      </div>
      <div className="card__body">
        <span className="card__cat">{product.category}</span>
        <h3 className="card__name">{product.name}</h3>
        {product.description && <p className="card__desc">{product.description}</p>}
        <p className="card__price">৳{Number(product.price).toLocaleString("en-BD")}</p>
      </div>
    </motion.article>
  );
});

export default ProductCard;
