import { useState } from "react";
import ProductCard from "./ProductCard.jsx";

export default function Catalog({ products, categories, error }) {
  const [active, setActive] = useState("All");
  const filters = ["All", ...categories];
  const shown =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalog" className="section">
      <div className="section__head">
        <p className="section__eyebrow">The collection</p>
        <h2 className="section__title">Shop all</h2>
      </div>

      {categories.length > 0 && (
        <div className="filters">
          {filters.map((c) => (
            <button
              key={c}
              className={`filter ${active === c ? "is-active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {error && <p className="notice">{error}</p>}
      {!error && shown.length === 0 && (
        <p className="notice">No products yet — add some in the data file and run the seed.</p>
      )}

      <div className="grid grid--4">
        {shown.map((p) => (
          <ProductCard key={p._id || p.name} product={p} />
        ))}
      </div>
    </section>
  );
}
