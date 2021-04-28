import React from 'react';

const Login = () => {
    return ( 
        <form class="form-horizontal"  style={{ padding: '15px' }}>
            <div class="form-group" style={{ margin: '20px 0' }}>
                <div class="col-3 col-sm-12">
                    <label class="form-label" for="username">Username</label>
                </div>
                <div class="col-9 col-sm-12">
                    <input class="form-input" type="text" id="username" placeholder="Username"/>
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
            <button class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0' }}>Login</button>
            <div class="divider text-center" data-content="OR"></div>
            <button class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-google"></i>Login With Google</button>
            <button class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-facebook-f"></i>Login With Facebook</button>
            <button class="btn btn-primary btn-lg btn-block" style={{ margin: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><i class="fab fa-github"></i>Login With GitHub</button>
        </form>
    );
}
 
export default Login;
