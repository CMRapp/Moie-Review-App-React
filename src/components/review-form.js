import React from 'react';

export default class ReviewForm extends React.Component {
    constructor (props) {
        super(props);
    }   
    render () {
        return (
            <div className='container bg-light my-5 py-3 border border-danger border-1 rounded'>
                <h3>RATE THIS MOVIE</h3>
                <form className='rating'>
                    <div>
                        <div>
                            <input type='email' className='form-control' id='userName' aria-describedby='userName' placeholder='Enter your User Name'/>    
                        </div>
                        
                        <div className='starrating risingstar d-flex'>
                            <input type='radio' id='star5' name='rating' value='5' /><label for='star5' title='5 star'>5</label>
                            <input type='radio' id='star4' name='rating' value='4' /><label for='star4' title='4 star'>4</label>
                            <input type='radio' id='star3' name='rating' value='3' /><label for='star3' title='3 star'>3</label>
                            <input type='radio' id='star2' name='rating' value='2' /><label for='star2' title='2 star'>2</label>
                            <input type='radio' id='star1' name='rating' value='1' /><label for='star1' title='1 star'>1</label>
                        </div>

                        <div>
                        <label for='viwer-review'>Your Review</label>
                        <textarea className='form-control' id='viewer-review' rows='3'></textarea>
                        </div>
                    </div>
                    <button type='submit' classname='btn btn-warning my-3'>Submit Your Review</button>
                </form>
            </div>	
        );
    }
    
}