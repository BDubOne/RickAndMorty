import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CharactersContext = createContext({
    characters: [],
    setCharacters: () => {},
    filteredCharacters: [],
    setFilteredCharacters: () => {},
    searchTerm: '',
    setSearchTerm: () => {},
    searchResults: [],
});


export const CharactersProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [myPage, setMyPage] = useState(1)
    const [ filteredCharacters, setFilteredCharacters ] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


   
        const getCharacters = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${myPage}`);
            setCharacters([...characters,...response.data.results]);
            setMyPage(prevMyPage=>myPage+1)
        }
        useEffect(() => {
        if(myPage < 43) {
            getCharacters()
        }
    },[myPage]);

    useEffect(() => {
        if (!searchTerm) {
            setFilteredCharacters(characters);
        } else {
            const lowerCaseTerm = searchTerm.toLowerCase();
            const results = characters.filter(character=> {
                return character.name.toLowerCase().includes(lowerCaseTerm) ||
                character.origin.name.toLowerCase().includes(lowerCaseTerm) ||
                character.species.toLowerCase().includes(lowerCaseTerm) ||
                character.status.toLowerCase().includes(lowerCaseTerm) ||
                character.location.name.toLowerCase().includes(lowerCaseTerm)
            });
            setFilteredCharacters(results)
        }
    },[searchTerm, characters])
    
    const handleSearchSubmit = (searchTerm) => {
        const lowerCaseTerm = searchTerm.toLowerCase();
        const results = characters.filter(character => {
            return character.name.toLowerCase().includes(lowerCaseTerm) ||
            character.origin.name.toLowerCase().includes(lowerCaseTerm) ||
            character.species.toLowerCase().includes(lowerCaseTerm) ||
            character.status.toLowerCase().includes(lowerCaseTerm) ||
            character.location.name.toLowerCase().includes(lowerCaseTerm)
        });
        setSearchResults(results); 
      };

  

    return (
        <CharactersContext.Provider value={{ 
            characters, 
            setCharacters,
            filteredCharacters,
            setFilteredCharacters,
            searchTerm,
            setSearchTerm,
            searchResults,
            handleSearchSubmit,
             }}>
            { children }
        </CharactersContext.Provider>
    )
}