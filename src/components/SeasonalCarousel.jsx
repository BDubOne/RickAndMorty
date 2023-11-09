import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';


function SeasonalCarousel({ episodes}) {
  return (
    <div>
    <Carousel >
        {episodes.map((episode, idx) => (
            <Carousel.Item key={idx}>
                <img className="d-block w-80 m-10"
                src={episode.backgroundImage}
                alt={episode.title}
                />
                <Carousel.Caption class="Carousel-text" >
                    <h3 class="Carousel-text">{episode.title}</h3>
                    <p class="Carousel-text">Release Date: {episode.releaseDate}</p>
                    <p class="Carousel-text">Episode Number: {episode.episodeNumber}</p>                        
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
    </div>
)
}

export default SeasonalCarousel