import React from 'react';
import { profiles } from './dcCharsData';

const CharacterContext = React.createContext();
const CharacterConsumer = CharacterContext.Consumer;

class CharacterProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarOpen: false,
            loading: true,
            characters: [],
            sortedCharacters: [],
        }
    }

    componentDidMount() {
        this.setItems(profiles);
    }

    setItems = (profiles) => {
        const characters = profiles.map(char => {
            const character = { ...char };
            return character;
        });
        this.setState({
            characters,
            sortedCharacters: characters,
            loading: false
        });
    }

    navbarToggleHandler = () => {
        this.setState({
            navbarOpen: !this.state.navbarOpen
        });
    }

    getCharacter = (id) => {
        const tempCharacters = [...this.state.characters];
        const character = tempCharacters.find(item => item.id === id);
        return character;
    }

    render() {
        return (
            <div>
                <CharacterContext.Provider value={{
                    ...this.state,
                    navbarToggleHandler: this.navbarToggleHandler,
                    getCharacter: this.getCharacter,
                }}>
                    {this.props.children}
                </CharacterContext.Provider>
            </div>
        );
    }
}

export { CharacterProvider, CharacterConsumer, CharacterContext };