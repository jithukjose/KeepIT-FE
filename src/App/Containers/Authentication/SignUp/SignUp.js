import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './signup.css'


import {
    Input, Button
} from 'reactstrap';

const SignUpModule = ({
    valid,
    index, onSubmitBtnClick, onChangeloginHandler, onLoginBtnClick

}) => {
    console.log("valid:", valid)
    return (


        <body id="LoginForm">
            <header></header>
            <div className="container">

                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h2>SignUp</h2>
                            <p>Please enter your details</p>
                        </div>
                        <form id="Login">

                            <div className="form-group">
                                <input type="text" className="form-control" id="inputEmail" placeholder="Name" name="name" onChange={(e) => onChangeloginHandler(e)} />

                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" name="email" onChange={(e) => onChangeloginHandler(e)} />
                            </div>

                            <div className="form-group">

                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={(e) => onChangeloginHandler(e)} />
                            </div>

                            <div className="form-group">
                                <Input
                                    type="text"
                                    name="street"
                                    placeholder="Street"
                                    key={index}
                                    onChange={(e) => onChangeloginHandler(e)}
                                />
                            </div>

                            <div className="form-group">
                                <Input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    key={index}
                                    onChange={(e) => onChangeloginHandler(e)}
                                />
                            </div>
                            <div>
                                <Button color="primary" onClick={() => onSubmitBtnClick()}>Submit</Button>
                            </div>

                            <p className="change_link">
                                Already a member ?
                             <a href="# " onClick={(e) => onLoginBtnClick(e)} >Login</a>
                            </p>


                        </form>
                    </div>
                </div>
            </div>


        </body >
    )
}

export default SignUpModule;


