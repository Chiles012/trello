import React, { useState } from 'react';
import firebase from 'firebase';
import app from '../../config/firebaseConfig';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const LoginGoogle = e => {
        e.preventDefault();
        const Provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(Provider)
            .then( result => {
                
                // ...
                console.log(result);
            })
            .catch( error => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log(error.code);
            })
    }

    const Login = e => {
        e.preventDefault();
    }

    return ( 
        <form class="form-horizontal"  style={{ padding: '15px' }}>
            <div class="form-group" style={{ margin: '20px 0' }}>
                <div class="col-3 col-sm-12">
                    <label class="form-label" for="username">Username</label>
                </div>
                <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" id="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
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
            <button onClick={Login} class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0' }}>Login</button>
            <div class="divider text-center" data-content="OR"></div>
            <button onClick={LoginGoogle} class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-google"></i>Login With Google</button>
        </form>
    );
}
 
export default Login;
