import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './login.css'

const LoginModule = ({
    onLoginSubmitBtn,
    onChangeloginHandler, onSignupBtnClick, errors

}) => {

    return (
        <>
            <img className="d-block img-fluid" style={{ height: '60px', cursor: 'pointer' }} src="https://www.plantronics.com/etc/designs/plantronics/clientlib-all/img/poly-logo.png" alt="First slide" />
            <h4 style={{ fontWeight: 'bold' }}>KeepIT</h4>

            <div >

                <div className="container" >

                    <div className="row" >

                        <div className="col-md-8 banner-sec">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" style={{ height: '550px' }} src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h1 style={{ color: 'red', fontWeight: 'bolder' }}>KeepIT</h1>
                                                <h5>Personal data.Organised.Effortless.</h5>
                                                <h5>Keep your data inside KeepIT</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is Heaven</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is Heaven</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 login-sec">
                            <h2 className="text-center">Login Now</h2>



                            <form className="login-form">
                                <div className="form-group">
                                    <label for="exampleInputEmail1" className="text-uppercase">Email</label>
                                    <input type="email" className="form-control" placeholder="" name="email" onChange={(e) => onChangeloginHandler(e)} />
                                    <div><p style={{ color: 'red' }}>{errors && errors.email}</p></div>

                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1" className="text-uppercase">Password</label>
                                    <input type="password" className="form-control" placeholder="" name="password" onChange={(e) => onChangeloginHandler(e)} />
                                </div>
                                <div><p style={{ color: 'red' }}>{errors && errors.password}</p></div>


                                <div className="form-check">

                                    <button type="submit" className="btn btn-login " onClick={(e) => onLoginSubmitBtn(e)}>Submit</button>
                                    <p >
                                        Not a member yet ?
                             <a onClick={(e) => onSignupBtnClick(e)} href="#toregister" >Join us</a>
                                    </p>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default LoginModule;


