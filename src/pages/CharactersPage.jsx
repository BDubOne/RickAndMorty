
import { useContext } from 'react'
import CharCard from '../components/CharCard'
import { useOutletContext } from 'react-router-dom'
import { CharactersContext } from '../components/CharactersContext'


const CharactersPage = () =>{
        const { filteredCharacters } = useContext(CharactersContext)

        const {setFavorites, favorites} = useOutletContext()
        console.log(filteredCharacters)

    return (
        <>
        <h2 style={{marginTop:'3vmin 0'}}>Characters</h2>
        {filteredCharacters.map((character) => (
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
    
    export default CharactersPage