import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CharactersContext } from '../components/CharactersContext'
import Spinner from 'react-bootstrap/Spinner';



const SingleCharacterPage = () =>{
    const { characters } = useContext(CharactersContext);
    const { id } = useParams()

    const character = characters.find(character => character.id === parseInt(id));

    return (
        <>
            {character ? (
                <div id="a-character">
                    <h2>{character.name}</h2>
                    <img src={character.image}/>
                    <ul>
                        <li>Species: {character.species}</li>
                        <li>gender: {character.gender}</li>
                        <li>Status: {character.status}</li>
                        <li>Origin: {character.origin.name}</li>
                        <li>Location: {character.location.name}</li>
                        <li> Appears in: {(character.episode).length} episodes</li>
                        <li>Created: {character.created}</li>
                    </ul>
                </div>
             ) : (
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
       
        </>
    )
    
    }
    
    export default SingleCharacterPage