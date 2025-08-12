import React from 'react';
import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import Accordion from '../../components/Accordion/Accordion';
import CallToAction from '../../components/CallToAction/CallToAction';

const LegacyProfile = () => {
    return (
        <article className="container legacy-profile" role="region" aria-labelledby="legacy-title">
            <GitHubLink filePath="pages/LegacyProfile/LegacyProfile.jsx" />

            <h2 id="legacy-title" className="section-title">
                <svg className="text-primary me-2" width="20" height="20" fill="whitesmoke" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 1 .5.5v4h3a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
                </svg>
                Legacy Systems Engineering
            </h2>

            <p>
                Senior Architect and Infrastructure Strategist with proven success stabilizing and modernizing COBOL and FORTRAN 77
                platforms across SCADA, ICS, and compliance-heavy industrial environments. Adept at translating vintage logic into 
                maintainable, interoperable systems while mentoring teams and guiding resilient modernization trajectories. Specialized 
                in integrating legacy components into automated stacks and preserving mission-critical reliability through pragmatic 
                engineering.
            </p>

            <div className="skills-grid">
                <div><strong>Languages:</strong> COBOL (Wang VS), FORTRAN 77, VBScript, Win32 API</div>
                <div><strong>Systems:</strong> TDACS, ScreenPack & GraphPack, Honeywell Hiway/Gateway, GPCI Interface</div>
                <div><strong>Architectural Skills:</strong> Legacy system integration, data acquisition workflows, control logic stabilization, telemetry support</div>
                <div><strong><u>Operational Impact</u>:</strong> Diagnosing persistent logic errors, refactoring for maintainability, restoring designed performance</div>
                <div><strong>Modernization Strategy:</strong> Registry hive edits in WinPE, automation workflows, hybrid architecture alignment with Azure</div>
            </div>

            <Accordion title="COBOL – Union Carbide (1988–1989)">
                <ul className='custom-list'>
                    <li>Created structured data files using proprietary layout tools and built character-based, menu-driven interfaces</li>
                    <li>Developed multi-screen logic and screen-flow orchestration with validation rules</li>
                    <li>Produced standardized reports for compliance-heavy environments</li>
                    <li>Worked part-time during semesters and full-time during breaks, contributing to core systems</li>
                </ul>
            </Accordion>

            <Accordion title="FORTRAN 77 – Texaco TDACS (1990–1996)">
                <ul className='custom-list'>
                    <li>Built character and graphical UIs with menu-based navigation using ScreenPack and GraphPack</li>
                    <li>Refactored legacy modules and resolved control logic issues</li>
                    <li>Fixed memory leaks and faulty transforms in Honeywell Gateway (DDT integration)</li>
                    <li>Stabilized real-time shared memory usage in TDACS “Commons”</li>
                </ul>
            </Accordion>

            <Accordion title="Modernization Impact">
                <ul className='custom-list'>
                    <li>Migrated physical platforms to virtual environments using WinPE workflows</li>
                    <li>Created intelligent patch/config systems to resolve legacy faults</li>
                    <li>Modularized monolithic utilities for hybrid environments</li>
                </ul>
            </Accordion>

            <Accordion title="Case Study – IT Works System Management Platform">
                <ul className='custom-list'>
                    <li>Designed and deployed across industrial networks to reduce downtime and improve satisfaction</li>
                    <li>Developed Builder, Servicer, Manager, Architecter components</li>
                    <li>Implemented a 3-year lease model with annual refresh cycles</li>
                    <li>Created Smart Packaging logic for dynamic deployments</li>
                    <li>Centralized printing infrastructure to reduce cost</li>
                    <li>Enforced least-privilege security across user systems</li>
                    <li>Delivered consistent, high-uptime experiences</li>
                    <li>Platform remains relevant and could be modernized for Linux/UNIX</li>
                </ul>
            </Accordion>

            <iframe
                src={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Legacy Technology.pdf`}
                className="pdf-viewer"
                title="Legacy Resume"
            ></iframe>

            <div className="download-link text-center">
                <a
                    className="btn btn-primary"
                    href={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Legacy Technology.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📄 Download Legacy Addendum (PDF)
                </a>
            </div>

            <p className="mt-4">
                For more details on the IT Works system management platform, visit the <Link to="/it-works">IT Works page</Link>.
            </p>

            <CallToAction
                title="Ready to modernize your legacy systems?"
                description="Let’s discuss how we can stabilize and enhance your infrastructure with proven strategies."
                buttonText="Contact Me"
                buttonLink="mailto:mark@yourdomain.com?subject=Legacy%20Systems%20Inquiry"
            />
        </article>
    );
};

export default LegacyProfile;
