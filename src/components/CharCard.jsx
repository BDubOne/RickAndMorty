import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CharCard({id, name, image, status, favorites, setFavorites}) {
    const navigate= useNavigate()
    const [isFavorite, setIsFavorite] = useState(false)

    const removeFavorite = () => {
        setFavorites(favorites.filter((favorite)=>(favorite.id !== id)))
        setIsFavorite(false)
    }

    const addToFavorites = () => {
        if (favorites.length < 4) {    
            setFavorites([...favorites, {id, name, image}])
            setIsFavorite(true)
        }
    }
    const inFavorites = () => {
        return favorites.filter((favorite) => favorite.id === id)
    }

    useEffect(()=>{
        if (inFavorites().length) {
            setIsFavorite(true)
        } 
        else{
            setIsFavorite(false)
        }
        }, [])

 
  return (
    <Card style={{ width: '18rem', margin:'1vmin' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {status}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/character/${id}/`)}>Get Shwifty</Button>
        <Button variant="warning" onClick={()=>{isFavorite? removeFavorite(): addToFavorites()}}>
            {isFavorite
            ?
            "Remove"
            :
            "Add"}
           
             
             </Button>
      </Card.Body>
    </Card>
  );
}

export default CharCard;