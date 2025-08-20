import React from "react";
import "./App.css";
import "./EventsPage.css";

const EventsPage = () => {
  return (
    <div className="events-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <img
            src="https://dev.zeroguess.us/n21/mercedes/wp-content/uploads/2025/05/Legacy-and-Liberation-Collective.png"
            alt="Legacy and Liberation Collective Logo"
            className="logo"
          />
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">What We Do</a></li>
            <li className="active"><a>Events</a></li>
          </ul>
          <div className="nav-buttons">
            <button className="btn btn-contact">Contact</button>
            <button className="btn btn-donate">💛Donate</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F41cd10bea2774aabb55eb3f9a9c500fa?format=webp&width=1200"
          alt="Community Events Hero"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Events</h1>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <button className="btn btn-filter active">All Events</button>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-description">
             lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod temporvnbcvbcvjzb <br></br>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor <br></br>incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="events-grid">
            <div className="event-card">
              <h3 className="event-title">This can be the title for the first featured Event</h3>
              <div className="event-meta">
                <div className="event-date-time">
                  <div className="date-display">
                    <span className="date-number">21</span>
                    <span className="date-month">June</span>
                  </div>
                  <div className="time-display">06:00 PM</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F4469c5529b2c4f748e5b4666ec415c48?alt=media&token=4ca37ee8-ba0e-4a98-a22a-3698c4a7f7c1&apiKey=cd4fd5e950904e7da6c19d18cf59e63e"
                alt="Community Leadership Workshop"
                className="event-image"
              />
              <div className="event-buttons">
                <button className="btn-rsvp">RSVP</button>
                <button className="btn-add-calendar">add to calender</button>
              </div>
            </div>

            <div className="event-card">
              <h3 className="event-title">This can be the title for the second featured event and could also be 3 lines long</h3>
              <div className="event-meta">
                <div className="event-date-time">
                  <div className="date-display">
                    <span className="date-number">07</span>
                    <span className="date-month">July</span>
                  </div>
                  <div className="time-display">10:00 AM</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2Fed847e9c381c47569a1e5489ff9ed92e?alt=media&token=240bba9a-b97c-4eb1-8725-317cbee889ea&apiKey=cd4fd5e950904e7da6c19d18cf59e63e"
                alt="Youth Empowerment Summit"
                className="event-image"
              />
              <div className="event-buttons">
                <button className="btn-rsvp">RSVP</button>
                <button className="btn-add-calendar">add to calender</button>
              </div>
            </div>

            <div className="event-card">
              <h3 className="event-title">This is the third event's title</h3>
              <div className="event-meta">
                <div className="event-date-time">
                  <div className="date-display">
                    <span className="date-number">24</span>
                    <span className="date-month">July</span>
                  </div>
                  <div className="time-display">01:00 PM</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F9d9a781933014b748c20a4a009af4839?alt=media&token=0e236a5b-b27d-4681-b2c9-2182015f58bc&apiKey=cd4fd5e950904e7da6c19d18cf59e63e"
                alt="Cultural Heritage Celebration"
                className="event-image"
              />
              <div className="event-buttons">
                <button className="btn-rsvp">RSVP</button>
                <button className="btn-add-calendar">add to calender</button>
              </div>
            </div>

            <div className="event-card">
              <h3 className="event-title">This can be the title for the first featured Event</h3>
              <div className="event-meta">
                <div className="event-date-time">
                  <div className="date-display">
                    <span className="date-number">15</span>
                    <span className="date-month">Aug</span>
                  </div>
                  <div className="time-display">06:00 PM</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F819c7a56bb1845ffb3f051b8e90b6de6?alt=media&token=fd1c4206-92ec-4410-b1c5-92edaba03cb3&apiKey=cd4fd5e950904e7da6c19d18cf59e63e"
                alt="Financial Literacy Workshop"
                className="event-image"
              />
              <div className="event-buttons">
                <button className="btn-rsvp">RSVP</button>
                <button className="btn-add-calendar">add to calender</button>
              </div>
            </div>

            <div className="event-card">
              <h3 className="event-title">This can be the title for the second featured event and could also be 3 lines long</h3>
              <div className="event-meta">
                <div className="event-date-time">
                  <div className="date-display">
                    <span className="date-number">28</span>
                    <span className="date-month">Aug</span>
                  </div>
                  <div className="time-display">10:00 AM</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F311faa5af18c4fc2a7a7792a00c2c72e?alt=media&token=911f4aa9-de85-4396-a547-fa747d971aaf&apiKey=cd4fd5e950904e7da6c19d18cf59e63e"
                alt="Community Health Fair"
                className="event-image"
              />
              <div className="event-buttons">
                <button className="btn-rsvp">RSVP</button>
                <button className="btn-add-calendar">add to calender</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="events-section past-events-section">
        <div className="container">
          <div className="section-header">
            <button className="btn btn-filter archived">Archived</button>
            <h2 className="section-title">Past Events</h2>
          </div>

          <div className="events-grid past-events-grid">
            <div className="event-card past-event">
              <h3 className="event-title">This can be the title for the second featured event and could also be 3 lines long</h3>
              <div className="event-meta">
                <div className="event-date-time">
                  <div className="date-display">
                    <span className="date-number">15</span>
                    <span className="date-month">May</span>
                  </div>
                  <div className="time-display">09:00 AM</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2Fda77e6e22ead4aadb492a403496343af?alt=media&token=e2e2573a-7aa0-4122-b98a-70990f70b00d&apiKey=cd4fd5e950904e7da6c19d18cf59e63e"
                alt="Spring Community Cleanup"
                className="event-image"
              />
              <div className="event-buttons past">
                <button className="btn-archived">Archieved</button>
              </div>
            </div>

            <div className="event-card past-event">
              <h3 className="event-title">This can be the title for the second featured event and could also be 3 lines long</h3>
              <div className="event-meta">
                <div className="event-date-time">
                  <div className="date-display">
                    <span className="date-number">22</span>
                    <span className="date-month">Apr</span>
                  </div>
                  <div className="time-display">07:00 PM</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F1603d5e3fdbd4924809c4d885413539f?alt=media&token=d1c4a580-be89-456e-bc61-70cf50444e5f&apiKey=cd4fd5e950904e7da6c19d18cf59e63e"
                alt="Annual Scholarship Gala"
                className="event-image"
              />
              <div className="event-buttons past">
                <button className="btn-archived">Archieved</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-left">
              <h2 className="newsletter-title">
                Hot Off the Press,<br/>
                <span className="highlight">Into Your Inbox</span> Every Week!
              </h2>
            </div>
            <div className="newsletter-right">
              <p className="newsletter-description">
                Join our community and never miss out on upcoming events, news updates, and meaningful opportunities to make a difference.
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="email-input"
                  required
                />

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
                <li><a href="#about">ABOUT US</a></li>
                <li><a href="#services">CORE SERVICES</a></li>
                <li><a href="#events">EVENTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
              <div className="footer-nav-row">
                <ul className="footer-nav footer-nav-secondary">
                  <li><a href="#blog">BLOG</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#testimonials">TESTIMONIALS</a></li>
                </ul>
                <div className="footer-contact-section">
                  <div className="social-links">
                    <a href="#" aria-label="Twitter" className="social-link">𝕏</a>
                    <a href="#" aria-label="Instagram" className="social-link">📷</a>
                    <a href="#" aria-label="Facebook" className="social-link">f</a>
                  </div>
                  <p className="contact-email">info@legacyandliberationcollective.com</p>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-left">
                <p className="copyright">© Copyright 2025,Legacy and Liberation Collective</p>
              </div>
              <div className="footer-right">
                <button className="footer-donate-btn">💛Donate</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;
