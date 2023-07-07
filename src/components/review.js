import React from 'react';
import Stars from './stars';

export default class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviewArray: [
                {
                    id:0,
                    userName: 'Chris S',
                    review: '5/5 There is no denying that Raiders of the Lost Ark is one of the greatest movies in the action/adventure genre.',
                    date: '6/20/23',
                    stars: '5'
                }
            ]
        };
    }
    
    render () {
        let reviews;
        if (this.state.reviews) {
            reviews = this.state.reviews.map((review, index)=> <Review key={index} {...review}/>)
        }
        return (
            <div className='container'>
                <div className='card my-5'>
                    <div className='card-header bg-success text-white'>
                        {this.props.userName} {this.props.date}
                    </div>

                    <div className='card-body'>
                        {this.props.review}
                    </div>

                    <div className='card-footer'>
                        Star Rating: {this.props.stars}
                    </div>
                </div>
            </div>
        );
    }
}