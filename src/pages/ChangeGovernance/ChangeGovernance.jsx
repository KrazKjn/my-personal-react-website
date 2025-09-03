import React from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';

const ChangeGovernance = () => {
  const gitHubLinkUrl = 'pages/Consulting/Consulting.jsx';

  return (
    <div className="container">
      <GitHubLink filePath={gitHubLinkUrl} />

      <h1 className="display-4">🔒 Change Governance & Compliance</h1>
      <p className="lead">Architecting accountability into every release.</p>

      <hr />

      <section className="mb-5">
        <h2>🧭 Technical Change Management Framework</h2>
        <p>
          A structured change management framework enforced ITIL-aligned governance across all infrastructure modifications. Changes were categorized as Standard, Normal, or Emergency—each requiring impact analysis, rollback planning, and stakeholder review. The framework integrated with JIRA, GitHub, and GitFlow to enforce merge discipline and traceability.
        </p>

        <h2>📊 RPN Scoring Rubric & Examples</h2>
        <p>
          Risk Priority Number (RPN) scoring quantified risk based on Severity × Occurrence × Detection.
          High RPN scores triggered contingency planning and board-level review.
          Example: A backend telemetry refactor scored high on Severity and Detection, requiring rollback validation and board-level approval.
        </p>

        <h2>✅ Release Checklists & Requirements</h2>
        <ul>
          <li>Peer review and unit testing</li>
          <li>QA validation</li>
          <li>RPN scoring and mitigation</li>
          <li>Governance board presentation</li>
          <li>GitFlow merge gating</li>
        </ul>

        <h2>🧑‍⚖️ Governance Board Presentation & Review</h2>
        <p>
          High-risk changes were presented with RPN justification, rollback strategy, and stakeholder impact analysis.
          Approval or deferral was based on readiness and risk posture.
        </p>

        <h2>🔁 GitFlow + JIRA/GitHub Integration Strategy</h2>
        <p>
          GitFlow rules blocked merges until JIRA tickets passed peer review, QA, and RPN scoring.
          Each branch mapped to a ticket, and commits were traceable to ticket IDs.
          Engineers were mentored on how to justify changes and navigate approval gates.
        </p>

        <h2>🚨 Emergency Change Handling</h2>
        <ul>
          <li><strong>Tiger Teams</strong> assembled for rapid triage</li>
          <li><strong>Emergency ATCM Board meetings</strong> for expedited approvals</li>
          <li>Pre-approved rollback scripts were mandatory</li>
          <li>Post-change reviews ensured documentation and compliance</li>
        </ul>
        <p>
          Example: During a telemetry outage, I led an emergency patch deployment using validated rollback assets and real-time stakeholder coordination.
        </p>

        <h2>🧰 Standardized Release Management</h2>
        <ul>
          <li>Artifacts collected and validated for unauthorized changes</li>
          <li>Release tickets created per discipline (Dev, QA, Ops)</li>
          <li>Workflow automation enforced traceability</li>
          <li>Release packages included rollback plans, test results, and approval logs</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>🧩 Mapping to NERC CIP, NRC, FISMA Standards</h2>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Standard</th>
              <th>Mapped Practice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NERC CIP</td>
              <td>Asset validation, access control, change traceability</td>
            </tr>
            <tr>
              <td>NRC 10 CFR 73.54</td>
              <td>Cybersecurity impact analysis, rollback planning</td>
            </tr>
            <tr>
              <td>FISMA/NIST</td>
              <td>RPN scoring, audit-ready documentation, emergency protocols</td>
            </tr>
            <tr>
              <td>HIPPA</td>
              <td>Secure handling of PHI, access auditing, rollback validation for clinical systems</td>
            </tr>
            <tr>
              <td>PCI DSS</td>
              <td>Change control for payment systems, encryption enforcement, traceable release logs</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ChangeGovernance;