import React from 'react';

const Register = () => {
    return ( 
        <form class="form-horizontal" style={{ padding: '15px' }}>
            <div class="form-group" style={{ margin: '20px 0' }}>
                <div class="col-3 col-sm-12">
                    <label class="form-label" for="Email">Email</label>
                </div>
                <div class="col-9 col-sm-12">
                    <input class="form-input" type="email" id="Email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$"/>
                </div>
            </div>
            <div class="form-group" style={{ margin: '20px 0' }}>
                <div class="col-3 col-sm-12">
                    <label class="form-label" for="username">Username</label>
                </div>
                <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" id="username" placeholder="username"/>
                </div>
            </div>
            <div class="form-group" style={{ margin: '20px 0' }}>
                <div class="col-3 col-sm-12">
                    <label class="form-label" for="pass">Password</label>
                </div>
                <div class="col-9 col-sm-12">
                    <input class="form-input" type="password" id="pass" placeholder="*****" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"/>
                </div>
            </div>
            <button class="btn btn-primary btn-lg btn-block">Register</button>
            <div class="divider text-center" data-content="OR"></div>
            <button class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-google"></i>Register With Google</button>
            <button class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-facebook-f"></i>Register Width Facebook</button>
            <button class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-github"></i>Login Width GitHub</button>
        </form>
    );
}
 
export default Register;
