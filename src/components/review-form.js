import React from 'react';
import Modal from "react-bootstrap/Modal";

export default class ReviewForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName: '',
            stars: '',
            review:'',
        };

        //create binders to handle submit button
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            userName: event.target.value,
            starRating: event.target.value,
            review: event.target.value,
        });
    }

    render () {
        return (
            
            <div className='container bg-light my-5 py-3 border border-danger border-1 rounded'>
                <h3>REVIEW THIS MOVIE</h3>
                <form className='rating' onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='col-6 d-inline-flex'>
                            <input type='text' className='form-control' id='userName' placeholder='Enter your User Name'/>    
                        </div>
                        
                        <div className=' d-inline-flex justify-content-center col-6'>
                            <input type='text' className='form-control' id='rating' placeholder='Enter a Star Rating 1-5'/>  
                        </div>

                        <div>
                        <label className='h4 mt-3' for='review'>Your Review</label>
                        <textarea className='form-control' id='review' rows='3'></textarea>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary my-3'>Submit Your Review</button>
                </form>
            </div>
        );
    }
}