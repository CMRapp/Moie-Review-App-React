import React from 'react';
import Stars from './stars';

export default class Review extends React.Component {
render () {
        return (
            <div className='container'>
                <div className='card my-5'>
                    <div className='card-header bg-success text-white'>
                        {this.props.userName} {this.props.date} NAME & DATE
                    </div>

                    <div className='card-body'>
                        {this.props.review} REVIEW CONTENT
                    </div>

                    <div className='card-footer'>
                        Star Rating: {this.props.rating}
                    </div>
                </div>
            </div>
        );
    }
}