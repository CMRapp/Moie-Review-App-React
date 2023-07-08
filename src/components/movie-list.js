import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //create an array of movies with all movie props including an empty array for reviews
            movies: [
                {
                    title: 'Indiana Jones and the Raiders of the Lost Ark',
                    rating: 'PG',
                    released: '1981',
                    synopsis: 'In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.',
                    image: 'https://m.media-amazon.com/images/I/81ho-CuFGUL._AC_SY879_.jpg',
                    reviews: []
                },

                {
                    title: 'Indiana Jones and the Temple of Doom',
                    rating: 'PG',
                    released: '1984',
                    synopsis: 'In 1935, Indiana Jones is tasked by Indian villagers with reclaiming a rock stolen from them by a secret cult beneath the catacombs of an ancient palace.',
                    image: 'https://i.ebayimg.com/images/g/LacAAOSwAuVgJoTE/s-l1600.jpg',
                    reviews: []
                },
                {
                    title: 'Indiana Jones and the Last Crusade',
                    rating: 'PG',
                    released: '1989',
                    synopsis: 'In 1938, after his father goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against the Nazis again to stop them from obtaining its powers.',
                    image: 'https://m.media-amazon.com/images/I/71agXxNrnOL._AC_SY879_.jpg',
                    reviews: []
                }
            ]
        };
    }
    
    render () {
        const { movies } = this.state;

        return (
            <div className='container'>
                {/* Map through the array and create movie components using array ndex as a key */}
                {movies.map((movie, index) => (
                    <Movie key={index} movie={movie} />
                ))}
            </div>
        );
    }
}