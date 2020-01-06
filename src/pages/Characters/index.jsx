import React from 'react';
import AllCharacters from '../../components/character-components/AllCharacters';
import '../../components/character-components/Character/character.scss';
import '../Characters/characters.scss';

function Characters() {
    return (
        <div className="characters">
            <div>
                <h1>DC Characters</h1>
            </div>
            <AllCharacters />
        </div>
    );
}

export default Characters;
