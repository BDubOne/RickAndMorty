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

    const getFilteredCharacters = (terms) => {
        if(!terms) return characters;

        const searchTerms = terms.toLowerCase().split(' ');
        return characters.filter(character => {
            return searchTerms.every(term => (
                character.name.toLowerCase().includes(term) ||
                character.origin.name.toLowerCase().includes(term) ||
                character.species.toLowerCase().includes(term) ||
                character.status.toLowerCase().includes(term) ||
                character.episode.some(episode => episode.toLowerCase().includes(term)) ||
                character.gender.toLowerCase().includes(term) ||
                character.location.name.toLowerCase().includes(term)
         
            ))
        })   
    };

    useEffect(() => {
        setFilteredCharacters(getFilteredCharacters(searchTerm));
    },[searchTerm, characters])
    
    const handleSearchSubmit = (terms) => {
        setSearchResults(getFilteredCharacters(terms));
     
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