import React from 'react';
import Movie from './movie';
import ReviewList from './review-list';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //create an array of movies with all movie props including an empty array for reviews
            movies: [
                {
                    movieId:0,
                    title: 'Indiana Jones and the Raiders of the Lost Ark',
                    rating: 'PG',
                    released: '1981',
                    synopsis: 'In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.',
                    image: 'https://m.media-amazon.com/images/I/81ho-CuFGUL._AC_SY879_.jpg',
                    //populate review array with one review
                    reviews: [
                        {
                            review: '5/5 There is no denying that Raiders of the Lost Ark is one of the greatest movies in the action/adventure genre.',
                            userName: 'Chris S',
                            date: '6/20/23',
                            rating: 5
                        },
                        {
                            review: 'How entertaining it still is, even after all these years. Harrison Ford\'s portrayal of Indiana Jones is both charming and captivating, and his on-screen chemistry with Karen Allen\'s character, Marion Ravenwood, is simply electric.',
                            userName: 'Joan Y',
                            date: '6/22/23',
                            rating: '4'
                        }
                    ]
                },

                {
                    movieId:1,
                    title: 'Indiana Jones and the Temple of Doom',
                    rating: 'PG',
                    released: '1984',
                    synopsis: 'In 1935, Indiana Jones is tasked by Indian villagers with reclaiming a rock stolen from them by a secret cult beneath the catacombs of an ancient palace.',
                    image: 'https://i.ebayimg.com/images/g/LacAAOSwAuVgJoTE/s-l1600.jpg',
                    reviews: [
                        {
                            review: 'My least favorite of the Indiana Jones movies, but a gem nonetheless. The movie is a little more darker and slightly more intense than the first one, but the story and characters are still pretty memorable',
                            userName: 'MovieGuys',
                            date: '1/5/14',
                            rating: 4
                        }
                    ]
                },
                {
                    movieId:2,
                    title: 'Indiana Jones and the Last Crusade',
                    rating: 'PG',
                    released: '1989',
                    synopsis: 'In 1938, after his father goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against the Nazis again to stop them from obtaining its powers.',
                    image: 'https://m.media-amazon.com/images/I/71agXxNrnOL._AC_SY879_.jpg',
                    reviews: [
                        {
                            review: 'Fantastic cast and direction. Borrows heavily from the format of raiders but that\'s hardly a flaw. Solid direction and production value all around. Shame the screenplay isn\'t quite as tight as raiders but it\'s a must watch for series fans.',
                            userName: 'MovieGuys',
                            date: '5/5/22',
                            rating: 5
                        }
                    ]
                }
            ]
        };
    }
    
    render () {
        const {movies} = this.state;        

        return (
            <div className='container'>
                {/* Map through the array and create movie components using array index as a key */}
                { movies.map((movie, index) => (
                    <div key={index}>
                        <Movie movie={movie} reviews={movie.reviews}/>
                    </div>
                ))}
            </div>
        );
    }
}