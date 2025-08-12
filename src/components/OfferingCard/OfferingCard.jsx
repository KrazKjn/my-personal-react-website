import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './OfferingCard.css'; // Optional for scoped styles

const OfferingCard = ({ Title, Description, IconClass, LearnMoreLink }) => {
    return (
        <div className="card mb-4 shadow-sm OfferingCard">
            <div className="card-body d-flex align-items-center">
                <span className={`${IconClass} me-3`} style={{ fontSize: '2rem' }}></span>
                <div>
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Description}</p>
                    <Link className="btn btn-primary" to={LearnMoreLink}>Learn More</Link>
                </div>
            </div>
        </div>
    );
};

OfferingCard.propTypes = {
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    IconClass: PropTypes.string,
    LearnMoreLink: PropTypes.string
};

OfferingCard.defaultProps = {
    IconClass: '',
    LearnMoreLink: '#'
};

export default OfferingCard;
