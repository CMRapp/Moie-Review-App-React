import React from 'react';
import Review from './review';
import ReviewButton from './review-button';
import ReviewList from './review-list';

export default class Movie extends React.Component {
constructor (props){
    super(props);
    this.state= {
        reviews: props.reviews,
        content: props.content
    };
}

render () {
    //create movie component and display props that are passed in
    return (  
        <div className='container-fluid'>
            <div className='card my-5'>
                <div className='card-header bg-primary text-white'>
                    {this.props.title}
                </div>

                <div className='card-body'>
                    <div className='row'>
                        <div className='col-8'>
                            Rating: {this.props.rating}&nbsp;&nbsp;
                            Release Date: {this.props.released}<br/>
                            <h5 className='mt-3'>Storyline</h5>
                            <span className='synopsis'>{this.props.synopsis}</span>
                            <ReviewList/>
                        </div>
                        <div className='col-4'>
                            <img src={this.props.image} id='movie-poster' className='mx-auto img-fluid' alt='movie-poster-image'/>
                        </div>
                    </div>
                </div>

                <div className='card-footer'>                    
                    <ReviewButton/>
                </div>
            </div>
        </div>       
    );
    }
}