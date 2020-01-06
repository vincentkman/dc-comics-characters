import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import './home.scss';

function Home() {
    return (
        <div className='home'>
            <div className='home-landing-page landing-page'>
                <LandingPage>
                    <Link to='characters' className='home-link'>
                        <button className='home-link-btn'><h5>Choose Your DC Character</h5></button>
                    </Link>
                </LandingPage>
            </div>
        </div>
    );
}

export default Home;