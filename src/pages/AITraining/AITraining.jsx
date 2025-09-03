import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import { SiteConfigContext } from '../../context/SiteConfigContext';

const AITraining = () => {
    const gitHubLinkUrl = 'pages/AITraining/AITraining.jsx';
    const config = useContext(SiteConfigContext);

    if (!config) return null;

    return (
        <div className="container">
            <GitHubLink filePath={gitHubLinkUrl} />

            <h1>🚀 Modern Solutions for Small Business: AI That Works for You</h1>

            <p className="lead">👔 Are you a small business owner curious about AI but overwhelmed by the jargon?</p>

            <p>
                My name is Mark Hogan—architect, strategist, and fearless problem-solver. After months of deep, iterative collaboration with AI,
                I’m now offering customized AI education and consulting services for small businesses ready to modernize without getting lost in the hype.
            </p>

            <ul className='custom-list'>
                <li>🧭 Understand what AI actually means for your business</li>
                <li>🛠 Streamline operations with smart automation</li>
                <li>📊 Tap into data-driven insights without hiring a data science team</li>
                <li>💡 Empower your team to work smarter using real-world tools</li>
            </ul>

            <p>—I’ll guide you with clarity, empathy, and solutions tailored to your business, not someone else’s template.</p>

            <h3>✅ What I offer:</h3>

            <ul className='custom-list'>
                <li>On-site or virtual AI training sessions</li>
                <li>Hands-on consultation to modernize workflows</li>
                <li>Accessible materials that speak the language of your staff</li>
                <li>Follow-up support so nothing gets dropped</li>
            </ul>

            <p>
                This isn't theory. It's pragmatic strategy born from decades of modernization experience—and now infused with the power of AI.
            </p>

            <div className="alert alert-info mt-4 mb-4">
                <strong>🗓 Now booking Fall 2025 engagements.</strong>
            </div>

            <p>
                👉 Visit <Link to="/ai-training">this page</Link> or <a href={`mailto:${config.ContactEmail}`}>DM me directly</a>. Let’s make AI actually work for your team.
            </p>

            <div className="mt-3">
                <span className="badge bg-primary me-2">#AIForSmallBusiness</span>
                <span className="badge bg-secondary me-2">#DigitalModernization</span>
                <span className="badge bg-success me-2">#BusinessStrategy</span>
                <span className="badge bg-warning text-dark me-2">#AIEducation</span>
                <span className="badge bg-info text-dark me-2">#ConsultingWithImpact</span>
                <span className="badge bg-dark">#MarkJHogan</span>
            </div>
        </div>
    );
};

export default AITraining;