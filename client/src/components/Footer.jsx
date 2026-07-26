export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#home" className="footer__logo">
          <img src="/images/logo-mark.jpg" alt="Lupin's Aromatic — home" />
        </a>
        <p>© {new Date().getFullYear()} Lupin's Aromatic. All rights reserved.</p>
        <p className="footer__note">A catalog showcase — not a store.</p>
      </div>
    </footer>
  );
}
