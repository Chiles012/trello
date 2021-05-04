import React, { useState, Fragment, useEffect } from 'react';
import firebase from 'firebase';
import app from '../../config/firebaseConfig';
import { createUser } from '../../actions/user.action';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const create = user => dispatch( createUser(user) );

    const { user } = useSelector( state => state.user );

    const RegisterGoogle = e => {
        e.preventDefault();
        const Provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(Provider)
            .then( result => {
                create({ Nombre: result.user.displayName });
                setError(false)
                // ...
                console.log(result.user);
            })
            .catch( error => {
                setError(true);
            })
    }

    const Register = async e => {
        e.preventDefault();
        app.auth().signInWithEmailAndPassword( email, password ).then( user => {
            create({ Nombre: username });
        }).catch( error => {
            setError(true);
        })
        
    }

    useEffect(() => {
        if ( username !== '' ||
            email !== '' ||
            password !== '' )
            setError(false);
    }, [username, email, password])

    return (
            <Fragment>
            {
                user
                ? 
                    <Redirect to='/todo' />
                :
                <form class="form-horizontal" style={{ padding: '15px' }}>
                    <div class="form-group" style={{ margin: '20px 0' }}>
                        <div class="col-3 col-sm-12">
                            <label class="form-label" for="Email">Email</label>
                        </div>
                        <div class="col-9 col-sm-12">
                            <input value={email} onChange={e => setEmail(e.target.value)} class="form-input" type="email" id="Email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$"/>
                        </div>
                    </div>
                    <div class="form-group" style={{ margin: '20px 0' }}>
                        <div class="col-3 col-sm-12">
                            <label class="form-label" for="username">Username</label>
                        </div>
                        <div class="col-9 col-sm-12">
                            <input value={username} onChange={e => setUsername(e.target.value)} class="form-input" type="text" id="username" placeholder="username"/>
                        </div>
                    </div>
                    <div class="form-group" style={{ margin: '20px 0' }}>
                        <div class="col-3 col-sm-12">
                            <label class="form-label" for="pass">Password</label>
                        </div>
                        <div class="col-9 col-sm-12">
                            <input value={password} onChange={e => setPassword(e.target.value)} class="form-input" type="password" id="pass" placeholder="*****" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"/>
                        </div>
                    </div>
                    {
                        error 
                        ?
                        <div class="toast toast-error">
                            <button class="btn btn-clear float-right"></button>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        : null
                    }
                    <button onClick={Register} class="btn btn-primary btn-lg btn-block">Register</button>
                    <div class="divider text-center" data-content="OR"></div>
                    <button onClick={RegisterGoogle} class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-google"></i>Register With Google</button>
                </form>
            }
        </Fragment>
    );
}
 
export default Register;
