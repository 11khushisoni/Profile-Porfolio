import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


 export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return (
    <div style={{ width: '100vw' }}>
      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <img src="/public/profile.jpeg" alt="Khushi Profile" className="about-profile-img" />
          </div>
  
          <div className="about-right" data-aos="fade-left">
            <h1>About Me</h1>
            <p className="about-intro" data-aos="fade-up" data-aos-delay="100">
              Hi, I'm <strong>Khushi</strong> — a passionate PHP developer with over 2 years of experience,
              specializing in <strong>Vtiger CRM customization</strong> and web application development.
            </p>
  
            <div className="about-details" data-aos="fade-up" data-aos-delay="200">
              <h2>Key Skills & Experience</h2>
              <ul className="about-list">
                <li data-aos="zoom-in" data-aos-delay="300"> ✔️ 2+ years in PHP and web technologies.</li>
                <li data-aos="zoom-in" data-aos-delay="300">✔️ Deep knowledge of Vtiger CRM modules and customization.</li>
                <li data-aos="zoom-in" data-aos-delay="300">✔️ Created custom modules and workflows using Vtiger’s framework.</li>
                <li data-aos="zoom-in" data-aos-delay="300">✔️ Expert in resolving Vtiger core issues and SQL/database errors.</li>
                <li data-aos="zoom-in" data-aos-delay="300">✔️ Well-versed with roles, permissions, and data sharing rules.</li>
                <li data-aos="zoom-in" data-aos-delay="300">✔️ Focused on writing clean, maintainable code.</li>
                <li data-aos="zoom-in" data-aos-delay="300">✔️ Strong team collaborator and quick learner.</li>
              </ul>
            </div>
  
            <div className="about-what-i-do" data-aos="fade-up" data-aos-delay="400">
              <h2>What I Do</h2>
              <p>
                I help businesses streamline their operations by building and customizing CRM systems that match their workflow.
                Whether it's fixing critical bugs, automating tasks, or adding new features — I love delivering quality solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
  