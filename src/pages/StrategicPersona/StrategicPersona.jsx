import React, { useEffect, useState } from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import StarCard from '../../components/StarCard/StarCard';

const StrategicPersona = () => {
  const gitHubLinkUrl = 'pages/StrategicPersona/StrategicPersona.jsx';
  const [entries, setEntries] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entryRes = await fetch(`${process.env.PUBLIC_URL}/assets/data/starData.json`);
        const tagRes = await fetch(`${process.env.PUBLIC_URL}/assets/data/starTags.json`);
        const entryJson = await entryRes.json();
        const tagJson = await tagRes.json();

        setEntries(entryJson);
        setTags(tagJson);
        setLoading(false);
      } catch (err) {
        console.error('Error loading STAR data:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredEntries = selectedTag
    ? entries.filter(e => e.tags.includes(selectedTag))
    : entries;

  return (
    <div className="container">
      <GitHubLink filePath={gitHubLinkUrl} />

      <h1 className="display-4">🧠 Strategic Engineering Persona</h1>
      <p className="lead">Legacy-aware, risk-driven, and architected for resilience.</p>

      <hr />

      <section className="mb-5">
        <h2>🎙️ Elevator Pitch</h2>
        <p>
          I’m a systems architect who builds invisible reliability. From SCADA integration at Texaco to ATCM governance at Accruent, I’ve engineered infrastructure that survives audits, outages, and handoffs...
        </p>
      </section>

      <section className="mb-5">
        <h2>🧠 Strategic Questions I Ask in Interviews</h2>
        <ul>
          <li>How does your team quantify infrastructure risk across OT systems?</li>
          <li>What tooling enforces change governance and rollback planning?</li>
          <li>How are emergency changes handled during blackout periods?</li>
          <li>Is there opportunity to mentor engineers in risk-aware development practices?</li>
          <li>How does your organization preserve engineering wisdom across handoffs?</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>🖼️ Visual Overlays & Diagrams (Coming Soon)</h2>
        <ul>
          <li><strong>Mission Control Dashboard:</strong> Fault isolation and telemetry recovery interface</li>
          <li><strong>RPN Scoring Flow:</strong> Severity × Occurrence × Detection matrix with mitigation triggers</li>
          <li><strong>GitFlow Enforcement:</strong> Merge gating and ticket traceability diagram</li>
          <li><strong>Legacy-to-Modern Bridge:</strong> Texaco telemetry → React overlays architecture</li>
        </ul>
        <p className="text-muted">Visuals will be added as interactive components or downloadable assets.</p>
      </section>

      <section className="mb-5">
        <h2>⭐ STAR Interview Responses</h2>

        {loading ? (
          <p className="text-muted text-center">Loading STAR responses...</p>
        ) : (
          <>
            <div className="text-center mb-4">
              <label htmlFor="tagFilter" className="fw-bold me-2">Filter by Tag:</label>
              <select
                id="tagFilter"
                className="form-select w-auto d-inline-block"
                value={selectedTag}
                onChange={e => setSelectedTag(e.target.value)}
              >
                <option value="">All</option>
                {tags.map(tag => (
                  <option key={tag.name} value={tag.name}>{tag.name}</option>
                ))}
              </select>
            </div>

            <div className="row justify-content-center">
              {filteredEntries.map(entry => (
                <div key={entry.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <StarCard entry={entry} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default StrategicPersona;
