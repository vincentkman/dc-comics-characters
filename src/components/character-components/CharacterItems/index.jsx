import React, { useContext } from 'react';
import Character from '../Character';
import { CharacterContext } from '../../../context';
import Loading from '../../Loading';
import '../AllCharacters/all-characters.scss';

function CharactersItems({ characters }) {
    const { loading } = useContext(CharacterContext);
    return loading ? <Loading /> :
        <div className='all-characters'>
            {
                characters.map(item => (
                    <Character
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
}

export default CharactersItems;
