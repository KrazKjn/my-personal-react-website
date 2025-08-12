import React, { useEffect } from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import './CurriculumSamples.css'; // Optional scoped styles

const CurriculumSamples = () => {
  useEffect(() => {
    document.title = 'AI Curriculum Samples';
  }, []);

  return (
    <div className="container py-4">
      <GitHubLink filePath="pages/CurriculumSamples/CurriculumSamples.jsx" />

      <div className="alert alert-warning text-center mt-3 mb-4">
        <strong>🚧 This page is a draft and currently in development.</strong> Content may change as services evolve.
      </div>

      <h1 className="mb-3">📘 AI Curriculum Samples</h1>
      <p className="lead">Empowering your team with hands-on learning they can actually use.</p>

      <h3>🚀 What You’ll Find Here</h3>
      <ul className='custom-list'>
        <li>Sample Lessons from real workshops</li>
        <li>Modular Exercises for all skill levels</li>
        <li>Industry-Specific Use Cases</li>
        <li>Downloadable Templates and mock datasets</li>
        <li>Mini Projects to spark internal innovation</li>
      </ul>

      <p>
        Whether you're exploring AI for the first time or scaling adoption across teams, these samples show how practical, empowering, and jargon-free your AI journey can be.
      </p>

      <h3>🧩 Curriculum Modules at a Glance</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Module</th>
              <th>Focus</th>
              <th>Audience</th>
              <th>Sample Exercise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Literacy 101</td>
              <td>Core concepts, myths, and use cases</td>
              <td>Entire team</td>
              <td>"Debunk the Hype": Sorting real vs. exaggerated AI claims</td>
            </tr>
            <tr>
              <td>Tools & Automation</td>
              <td>Everyday apps + AI agents</td>
              <td>Operations & Admins</td>
              <td>Build a task automation bot in 30 mins</td>
            </tr>
            <tr>
              <td>AI for Decisions</td>
              <td>Data + AI for strategy & insight</td>
              <td>Owners, Managers</td>
              <td>Prompt AI to spot trends in mock sales data</td>
            </tr>
            <tr>
              <td>AI for Customer Care</td>
              <td>Personalization, FAQ automation</td>
              <td>Client-facing staff</td>
              <td>Create a tone-aware response generator</td>
            </tr>
            <tr>
              <td>Ethics & Oversight</td>
              <td>Bias, privacy, responsible use</td>
              <td>Team leads, Owners</td>
              <td>Workshop: What would you not automate?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Want help customizing these samples to your industry? Just say the word.</p>

      <h3>🧠 Real-World Scenarios We Teach</h3>
      <ul className='custom-list'>
        <li>🛍️ Retail: AI for inventory forecasting, shopper personalization</li>
        <li>🏥 Healthcare: Secure appointment reminders, intake form summarization</li>
        <li>🔧 Trades: AI for client quotes, calendar optimization</li>
        <li>🏢 Offices: Chatbot creation, email summarization, internal training support</li>
      </ul>

      <h3>📂 Grab & Go Resources</h3>
      <ul className='custom-list'>
        <li>Mock Datasets: Expense logs, sales sheets, onboarding surveys</li>
        <li>PDF Templates: Prompts libraries, ethics checklists, service workflows</li>
        <li>Mini Projects: Create a lead qualification bot, rewrite a policy using AI</li>
      </ul>

      {/* Optional testimonial block */}
      {/*
      <blockquote className="blockquote mt-4">
        <p>"This is exactly what we needed—hands-on tools that make sense in our business."</p>
        <footer className="blockquote-footer">Workshop attendee, 2024</footer>
      </blockquote>
      */}

      <h3 className="mt-4">📞 Ready to Explore Further?</h3>
      <p>
        Contact us to schedule a curriculum walkthrough, request custom training, or gain access to our full AI Education Toolkit. Let’s make AI real—and ridiculously useful—for your team.
      </p>
    </div>
  );
};

export default CurriculumSamples;
