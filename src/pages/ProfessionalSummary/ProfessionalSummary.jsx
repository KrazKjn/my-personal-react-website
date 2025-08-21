import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/global.css';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import CallToAction from '../../components/CallToAction/CallToAction';
import PdfModal from '../../components/PdfModal/PdfModal';
import PdfLink from '../../components/PdfLink/PdfLink';

const ProfessionalSummary = () => {
  const pdfModalRefSysEngTexaco = useRef();
  const pdfModalRefNSUDiploma2024 = useRef();
  const pdfModalRefNSUDiploma1988 = useRef();
  const pdfModalRefNSUTranscript = useRef();
  const pdfModalRefTulaneTranscript = useRef();
  
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
          <ul className='custom-list'>
            <li><a href="#overview">🧾 Overview</a></li>
            <li><a href="#expertise_approach">🛠️ Expertise & Approach</a></li>
            <li><a href="#skills">🧰 Core Skills</a></li>
            <li><a href="#accomplishments">🌟 Selected Accomplishments</a></li>
            <li><a href="#experience">🧭 Career Journey</a></li>
            <li><a href="#education">🎓 Education</a></li>
            <li><a href="#connect">📬 Let’s Connect & Collaborate</a></li>
            <li><a href="professionalsummaryproblem-solving-profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
                </svg> Real-World Problem Solving</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="overview">
        <p>
          🧾 Results-driven Senior Software Engineer and Engineering Leader with 20+ years of experience architecting scalable solutions and guiding teams in healthcare, enterprise SaaS, and industrial domains.
        </p>
        <p>
          🏆 Proven success in zero-defect releases, modernization, and technical mentorship across distributed environments. Skilled in Microsoft .NET, REST/SOAP services, real-time systems, and leveraging AI tools like Copilot to optimize delivery.
        </p>
        <p>
          🏗️ Passionate about shaping system architecture, mentoring engineers, and building platforms that prioritize reliability, interoperability, and user empathy.
        </p>
      </section>

      <section id="expertise_approach">
        <h2>🛠️ Expertise & Approach</h2>
        <ul className='custom-list'>
          <li><strong>Technical Skills:</strong> Microsoft .NET (C#, VB, C++), REST/SOAP Web Services, ASP.NET, SQL Server, T-SQL, Scripting, Multithreaded Development, Windows API, React, GitHub Actions, Copilot</li>
          <li><strong>Soft Skills:</strong> Team Leadership, Communication, Root Cause Analysis, Agile/SAFe Facilitation, QA and DevOps Alignment</li>
        </ul>
      </section>

      <section id="skills">
        <h2>🧰 Core Skills</h2>
        <div className="skills-columns">
            <div>
            <h4>Technical Skills</h4>
            <ul className='custom-list'>
                {/* Core Development Platforms */}
                <li>Microsoft .NET Ecosystem (C#, VB.NET, C++)</li>
                <li>ASP.NET, Windows API, SQL Server (T-SQL)</li>
                <li>JavaScript Stack: React, TypeScript, Node.js</li>
                <li>Python & Scripting Languages (JSON, YAML, XML)</li>
                <li>Multithreaded Development & Automation Scripting</li>

                {/* DevOps & CI/CD */}
                <li>CI/CD Pipelines: Jenkins, Azure DevOps, GitHub Actions</li>
                <li>Version Control: Git, GitHub, Bitbucket, GitFlow</li>

                {/* APIs & Integration */}
                <li>RESTful & SOAP Web Services</li>
                <li>Copilot & AI-assisted Development Workflows</li>

                {/* Project & Team Tools */}
                <li>Agile Tooling: Jira, Confluence, Team Foundation Server</li>
            </ul>
            </div>

            <div>
            <h4>Soft Skills</h4>
            <ul className='custom-list'>
                {/* Leadership & Mentorship */}
                <li>Strategic Team Leadership across cross-functional initiatives</li>
                <li>Mentoring Engineers at Individual and Team Levels</li>
                <li>Fostering Growth through Technical Coaching and Career Development</li>

                {/* Communication & Collaboration */}
                <li>Clear, Contextual Communication with Stakeholders and Teams</li>
                <li>Facilitating Agile and SAFe Ceremonies with Purpose and Precision</li>
                <li>Driving QA–DevOps Alignment for Seamless Delivery Pipelines</li>

                {/* Problem Solving & Analysis */}
                <li>Root Cause Analysis with a Focus on Long-Term Stability</li>
                <li>Translating Complex Technical Challenges into Actionable Solutions</li>
            </ul>
            </div>

            <div>
            <h4>Delivery Methodologies</h4>
            <ul className='custom-list'>
                {/* Agile & Planning Frameworks */}
                <li>Agile Delivery (Scrum, SAFe) with Scalable Team Facilitation</li>
                <li>Program Increment (PI) Planning for Cross-Team Alignment</li>

                {/* Automation & Quality Strategy */}
                <li>CI/CD Pipeline Automation for Reliable, Repeatable Deployments</li>
                <li>Zero-Defect Release Strategy through Proactive QA Integration</li>

                {/* Testing & Development Practices */}
                <li>Test-Driven Development (TDD) and Context-Driven Development (CDD)</li>
                <li>Backend-for-Frontend (BFF) Architecture for Optimized API Consumption</li>
            </ul>
            </div>
        </div>
      </section>

      <section id="accomplishments">
        <h2>🌟 Selected Accomplishments</h2>
        <ul className='custom-list'>
          <li>Designed and implemented Backend-for-Frontend (BFF) architecture, transitioning a legacy WPF product to React and .NET Core</li>
          <li>Delivered the first two consecutive zero-defect releases, increasing client satisfaction and deployment reliability</li>
          <li>Automated hands-free, full system builds for enterprise platforms—initially developed for the Texaco Desktop and later refined in <a href="it-works">IT Works</a>—reducing setup times by 50–75%</li>
          <li>Reduced refresh cycles from two months to two weeks through managed desktop design, a core capability of <a href="it-works">IT Works</a> and its predecessor</li>
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
        <PdfLink 
            filePath="assets/files/2025 - Strategic Systems Engineering Texaco.pdf"
            title="Strategic Systems Engineering – Texaco"
            linkText="View full legacy story"
            pdfModalRef={pdfModalRefSysEngTexaco} />            
      </section>

      <section id="education">
        <h2>🎓 Education</h2>
        <div class="education-entry">
            <h3>B.S. in Mathematics <span>– Nicholls State University (2024)</span></h3>
            <ul className='custom-list'>
                <li>
                    <PdfLink 
                        filePath="assets/files/NSU - 2024 - Diploma.pdf"
                        title="2024 - B.S. in Mathematics Diploma"
                        linkText="📄 View Diploma"
                        renderAs="link"
                        pdfModalRef={pdfModalRefNSUDiploma2024} />
                </li>
                <li>
                    <PdfLink 
                        filePath="assets/files/NSU - 2024 - No Password 2025-04-23 20_32_56.pdf"
                        title="2024 - NSU Transcipt"
                        linkText="📑 View Transcipt"
                        renderAs="link"
                        pdfModalRef={pdfModalRefNSUTranscript} />
                </li>
            </ul>
            <p><strong>Highlights:</strong> GPA 3.13, Concentration in Mathematics–Computer Science, 164 earned hours</p>
        </div>

        <div class="education-entry">
            <h3>B.S. in Computer Science <span>– Nicholls State University (1988)</span></h3>
            <ul className='custom-list'>
                <li>
                    <PdfLink 
                        filePath="assets/files/NSU - 1988 - Diploma.pdf"
                        title="1988 - B.S. in Computer Science Diploma"
                        linkText="📄 View Diploma"
                        renderAs="link"
                        pdfModalRef={pdfModalRefNSUDiploma1988} />
                </li>
                <li>
                    <PdfLink 
                        filePath="assets/files/NSU - 2024 - No Password 2025-04-23 20_32_56.pdf"
                        title="2024 - NSU Transcipt"
                        linkText="📑 View Transcipt"
                        renderAs="link"
                        pdfModalRef={pdfModalRefNSUTranscript} />
                </li>
            </ul>
            <p><strong>Highlights:</strong> GPA 3.13, Minor in Mathematics & General Business, Internship in Computer Science</p>
        </div>

        <div class="education-entry">
            <h3>Graduate Coursework in Business Administration <span>– Nicholls State University (1989–1990)</span></h3>
            <ul className='custom-list'>
                <li>
                    <PdfLink 
                        filePath="assets/files/NSU - 2024 - No Password 2025-04-23 20_32_56.pdf"
                        title="2024 - NSU Transcipt"
                        linkText="📑 View Transcipt"
                        renderAs="link"
                        pdfModalRef={pdfModalRefNSUTranscript} />
                </li>
            </ul>
            <p><strong>Highlights:</strong> MBA-level coursework in Portfolio Management, Organizational Theory, and Business Research</p>
        </div>

        <div class="education-entry">
            <h3>Graduate Coursework in Computer Science <span>– Tulane University (1991–1992)</span></h3>
            <ul className='custom-list'>
                <li>
                    <PdfLink 
                        filePath="assets/files/Tulane - 1992.pdf"
                        title="1992 - Tulane Transcript"
                        linkText="📑 View Transcript"
                        renderAs="link"
                        pdfModalRef={pdfModalRefTulaneTranscript} />
                </li>
            </ul>
            <p><strong>Highlights:</strong> GPA 3.835, Courses in Analysis of Algorithms and Programming Languages</p>
        </div>
      </section>
      <CallToAction id="connect"/>
      <PdfModal ref={pdfModalRefSysEngTexaco} modalSize="max-width: 900px;" />
      <PdfModal ref={pdfModalRefNSUDiploma2024} modalSize="max-width: 900px;" />
      <PdfModal ref={pdfModalRefNSUDiploma1988} modalSize="max-width: 900px;" />
      <PdfModal ref={pdfModalRefNSUTranscript} modalSize="max-width: 900px;" />
      <PdfModal ref={pdfModalRefTulaneTranscript} modalSize="max-width: 900px;" />
    </div>
  );
};

export default ProfessionalSummary;