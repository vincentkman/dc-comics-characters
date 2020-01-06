import React from 'react';
import './landing-page.scss';

function LandingPage({ children }) {
    return (
        <div className="landing-page-inner">
            {children}
        </div>
    );
}

export default LandingPage;
