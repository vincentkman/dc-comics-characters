import React, { useContext } from 'react';
import { CharacterContext } from '../../../context';
import CharacterItems from '../CharacterItems';
import Loading from '../../Loading';

function AllCharacters() {
    const { loading, characters } = useContext(CharacterContext);
    return loading ? <Loading /> :
        <CharacterItems characters={characters} />
}

export default AllCharacters;
