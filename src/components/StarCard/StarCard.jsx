import React, { useState } from 'react';

const StarCard = ({ entry }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card shared-card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">⭐ {entry.title}</h5>
        <p className="card-meta"><strong>Category:</strong> {entry.category}</p>
        <p className="card-text"><strong>Summary:</strong> {entry.result}</p>

        <div className="card-tags mt-2">
          {entry.tags.map((tag, index) => (
            <span key={index} className="tag-badge">{tag}</span>
          ))}
        </div>

        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => setShowDetails(prev => !prev)}
        >
          {showDetails ? 'Hide Details' : 'View Full STAR'}
        </button>

        {showDetails && (
          <div className="card-details mt-3">
            <p><strong>Situation:</strong> {entry.situation}</p>
            <p><strong>Task:</strong> {entry.task}</p>
            <p><strong>Action:</strong> {entry.action}</p>
            <p><strong>Result:</strong> {entry.result}</p>

            <p><strong>Strategic Impact:</strong></p>
            <ul className="impact-list">
              {entry.strategicImpact.map((impact, index) => (
                <li key={index}>{impact}</li>
              ))}
            </ul>

            {entry.whyThisWorks && entry.whyThisWorks.length > 0 && (
              <>
                <p className="mt-3"><strong>🎯 Why This Works:</strong></p>
                <ul className="why-this-works-list">
                  {entry.whyThisWorks.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StarCard;
