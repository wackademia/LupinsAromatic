import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  ["Home", "home"],
  ["Shop", "catalog"],
  ["About", "about"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--solid" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner">
        <a href="#home" className="nav__logo">
          <img src="/images/logo-mark.jpg" alt="Lupin's Aromatic — home" />
        </a>
        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <button
          className="nav__toggle"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "block", fontSize: 20, lineHeight: 1 }}
              >
                ×
              </motion.span>
            ) : (
              <motion.div
                key="bars"
                className="nav__toggle-bars"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className="nav__toggle-bar" />
                <span className="nav__toggle-bar" />
                <span className="nav__toggle-bar" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.header>
  );
}
