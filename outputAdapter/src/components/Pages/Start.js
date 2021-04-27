import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../Common';

const Start = () => {
    return ( 
        <Fragment>
            <div class="hero bg-primary">
                <div 
                    class="hero-body" 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <h1>Welcome!</h1>
                    <p>Trello App</p>
                </div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Link to='/Login' style={{ margin: '5px' }} className='btn btn-lg'>Login</Link>
                <Link to='/Register' style={{ margin: '5px' }} className='btn btn-lg'>Register</Link>
            </div>
            <div class="container">
                <div class="columns">
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Start;