import React from 'react';
import Navigation from './components/Navigation';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Two-Line Navigation Demo</h1>
        <p>Modern navigation component with smooth animations</p>
      </header>
      
      <Navigation />
      
      <main className="main-content">
        <section className="demo-section">
          <div className="container">
            <h2>Navigation Preview</h2>
            <p>The navigation above demonstrates a clean two-line menu structure:</p>
            <ul>
              <li><strong>First Line:</strong> ABOUT US • CORE SERVICES • EVENTS • CONTACT</li>
              <li><strong>Second Line:</strong> BLOG • FAQ • TESTIMONIALS</li>
            </ul>
            <p>Features include:</p>
            <ul>
              <li>Responsive design that adapts to different screen sizes</li>
              <li>Smooth hover animations and transitions</li>
              <li>Accessibility-focused with proper focus states</li>
              <li>Modern styling that matches the existing design system</li>
              <li>Reusable component architecture</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;