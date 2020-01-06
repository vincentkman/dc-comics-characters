import React from 'react';
import LandingPage from '../../components/LandingPage';
import './not-found.scss';

function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-landing-page landing-page">
                <LandingPage>
                    <h1 className="landing-page-inner-item">
                        404
                </h1>
                </LandingPage>
            </div>
        </div>
    );
}

export default NotFound;
