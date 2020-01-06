import React from 'react';
import { CharacterConsumer } from '../../../context';
import CharacterItems from '../CharacterItems';
import Loading from '../../Loading';

function AllCharacters() {
    return (
        <CharacterConsumer>
            {allCharacters => {
                const { characters, sortedCharacters, loading } = allCharacters;
                return (
                    <>
                        {
                            loading ? <Loading /> :
                                <div>
                                    <CharacterItems characters={characters} />
                                </div>
                        }
                    </>
                );
            }}
        </CharacterConsumer>
    )
}

export default AllCharacters;
