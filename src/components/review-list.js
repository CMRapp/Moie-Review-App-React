import React from 'react';
import Review from './review';

export default class ReviewList extends React.Component {
   constructor(props) {
    super(props);
        this.state = {
            reviews: []
        };
   } 

    render () {
        const {reviews} = this.state;
        
        return (
            <div className = 'container'>
               {/* Display the reviews for each movie by mapping the reviews array */}
                 {reviews.map((review, index) => {
                    return <Review key={index} reviews={review} />
                })}
            </div>
        );
    }
}

    // //set up reviews
    // let one = {
    //     review: '5/5 There is no denying that Raiders of the Lost Ark is one of the greatest movies in the action/adventure genre.',
    //     userName: 'Chris S',
    //     date: '6/20/23',
    //     stars: '5'
    // };
    
    // let two = {
    //     review: 'How entertaining it still is, even after all these years. Harrison Ford\'s portrayal of Indiana Jones is both charming and captivating, and his on-screen chemistry with Karen Allen\'s character, Marion Ravenwood, is simply electric.',
    //     userName: 'Joan Y',
    //     date: '6/22/23',
    //     stars: '4'
    // };

    // let three = {
    //     review: 'Nothing short of a masterpiece. But with a mind like George Lucas and the expertise of Steven Spielberg, should expect any less?',
    //     userName: 'Michael R',
    //     date: '6/25/23',
    //     stars: '5'
    // };

   

