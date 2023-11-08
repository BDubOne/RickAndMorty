import { useOutletContext } from 'react-router-dom'
import CharCard from '../components/CharCard';
import { CharactersContext } from '../components/CharactersContext'

const FavoritesPage = () => {
    const { favorites, setFavorites } = useOutletContext();

    return (
        <>
        <h2>Favorites</h2>
        {favorites.map((favorite) => (
            <CharCard 
            id={favorite.id}
            key={favorite.id} 
            name={favorite.name} 
            image={favorite.image}
            favorites={favorites}
            setFavorites={setFavorites}
            />
        ))}

        </>
    )
}

export default FavoritesPage;