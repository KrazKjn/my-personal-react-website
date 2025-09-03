import React, { useEffect, useState, useRef } from 'react';
import PdfModal from '../../components/PdfModal/PdfModal';
import PdfLink from '../../components/PdfLink/PdfLink';
import GitHubLink from '../../components/GitHubLink/GitHubLink';

const ProblemSolvingProfile = () => {
    const [allStories, setAllStories] = useState([]);
    const [sortOrder, setSortOrder] = useState('importance');
    const pdfModalProblemSolvingPortfolio = useRef();    

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/assets/data/problemSolvingStories.json`);
                const data = await response.json();
                setAllStories(data || []);
            } catch (error) {
                console.error('Failed to load problem-solving stories:', error);
            }
        };

        fetchStories();
    }, []);

    const sortedStories = [...allStories].sort((a, b) => {
        if (sortOrder === 'importance') {
            return a.importanceRank - b.importanceRank;
        } else if (sortOrder === 'ascending') {
            return removeUnicode(a.title).localeCompare(removeUnicode(b.title));
        } else if (sortOrder === 'descending') {
            return removeUnicode(b.title).localeCompare(removeUnicode(a.title));
        }
        return 0;
    });

    function removeUnicode(str) {
      // eslint-disable-next-line no-control-regex
      return str.replace(/[^\x00-\x7F]/g, "");
    }


    return (
        <div className="container">
            <h2 className="page-title text-center mt-4">🛠️ Problem Solving Profile</h2>
            <GitHubLink FullURL="pages/ProblemSolvingProfile/ProblemSolvingProfile.jsx" />
            <p className="lead text-center mb-4">
                From firmware to Freon, refinery to registry—each solution reflects practical ingenuity across domains and decades.
            </p>

            <div className="text-center mb-5">
                <label htmlFor="sortOrder" className="me-2 fw-bold">Sort by:</label>
                <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="importance">Strategic Importance</option>
                    <option value="ascending">Title (A–Z)</option>
                    <option value="descending">Title (Z–A)</option>
                </select>
            </div>

            {sortedStories.length > 0 ? (
                <div className="row justify-content-center">
                    {sortedStories.map((story, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{story.title}</h5>
                                    <p><strong>Challenge:</strong> {story.problem}</p>
                                    <p><strong>Solution:</strong> {story.solution}</p>
                                    <p className="text-muted mt-auto"><em>{story.lesson}</em></p>
                                    <div className="mt-2">
                                        <small className="text-muted">
                                            <strong>Tags:</strong> {story.domainTags.join(', ')}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-muted">Loading stories or no data available...</p>
            )}

            <PdfLink 
                filePath={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Problem Solving Portfolio.pdf`}
                title="Problem Solving Portfolio (PDF)"
                linkText="📄 Problem Solving Portfolio (PDF)"
                pdfModalRef={pdfModalProblemSolvingPortfolio} />            

            <PdfModal ref={pdfModalProblemSolvingPortfolio} modalSize="max-width: 900px;" />
        </div>
    );
};

export default ProblemSolvingProfile;