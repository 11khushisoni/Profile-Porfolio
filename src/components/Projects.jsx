import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ width: '100vw' }}>
      <section className="projects-section">
        <div className="projects-content" data-aos="fade-up">
          <h1>Projects</h1>
          <p>Here are some of the most impactful projects I’ve worked on recently:</p>

          <div className="project-list">
            <div className="project-card" data-aos="zoom-in" data-aos-delay="100">
              <h3>📦 Vtiger CRM Custom Module</h3>
              <p>
                Built a robust inventory module for managing <strong>shipments and vendor returns</strong>,
                integrated directly into Vtiger CRM.
              </p>
            </div>

            <div className="project-card" data-aos="zoom-in" data-aos-delay="200">
              <h3>📧 Email Sync Automation</h3>
              <p>
                Integrated <strong>Outlook with Vtiger CRM</strong> using IMAP and OAuth2, enabling real-time
                email syncing and activity logging.
              </p>
            </div>

            <div className="project-card" data-aos="zoom-in" data-aos-delay="300">
              <h3>💼 QuickBooks Integration</h3>
              <p>
                Connected <strong>Vtiger CRM with QuickBooks</strong> to automatically sync bills, invoices,
                vendors, and product data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
