import ProductCard from "./ProductCard.jsx";

export default function Featured({ products }) {
  if (!products.length) return null;
  return (
    <section className="section featured">
      <div className="section__head">
        <p className="section__eyebrow">Handpicked</p>
        <h2 className="section__title">Featured favourites</h2>
      </div>
      <div className="grid grid--3">
        {products.map((p) => (
          <ProductCard key={p._id || p.name} product={p} />
        ))}
      </div>
    </section>
  );
}
