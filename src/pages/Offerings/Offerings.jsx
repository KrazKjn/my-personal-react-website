import React from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import OfferingCard from '../../components/OfferingCard/OfferingCard';
import './Offerings.css'; // Optional for scoped styles

const Offerings = () => {
    return (
        <div className="container py-4">
            <GitHubLink filePath="pages/Offerings/Offerings.jsx" />

            <h1 className="mb-4">Our Offerings</h1>

            <div className="row">
                <div className="col-md-6">
                    <OfferingCard
                        Title="AI Training & Services"
                        Description="Customized AI education and consulting for small businesses. Learn how to modernize, automate, and empower your team with practical AI solutions."
                        IconClass="bi bi-robot text-info"
                        LearnMoreLink="/ai-training"
                    />
                </div>

                <div className="col-md-6">
                    <OfferingCard
                        Title="Consulting"
                        Description="Expert guidance for digital modernization, workflow optimization, and legacy system integration. Tailored strategies for your business challenges."
                        IconClass="bi bi-lightbulb-fill text-warning"
                        LearnMoreLink="/consulting"
                    />
                </div>

                <div className="col-md-6 mt-4">
                    <OfferingCard
                        Title="Workflow Modernization"
                        Description="Streamline operations and boost efficiency with automation, cloud alignment, and pragmatic engineering."
                        IconClass="bi bi-gear-wide-connected text-primary"
                        LearnMoreLink="/workflow-modernization"
                    />
                </div>

                <div className="col-md-6 mt-4">
                    <OfferingCard
                        Title="Software Engineering & Automation"
                        Description="Smart solutions, built for scale and clarity. Web apps, APIs, automation, and legacy tool refactoring."
                        IconClass="bi bi-cpu text-success"
                        LearnMoreLink="/software"
                    />
                </div>

                <div className="col-md-6 mt-4">
                    <OfferingCard
                        Title="Legacy System Management – IT Works"
                        Description="A modular platform for Windows-based infrastructure. Persona-driven automation, centralized tools, and refresh cycles built to last."
                        IconClass="bi bi-diagram-3 text-primary"
                        LearnMoreLink="/it-works"
                    />
                </div>
            </div>
        </div>
    );
};

export default Offerings;
