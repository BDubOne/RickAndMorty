import { useContext } from 'react'
import { CharactersContext } from '../components/CharactersContext'
import CharCard from '../components/CharCard'
import {useOutletContext } from 'react-router-dom'


const ResultsPage = () => {
    const {setFavorites, favorites} = useOutletContext()
    const { filteredCharacters} = useContext(CharactersContext)
    return (
        <>
        <h2>Search results</h2>
            {filteredCharacters.map(character=>(
               <CharCard 
               id={character.id}
               key={character.id} 
               name={character.name} 
               image={character.image}
               favorites={favorites}
               setFavorites={setFavorites}
               />
            ))}
        </>
    )
}

export default ResultsPage