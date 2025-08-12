import React, { useEffect } from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import CallToAction from '../../components/CallToAction/CallToAction';
import './ITWorks.css'; // Optional scoped styles

const ITWorks = () => {
  useEffect(() => {
    document.title = 'IT Works – A Philosophy of System Management';
  }, []);

  return (
    <div className="container py-5">
      <GitHubLink filePath="pages/ITWorks/ITWorks.jsx" />

      <h1 className="display-4 mb-4">IT Works</h1>
      <p className="lead">
        A system management platform built on the principle that time is money—and that stable, scalable infrastructure starts with thoughtful design.
      </p>

      <hr className="my-4" />

      <section id="builder" className="mb-5">
        <h2>🔧 What Is IT Works?</h2>
        <p>
          IT Works is a modular system designed to manage operating systems and software across Windows-based desktops, laptops, and servers. It was deployed in both business networks and industrial process control environments, providing a foundation of stability, security, and high uptime.
        </p>
      </section>

      <section id="architecter" className="mb-5">
        <h2>💡 Design Philosophy</h2>
        <ul className='custom-list'>
          <li><strong>Time = Money:</strong> Investing in quality hardware and software reduces hidden costs from support and downtime.</li>
          <li><strong>Lifecycle Strategy:</strong> 3-year lease model with annual refresh of 1/3 of user systems.</li>
          <li><strong>Persona-Based Reassignment:</strong> Power users received new hardware; refreshed systems were re-personalized for other users.</li>
          <li><strong>Centralized Printing:</strong> Replaced individual inkjets with shared, high-end Color LaserJets—reducing cost and increasing reliability.</li>
          <li><strong>Security First:</strong> Least privilege access model minimized help desk calls and improved system integrity.</li>
        </ul>
      </section>

      <section id="manager" className="mb-5">
        <h2>📈 Real-World Impact</h2>
        <ul className='custom-list'>
          <li>Consistent user experience across all systems</li>
          <li>Reduced support overhead and downtime</li>
          <li>Improved satisfaction and productivity</li>
          <li>Scalable infrastructure aligned with refresh cycles</li>
        </ul>
        <p>
          IT Works wasn’t just a tool—it was a mindset. We didn’t chase cheap. We built systems that worked, day in and day out.
        </p>
      </section>

      <section id="servicer" className="mb-5">
        <h2>🧭 Why the Name “IT Works”?</h2>
        <p>
          The name reflects our mission: We made “IT” work as it should. And yes, it just works. That dual meaning became a mantra for our team and our clients.
        </p>
      </section>

      <section id="smartpackaging" className="mb-5">
        <h2>🔄 Legacy and Modernization</h2>
        <p>
          While IT Works was originally built for Windows environments, its principles remain timeless. The architecture could be modernized for cross-platform relevance, and its persona-based automation model is more applicable than ever in today’s hybrid work environments.
        </p>
      </section>

      <section className="mb-5">
        <h2>🚀 What’s Next?</h2>
        <p>
          As I pivot into AI education and consulting, IT Works serves as a proof point of what thoughtful infrastructure can achieve. It’s a legacy I’m proud of—and a foundation for what’s possible when we combine strategy, empathy, and technical excellence.
        </p>
      </section>

      <div className="alert alert-secondary mt-5">
        <strong>Want to learn more?</strong> Reach out to explore how these principles can be applied to your business or team.
      </div>

      <CallToAction />
    </div>
  );
};

export default ITWorks;
