import React from 'react';
import Review from './review';

export default class ReviewList extends React.Component {
  
    

    render () {

    //set up reviews
    let one = {
        review: '5/5 There is no denying that Raiders of the Lost Ark is one of the greatest movies in the action/adventure genre.',
        userName: 'Chris S',
        date: '6/20/23',
        stars: '5'
    };
    
    let two = {
        review: 'How entertaining it still is, even after all these years. Harrison Ford\'s portrayal of Indiana Jones is both charming and captivating, and his on-screen chemistry with Karen Allen\'s character, Marion Ravenwood, is simply electric.',
        userName: 'Joan Y',
        date: '6/22/23',
        stars: '4'
    };

    let three = {
        review: 'Nothing short of a masterpiece. But with a mind like George Lucas and the expertise of Steven Spielberg, should expect any less?',
        userName: 'Michael R',
        date: '6/25/23',
        stars: '5'
    };

        let reviews = [];       //create empty array for reviews

        // //check to see if reviews exist
        // if (this.state.reviews) {
        //     //iterate through reviews add reviews to array
        //     for (let review of this.state.reviews){
        //         index++;
        //         reviews.push(<ReviewList key={index} {...review}/>);
        //     }
        // }

        return (
            <div className = 'container'>
                <Review {...one}/>
                <Review {...two}/>
                <Review {...one}/>
            </div>
        );
    }
}

