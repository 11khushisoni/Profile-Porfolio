import React from 'react';
// import './App.css';

function Contact() {
  return (
    <div style={{ width: '100vw' }}>
    <section className="contact-section">
      <div className="contact-container">
        <h1>Let's Connect</h1>
        <p className="contact-intro">Whether you have a question or just want to say hello, my inbox is always open.</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-links">
          <p>Email: <a href="mailto:khushi@example.com">khushi@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/khushi" target="_blank">linkedin.com/in/khushi</a></p>
          <p>GitHub: <a href="https://github.com/khushi-dev" target="_blank">github.com/khushi-dev</a></p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
