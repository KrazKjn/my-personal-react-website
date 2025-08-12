import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggle = () => setCollapsed(!collapsed);

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggle}>
                {title}
            </div>
            {!collapsed && (
                <div className="accordion-body">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
