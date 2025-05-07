import React from 'react';

function Home() {
  return (
    <div style={{ width: '100vw' }}>
    <section className="home-section">
      <div className="home-background">
        <img src="/public/background.avif" alt="Background" />
      </div>
      <div className="home-section-content">
        <h1>Hello, I'm Khushi</h1>
        <p className="subtitle">PHP & Vtiger CRM Developer | Problem Solver | Fast Learner</p>
        <button className="cta-button" onClick={() => window.location.href='/about'}>
          Learn More About Me
        </button>
      </div>
    </section>
    </div>
  );
}

export default Home;
