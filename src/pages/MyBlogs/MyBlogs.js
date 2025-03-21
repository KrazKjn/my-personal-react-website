import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/global.css';

const MyBlogs = () => {
    const [items, setItems] = useState(null); // To store blog posts
    const [error, setError] = useState(null); // To handle errors

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch('/assets/data/blogposts.json'); // JSON data path
                const data = await response.json();
                setItems(data); // Set items after successful fetch
            } catch (err) {
                console.error('Error fetching blog posts:', err);
                setError('Failed to load blog posts.');
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    // Display loading or error state
    if (error) return <p>Error: {error}</p>;
    if (items === null) return <p>Loading Blog posts...</p>;

    return (
        <div className="container">
            <Helmet>
                <title>Mark J. Hogan - My Blogs</title>
            </Helmet>
            <h2>My Blogs</h2>
            {items.map((post, index) => {
                const isOddRow = index % 2 !== 0; // Alternate layout for odd rows
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <div className={`recommendation${isOddRow ? ' reverse' : ''}`}>
                            <div className={`image-container-${isOddRow ? 'left' : 'right'}`}>
                                {post.imageUrl && (
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className={`rounded-3 image-url-${isOddRow ? 'left' : 'right'}`}
                                    />
                                )}
                                <a href={post.link} target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                            </div>
                            {post.summary && post.summary.startsWith('<li>') ? (
                                <ul>
                                    {post.summary
                                        .split('</li>')
                                        .filter((item) => item.trim() !== '') // Remove empty items
                                        .map((item, idx) => (
                                            <li key={idx}>{item.split('>')[1]}</li>
                                        ))}
                                </ul>
                            ) : post.summary && post.summary.startsWith('<p>') ? (
                                <div className="paragraph-rows">
                                    {post.summary
                                        .split('</p>')
                                        .filter((item) => item.trim() !== '')
                                        .map((item, idx) => (
                                            <p key={idx}>{item.split('>')[1]}</p>
                                        ))}
                                </div>
                            ) : (
                                <p>{post.summary}</p>
                            )}
                        </div>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default MyBlogs;
