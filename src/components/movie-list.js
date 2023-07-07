import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render () {
        //set up movies
        let one =
            {
                title: 'Indiana Jones and the Raiders of the Lost Ark',
                rating: 'PG',
                released: '1981',
                synopsis: 'In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.',
                image: 'https://m.media-amazon.com/images/I/81ho-CuFGUL._AC_SY879_.jpg'
            };

            let two = {
                title: 'Indiana Jones and the Temple of Doom',
                rating: 'PG',
                released: '1984',
                synopsis: 'In 1935, Indiana Jones is tasked by Indian villagers with reclaiming a rock stolen from them by a secret cult beneath the catacombs of an ancient palace.',
                image: 'https://m.media-amazon.com/images/I/51EA71JWFBL._AC_UF1000,1000_QL80_.jpg'
            };
            
            let three ={
                title: 'Indiana Jones and the Last Crusade',
                rating: 'PG',
                released: '1989',
                synopsis: 'In 1938, after his father goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against the Nazis again to stop them from obtaining its powers.',
                image: 'https://m.media-amazon.com/images/I/71agXxNrnOL._AC_SY879_.jpg'
            };           

        return (
            <div className='container'>
                {/* create movie container by passing in props defined above to Mobie component */}
                <Movie {...one}/>
                <Movie {...two}/>
                <Movie {...three}/>
            </div>
        );
    }
}