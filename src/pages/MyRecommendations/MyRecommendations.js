import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import TextFormatter from '../../components/TextFormatter/TextFormatter';
import '../../styles/global.css';

const MyRecommendations = () => {
    const [recommendations, setRecommendations] = useState(null); // Holds recommendation items
    const [error, setError] = useState(null); // For error handling

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/assets/data/recommendations.json`); // Fetch the JSON file
                const data = await response.json();
                setRecommendations(data); // Set the recommendations
            } catch (err) {
                console.error('Error fetching recommendations:', err);
                setError('Failed to load recommendations.');
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    // Display loading or error state
    if (error) return <p>{error}</p>;
    if (recommendations === null) return <p>Loading recommendations...</p>;

    return (
        <div className="container">
            <Helmet>
                <title>Mark J. Hogan - My recommendations</title>
            </Helmet>
            <h2>What People Say About Me</h2>
            <div className="recommendations">
                {recommendations.map((recommendation, index) => {
                    const isOdd = index % 2 !== 0; // Determine odd/even for styling
                    return (
                        <div key={recommendation.id} className={`recommendation${isOdd ? ' reverse' : ''}`}>
                            <img
                                src={(String(recommendation.imageUrl).startsWith('/') ? process.env.PUBLIC_URL : "") + recommendation.imageUrl}
                                alt={recommendation.author}
                                className={`rounded-circle image-url-${isOdd ? 'left' : 'right'}`}
                            />
                            <blockquote>
                                <TextFormatter textBody={recommendation.textBody} quote={true} />
                                <footer>
                                    <a
                                        href={recommendation.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`link-${isOdd ? 'left' : 'right'}`}
                                    >
                                        - {recommendation.author}
                                    </a>
                                </footer>
                            </blockquote>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MyRecommendations;