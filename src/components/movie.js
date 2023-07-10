import React from 'react';
import Review from './review';
import ReviewList from './review-list';
import ReviewForm from './review-form';

export default class Movie extends React.Component {
constructor (props){
    super(props);
    this.state= {
        reviews: props.reviews
    };
}

   render () {
    //use const for cleaner code below when inserting props
    const {title, rating, released,synopsis, image} = this.props.movie;
    const {reviews} = this.state;

    return (  
        <div className='container-fluid'>
            <div className='card my-5'>
                <div className='card-header bg-primary text-white'>
                    {title}
                </div>

                <div className='card-body'>
                    <div className='row'>
                        <div className='col-8'>
                            Rating: {rating}&nbsp;&nbsp;
                            Release Date: {released}<br/>
                            <h5 className='mt-3'>Storyline</h5>
                            <span className='synopsis'>{synopsis}</span>
                            <h4 className='mt-3'>Reviews</h4>

                            {/* In leiu of Review List Container : Map through movie reviews to display them */}
                            {reviews.map((review, index) => (
                                <div key={index}>
                                    <Review userName={review.userName} date={review.date} review={review.review} rating={review.rating}/>
                                </div>
                            ))}
                            
                        </div>
                        <div className='col-4'>
                            <img src={image} id='movie-poster' className='mx-auto img-fluid' alt='movie-poster-image'/>
                        </div>
                    </div>
                </div>

                <div className='card-footer'>
                    <ReviewForm/>
                </div>
            </div>
        </div>       
    );
    }
}