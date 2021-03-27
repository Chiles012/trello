import {React, Fragment} from 'react';
import logo from '../../img/LogoT.svg'

export default function Header(){
    return(
        <Fragment>
            <div className='header'>
                <img  className='log' src={logo} alt='Logo'></img>
                <ul className='pages'>
                    <li><h3>Home</h3> </li>
                    <li><h3>User</h3> </li>
                    
                </ul> 
            </div>
        </Fragment>
    )
}