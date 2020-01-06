import React from 'react';
import { Link } from 'react-router-dom';
import './character.scss';

function Character({ id, name, image_url, first_appearance }) {
    return (
        <div className="all-characters-item">
            <h3 className="all-characters-item-detail">
                {name}
            </h3>
            <img
                src={image_url}
                alt={name}
                className='all-characters-item-img'
            />
            <h5 className="all-characters-item-detail">First Appearance: <span className="all-characters-item-detail-first-appearance">{first_appearance}</span></h5>
            <div>
                <Link to={`/characters/${name}`} className='all-characters-item-link'>
                    <button className="all-characters-item-link-btn">Mystery</button>
                </Link>
            </div>
        </div>
    );
}

export default Character;
