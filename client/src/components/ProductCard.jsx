export default function ProductCard({ product }) {
  return (
    <article className="card">
      <div className="card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="card__body">
        <span className="card__cat">{product.category}</span>
        <h3 className="card__name">{product.name}</h3>
        {product.description && (
          <p className="card__desc">{product.description}</p>
        )}
        <p className="card__price">৳{Number(product.price).toLocaleString("en-BD")}</p>
      </div>
    </article>
  );
}
