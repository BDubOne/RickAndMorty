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
                    <h3 >{episode.title}</h3>
                    <p >Release Date: {episode.releaseDate}</p>
                    <p >Episode Number: {episode.episodeNumber}</p>                        
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
    </div>
)
}

export default SeasonalCarousel