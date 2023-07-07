import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class LoginForm extends React.Component{
    render() {
        return (
            <header className='container-fluid bg-dark text-light py-2 h-100 d-inline-block'>
                <div className='container'>
                    <h1><FontAwesomeIcon icon='fa-solid fa-star' spin className='color-icon'/>  CMR Movie Reviews <FontAwesomeIcon icon='fa-solid fa-star' spin className='color-icon'/></h1>
                </div>
            </header>
        );

    }
}