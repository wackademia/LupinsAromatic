// All product data comes from the Express + MongoDB backend.
const BASE = "/api";

export async function getProducts(params = {}) {
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE}/products${qs ? `?${qs}` : ""}`);
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE}/products/categories`);
  if (!res.ok) throw new Error("Failed to load categories");
  return res.json();
}
