import React, { createContext, useEffect, useState } from 'react';

export const SiteConfigContext = createContext();

export const SiteConfigProvider = ({ children }) => {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/assets/data/siteconfig.json`)
            .then((res) => res.json())
            .then(setConfig)
            .catch((err) => console.error('Error loading site config:', err));
    }, []);

    return (
        <SiteConfigContext.Provider value={config}>
            {children}
        </SiteConfigContext.Provider>
    );
};
