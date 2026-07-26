import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Featured from "./components/Featured.jsx";
import Catalog from "./components/Catalog.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { getProducts, getCategories } from "./api.js";

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("Could not reach the catalog API."));
    getCategories()
      .then(setCategories)
      .catch(() => {});
  }, []);

  const featured = products.filter((p) => p.featured);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured products={featured.length ? featured : products.slice(0, 3)} />
        <Catalog products={products} categories={categories} error={error} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
