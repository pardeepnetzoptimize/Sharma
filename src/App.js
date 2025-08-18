// src/EventsPage.jsx
import React from "react";
import "./EventsPage.css";

const EventsPage = () => {
  return (
    <div className="events-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <img
            src="https://dev.zeroguess.us/n21/mercedes/wp-content/uploads/2025/05/Legacy-and-Liberation-Collective.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <ul className="nav-links">
          <li>About Us</li>
          <li>What We Do</li>
          <li className="active">Events</li>
        </ul>
        <div className="nav-buttons">
          <button className="btn btn-maroon">Contact</button>
          <button className="btn btn-yellow">Donate</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img
          src="https://i.postimg.cc/fTGKv5Yb/03919944-3c69-11f0-a688-0242ac120003.avif"
          alt="Hero"
          className="hero-img"
        />
        <div className="hero-overlay">
          <h1>Events</h1>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <button className="btn btn-maroon small">All Events</button>
        <h2>Upcoming Events</h2>
        <p className="section-desc">
          Legacy & Liberation Collective offers dynamic, justice-centered organizing and consulting services rooted in power , equity, and long-term movement building.We partner with organizations.

        </p>

        <div className="events-grid">
          {[1, 2, 3, 4, 5,].map((i) => {
            const getEventImage = (index) => {
              const images = [
                "https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F4469c5529b2c4f748e5b4666ec415c48?alt=media&token=4ca37ee8-ba0e-4a98-a22a-3698c4a7f7c1&apiKey=cd4fd5e950904e7da6c19d18cf59e63e",
                "https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2Fed847e9c381c47569a1e5489ff9ed92e?alt=media&token=240bba9a-b97c-4eb1-8725-317cbee889ea&apiKey=cd4fd5e950904e7da6c19d18cf59e63e",
                "https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F9d9a781933014b748c20a4a009af4839?alt=media&token=0e236a5b-b27d-4681-b2c9-2182015f58bc&apiKey=cd4fd5e950904e7da6c19d18cf59e63e",
                "https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F819c7a56bb1845ffb3f051b8e90b6de6?alt=media&token=fd1c4206-92ec-4410-b1c5-92edaba03cb3&apiKey=cd4fd5e950904e7da6c19d18cf59e63e",
                "https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F311faa5af18c4fc2a7a7792a00c2c72e?alt=media&token=911f4aa9-de85-4396-a547-fa747d971aaf&apiKey=cd4fd5e950904e7da6c19d18cf59e63e"
              ];
              return images[index - 1];
            };

            return (
            <div key={i} className="event-card">
              <h3>This can be the title for event {i}</h3>
              <div className="event-meta">
                <span className="date">21 <span  style={{ color: "#D5a372",fontSize: "25px"}}>June</span> <span style={{ color: "#0a0a09ff",fontSize: "15px",marginLeft:"200px"}}>06:00 PM</span></span>
              </div>
              <img src={getEventImage(i)} alt="event" className="event-img" />
              <div className="event-actions">
                <button className="btn btn-maroon small" style={{background: "none",}}>RSVP</button><span style={{marginLeft:"80px",color:"white",marginTop:"20px"}}>Add to calender</span>

              </div>
            </div>
          )})}
        </div>  
      </section>

      {/* Past Events */}
      <section className="events-section">
        <button className="btn btn-maroon small "style={{fontSize: "25px"}}>Archived</button>
        <h2>Past Events</h2>
        <div className="events-grid past">
          {[1, 2].map((i) => {
            const getPastEventImage = (index) => {
              const pastImages = [
                "https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2Fda77e6e22ead4aadb492a403496343af?alt=media&token=e2e2573a-7aa0-4122-b98a-70990f70b00d&apiKey=cd4fd5e950904e7da6c19d18cf59e63e",
                "https://cdn.builder.io/o/assets%2Fcd4fd5e950904e7da6c19d18cf59e63e%2F1603d5e3fdbd4924809c4d885413539f?alt=media&token=d1c4a580-be89-456e-bc61-70cf50444e5f&apiKey=cd4fd5e950904e7da6c19d18cf59e63e"
              ];
              return pastImages[index - 1];
            };

            return (
            <div key={i} className="event-card" >
              <h3 style={{marginRight:"60px"}}>This can be the title for the
               second featured event and could also be 3 lines long {i}</h3>
              <div className="event-meta">
                <span className="date">07<span style={{ color: "#D5a372",fontSize: "25px"}}>July</span><span style={{ color: "#0a0a09ff",fontSize: "15px",marginLeft:"200px"}}>10:00 PM</span></span>

              </div>
              <img
                src={getPastEventImage(i)}
                alt="event"
                className="event-img"
              />
              <button className="btn btn-maroon small mt" style={{background: "none",marginTop:"10px",backgroundColor: "#650015", width:"500px"}}>Archived</button>
            </div>
          )})}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2 style={{marginLeft:"200px", fontSize: "50px", fontWeight: "bold", color: "#650015"}}>
          Hot Off the Press,<br></br>
          <span className="highlight">Into Your Inbox <span style={{color: "#650015"}}>Every Week!</span></span>
        </h2>
    
       
        <div className="newsletter-form">
          
          <input type="email" placeholder="Your email address here" />
          <button className="btn btn-maroon">➤</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <ul>
            <li>About Us</li>
            <li>Core Services</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Testimonials</li>
          </ul>
          <div>
            <p>© Copyright 2025 Legacy and Liberation Collective</p>
            <p>info@legacyandliberationcollective.com</p>
          </div>
          <div className="footer-actions">
            <button className="btn btn-yellow">Donate</button>
            <div className="social-icons">
              <span>📘</span>
              <span>🐦</span>
              <span>📷</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;
