import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './login.css'

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Jumbotron, Row
} from 'reactstrap';


const LoginModule = ({
    // validateEmail,
    valid,
    onLoginSubmitBtn,
    onChangeloginHandler, onSignupBtnClick

}) => {

    return (

        <body id="LoginForm">
            <header></header>
            <div className="container">

                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h2>Login</h2>
                            <p>Please enter your email and password</p>
                        </div>
                        <form id="Login">
                            <div className="form-group">
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" name="email" onChange={(e) => onChangeloginHandler(e)} />

                            </div>

                            <div className="form-group">

                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={(e) => onChangeloginHandler(e)} />

                            </div>
                            <div className="forgot">
                                <a >Forgot password?</a>
                            </div>
                            <button type="submit" onClick={(e) => onLoginSubmitBtn(e)} className="btn btn-primary">Login</button>


                            <p >
                                Not a member yet ?
                             <a onClick={(e) => onSignupBtnClick(e)} href="#toregister" >Join us</a>
                            </p>

                        </form>
                    </div>
                </div>
            </div>


        </body >


    )
}



export default LoginModule;


