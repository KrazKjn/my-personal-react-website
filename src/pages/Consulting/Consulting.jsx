import React, { useContext } from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import './Consulting.css'; // Optional for scoped styles
import { SiteConfigContext } from '../../context/SiteConfigContext';

const Consulting = () => {
    const gitHubLinkUrl = 'pages/Consulting/Consulting.jsx';
    const config = useContext(SiteConfigContext);

    if (!config) return null;

    return (
        <div className="container py-4">
            <GitHubLink filePath={gitHubLinkUrl} />

            <h1 className="mb-3">🔧 Consulting Services</h1>
            <p className="lead">Partnering with teams to solve hard problems with clarity and precision.</p>

            <h3>Services</h3>
            <ul className='custom-list'>
                <li>Strategic modernization audits</li>
                <li>Solution scoping for business needs</li>
                <li>Technical leadership and coaching</li>
            </ul>

            <h3>Use Cases</h3>
            <ul className='custom-list'>
                <li>Small business pivoting to cloud</li>
                <li>Integrating AI tools into existing workflows</li>
                <li>Evaluating system upgrades or legacy migrations</li>
            </ul>

            <a
                className="btn btn-primary btn-lg mt-4"
                href={`mailto:${config.ContactEmail}?subject=Discovery%20Session%20Request`}
            >
                Book a discovery session
            </a>
        </div>
    );
};

export default Consulting;
