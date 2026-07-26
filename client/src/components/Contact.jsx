import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Catalog site — no backend mail. Just a friendly confirmation.
    setSent(true);
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact__grid">
        <div className="contact__info">
          <p className="section__eyebrow">Say hello</p>
          <h2 className="section__title">Get in touch</h2>
          <p>Questions about a product or stockists? We'd love to hear from you.</p>
          <ul className="contact__list">
            <li><span>Email</span>hello@lupinsaromatic.example</li>
            <li><span>Phone</span>+880 000 000000</li>
            <li><span>Studio</span>Dhaka, Bangladesh</li>
          </ul>
          <div className="contact__social">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Pinterest">Pinterest</a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {sent ? (
            <p className="contact__thanks">Thank you — we'll be in touch soon.</p>
          ) : (
            <>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" required />
              </label>
              <button type="submit" className="btn">Send message</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
