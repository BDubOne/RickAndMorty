import SeasonalCarousel from '../components/SeasonalCarousel'
import {useState, useEffect} from 'react'
import axios from 'axios'
const AboutPage = () => {
    const [episodes, setEpisodes] = useState([]);
    
    useEffect(() => {
        const getEpisodes = async () => {
            try {
                const episodeResponse = await axios.get('https://rickandmortyapi.com/api/episode')
                const episodesData = episodeResponse.data.results

                const episodesWithImages = [];
                for (const episode of episodesData) {
                    const charactersResponse = await axios.get(episode.characters[5]);
                    const characterData = charactersResponse.data;
                    const episodeData = {
                        backgroundImage: characterData.image,
                        title: episode.name,
                        releaseDate: episode.air_date,
                        episodeNumber: episode.episode,
                    };
                    episodesWithImages.push(episodeData);
                }
            
                setEpisodes(episodesWithImages);
            } catch (error) {
                console.error('error fetching episode', error);
            }
        }
        getEpisodes();
    })
    return (
        <div>
        <h1>
            About
        </h1>
        <SeasonalCarousel episodes={episodes} />

        </div>
    )
}

export default AboutPage