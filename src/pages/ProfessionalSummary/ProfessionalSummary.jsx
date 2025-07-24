import React from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/global.css';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import CallToAction from '../../components/CallToAction/CallToAction';

const ProfessionalSummary = () => {
  return (
    <div className="container">
      <ResizableBackground />
      <GitHubLink filePath="pages/ProfessionalSummary/ProfessionalSummary.js" />
      <Helmet>
        <title>Mark J. Hogan - Professional Summary</title>
      </Helmet>

      <header>
        <h1>🧠 Professional Summary</h1>
        <nav className="toc-nav">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#expertise_approach">🚀 Expertise & Approach</a></li>
            <li><a href="#skills">🧰 Core Skills</a></li>
            <li><a href="#accomplishments">🌟 Selected Accomplishments</a></li>
            <li><a href="#experience">🧭 Career Journey</a></li>
            <li><a href="#education">🎓 Education</a></li>
            <li><a href="#connect">📬 Let’s Connect & Collaborate</a></li>
          </ul>
        </nav>
      </header>

      <section id="overview">
        <p>
          Results-driven Senior Software Engineer and Engineering Leader with 20+ years of experience architecting scalable solutions and guiding teams in healthcare, enterprise SaaS, and industrial domains.
        </p>
        <p>
          Proven success in zero-defect releases, modernization, and technical mentorship across distributed environments. Skilled in Microsoft .NET, REST/SOAP services, real-time systems, and leveraging AI tools like Copilot to optimize delivery.
        </p>
        <p>
          Passionate about shaping system architecture, mentoring engineers, and building platforms that prioritize reliability, interoperability, and user empathy.
        </p>
      </section>

      <section id="expertise_approach">
        <h2>🚀 Expertise & Approach</h2>
        <ul>
          <li><strong>Technical Skills:</strong> Microsoft .NET (C#, VB, C++), REST/SOAP Web Services, ASP.NET, SQL Server, T-SQL, Scripting, Multithreaded Development, Windows API, React, GitHub Actions, Copilot</li>
          <li><strong>Soft Skills:</strong> Team Leadership, Communication, Root Cause Analysis, Agile/SAFe Facilitation, QA and DevOps Alignment</li>
        </ul>
      </section>

      <section id="skills">
        <h2>🧰 Core Skills</h2>
        <div className="skills-columns">
            <div>
            <h4>Technical Skills</h4>
            <ul>
                <li>Microsoft .NET (C#, VB, C++)</li>
                <li>REST/SOAP Web Services</li>
                <li>ASP.NET, SQL Server, T-SQL</li>
                <li>Scripting & Multithreaded Development</li>
                <li>Windows API, React, GitHub Actions</li>
                <li>Copilot & AI-assisted development</li>
            </ul>
            </div>

            <div>
            <h4>Soft Skills</h4>
            <ul>
                <li>Team Leadership</li>
                <li>Clear Communication</li>
                <li>Root Cause Analysis</li>
                <li>Agile/SAFe Facilitation</li>
                <li>QA and DevOps Alignment</li>
            </ul>
            </div>

            <div>
            <h4>Delivery Methodologies</h4>
            <ul>
                <li>Agile (Scrum, SAFe)</li>
                <li>Program Increment (PI) Planning</li>
                <li>CI/CD Automation</li>
                <li>Zero-Defect Release Strategy</li>
                <li>TDD / CDD Practices</li>
                <li>Backend-for-Frontend (BFF) Architecture</li>
            </ul>
            </div>
        </div>
      </section>

      <section id="accomplishments">
        <h2>🌟 Selected Accomplishments</h2>
        <ul>
          <li>Designed and implemented Backend-for-Frontend (BFF) architecture, transitioning a legacy WPF product to React and .NET Core</li>
          <li>Delivered the first two consecutive zero-defect releases, increasing client satisfaction and deployment reliability</li>
          <li>Automated hands-free, full system builds for enterprise platforms, reducing setup times by 50–75%</li>
          <li>Reduced refresh cycles from two months to two weeks through managed desktop design</li>
          {/* We can append additional Manager/Architect/Engineer content here */}
        </ul>
      </section>

      <section id="experience">
        <h2>🧭 Career Journey</h2>

        <h3><strong>Accruent</strong> Sep 2018 – Dec 2024</h3>
        <p>Led end-to-end engineering lifecycle from design and architecture to QA testing and CI/CD deployment. Prototyped BFF transition in five months and guided backlog remediation resolving 150+ technical issues. Mentored engineers across global time zones, fostering a scalable and collaborative team culture.</p>

        <h3><strong>General Dynamics IT</strong> Feb 2016 – Jun 2018</h3>
        <p>Architected and automated release pipelines using C#, Python, JSON, Jenkins/Groovy. Developed TFS-integrated reporting solutions to streamline operations and internal workflows</p>

        <h3><strong>System Management Technologies</strong> Mar 1999 – Feb 2016</h3>
        <p>Built and deployed the IT Works suite for system automation, configuration modeling, and technician workflow efficiency</p>

        <h3><strong>Texaco, Inc.</strong> Jan 1997 – Mar 1999</h3>
        <p>Implemented real-time distributed control systems and optimized refresh cycle workflows with a plant-wide desktop solution</p>
      </section>

      <section id="education">
        <h2>🎓 Education</h2>
        <ul>
          <li>B.S. in Mathematics – Nicholls State University</li>
          <li>B.S. in Computer Science – Nicholls State University</li>
        </ul>
      </section>
      <CallToAction id="connect"/>
    </div>
  );
};

export default ProfessionalSummary;