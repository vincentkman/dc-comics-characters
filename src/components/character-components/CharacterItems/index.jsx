import React from 'react';
import Character from '../Character';
import { CharacterConsumer } from '../../../context';
import Loading from '../../Loading';
import '../AllCharacters/all-characters.scss';

function CharactersItems({ characters }) {
    return (
        <CharacterConsumer>
            {characterItem => {
                const { loading } = characterItem;
                return (
                    <>
                        {
                            loading ? <Loading /> :
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
                    </>
                );
            }}
        </CharacterConsumer>
    )
}

export default CharactersItems;
