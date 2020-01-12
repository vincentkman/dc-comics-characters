import React, { useContext } from 'react';
import { CharacterContext } from '../../context';
import { Link, Redirect, useParams } from 'react-router-dom';
import './character-info.scss';

function CharacterInfo() {
    const { id } = useParams();
    const { characters } = useContext(CharacterContext);
    const character = characters.find(item => item.id === id);
    if (!character) {
        return <Redirect to='/not-found' />;
    }
    const { name, image_url, first_appearance, alignment, race, occupation, intelligence, strength, speed, durability, power, combat, base, group_affiliation } = character;
    return (
<div className="char-info">
    <div className="char-info-top">
        <Link to='/characters' className='char-info-link'>
            <button className="char-info-link-btn">
                <h2>Back to DC</h2>
            </button>
        </Link>
        <div className='char-info-title'>
            <h1>{name}</h1>
        </div>
    </div>
    <div className='char-info-container container'>
        <img
            src={image_url}
            alt={name}
            className='char-info-img'
        />
        <div>
            <div className="char-info-first_appearance first_appearance">
                <h1>First Appearance:</h1>
                <span>{first_appearance}</span>
            </div>
            <div className="char-info-alignment alignment">
                <h1>Alignment</h1>
                <span>{alignment}</span>
            </div>
            <div className="char-info-race race">
                <h1>Race</h1>
                <span>{race}</span>
            </div>
            <div className="char-info-occupation occupation">
                <h1>Occupation</h1>
                <span>{occupation}</span>
            </div>
        </div>
        <div className="char-info-powerstats powerstats">
            <h1>PowerStats</h1>
            <div className='char-info-powerstats-box'>
                <h3>Intelligence: </h3>
                <span>{intelligence}</span>
                <h3>Strength:</h3>
                <span>{strength}</span>
                <h3>Speed:</h3>
                <span>{speed}</span>
                <h3>Durability:</h3>
                <span>{durability}</span>
                <h3>Power:</h3>
                <span>{power}</span>
                <h3>Combat: </h3>
                <span>{combat}</span>
            </div>
        </div>
        <div>
            <div className="char-info-base base">
                <h1>Base</h1>
                <span>{base}</span>
            </div>
            <div className="char-info-group_affiliation group_affiliation">
                <h1>Group Affiliation</h1>
                <span>{group_affiliation}</span>
            </div>
        </div>
    </div>
</div>
    )
}

export default CharacterInfo;

// import React from 'react';
// import { CharacterContext } from '../../context';
// import { Link, useParams } from 'react-router-dom';
// import Loading from '../../components/Loading';
// import './character-info.scss';

// function CharacterInfo() {
//     const { id } = useParams();
//     // const { characters } = React.useContext(CharacterContext);
//     // const character = characters.find(item => item.id === id);
//     const { getCharacter } = React.useContext(CharacterContext);
//     const character = getCharacter(id);
//     if (!character) {
//         return <Loading />;
//     }
//     const { name, image_url, first_appearance, alignment, race, occupation, intelligence, strength, speed, durability, power, combat, base, group_affiliation } = character;
//     return (
//     <div>{name}</div>
//     )
// }

// export default CharacterInfo;

