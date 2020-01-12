import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterContext = React.createContext();

function CharacterProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        const url = 'https://5e11f56184b3db00149766e5.mockapi.io/api/v1';
        setLoading(true);
        axios
            .get(`${url}/characters`)
            .then(response => {
                setCharacters(response.data);
                setLoading(false);
            });
            return () => {}
    }, []);

    const navbarToggleHandler = () => {
        return !navbarToggleHandler ? setNavbarOpen(true) : setNavbarOpen(false)
    }

    return (
        <CharacterContext.Provider value={{
            loading,
            characters,
            navbarOpen,
            navbarToggleHandler,
        }}>
            {children}
        </CharacterContext.Provider>
    );

}

export { CharacterProvider, CharacterContext };
