import React from "react";
import "./App.css";
import "./EventsPage.css";

const NewsletterFooterPreview = () => {
  return (
    <div className="events-page">
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-left">
              <h2 className="newsletter-title">
                Hot Off the Press, <span className="highlight">Into Your Inbox</span> Every Week!
              </h2>
            </div>
            <div className="newsletter-right">
              <p className="newsletter-description">
                Join the community and never miss out on<br/>
                Upcoming Events, News Updates & much more.
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email address here"
                  className="email-input"
                  required
                />
                <button type="submit" className="newsletter-submit">
                  <span className="arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-top">
              <ul className="footer-nav">
                <li><a href="#about" className="active">ABOUT US</a></li>
                <li><a href="#services">CORE SERVICES</a></li>
                <li><a href="#events">EVENTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
              <ul className="footer-nav footer-nav-secondary">
                <li><a href="#blog">BLOG</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#testimonials">TESTIMONIALS</a></li>
              </ul>
            </div>
            <div className="footer-bottom">
              <div className="footer-left">
                <p className="copyright">© Copyright 2025. Legacy and Liberation Collective</p>
                <p className="contact-email">info@legacyandliberationcollective.com</p>
              </div>
              <div className="footer-right">
                <div className="social-links">
                  <a href="#" aria-label="Twitter" className="social-link">
                    <span className="social-icon">𝕏</span>
                  </a>
                  <a href="#" aria-label="Instagram" className="social-link">
                    <span className="social-icon">📷</span>
                  </a>
                  <a href="#" aria-label="Facebook" className="social-link">
                    <span className="social-icon">f</span>
                  </a>
                </div>
                <button className="footer-donate-btn">
                  <span className="heart-icon">💛</span>
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsletterFooterPreview;