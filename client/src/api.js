// All product data comes from the Express + MongoDB backend.
// In dev, Vite proxies /api to localhost:5000 (see vite.config.js).
// In production, set VITE_API_URL to the deployed backend's origin.
const API_URL = import.meta.env.VITE_API_URL || "";
const BASE = `${API_URL}/api`;

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
