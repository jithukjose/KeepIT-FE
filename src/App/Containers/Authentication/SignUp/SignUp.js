import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './signup.css'
import notifysucess from '../../../components/Toaster/Tosater';


const SignUpModule = ({

    index, onSubmitBtnClick, onChangeloginHandler, onLoginBtnClick, notifysucess

}) => {

    return (
        <>
            <img className="d-block img-fluid" style={{ height: '60px', cursor: 'pointer' }} src="https://www.plantronics.com/etc/designs/plantronics/clientlib-all/img/poly-logo.png" alt="First slide" />
            <h4 style={{ fontWeight: 'bold' }}>KeepIT</h4>

            <div >
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-8 banner-sec" >
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>

                                </ol>
                                <div className="carousel-inner" role="listbox">'
                                <div className="carousel-item active"  >
                                        <img className="d-block img-fluid" style={{ height: '672px' }} src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
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
                            <h2 className="text-center">Signup Now</h2>
                            <form className="login-form">

                                <label for="exampleInputEmail1" className="text-uppercase">Name</label>
                                <input type="text" className="form-control" placeholder="" name="name" onChange={(e) => onChangeloginHandler(e)} />
                                <div className="form-group">
                                    <label for="exampleInputEmail1" className="text-uppercase">Email</label>
                                    <input type="email" className="form-control" placeholder="" name="email" onChange={(e) => onChangeloginHandler(e)} />
                                </div>


                                <div className="form-group">
                                    <label for="exampleInputPassword1" className="text-uppercase">Password</label>
                                    <input type="password" className="form-control" placeholder="" name="password" onChange={(e) => onChangeloginHandler(e)} />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputPassword1" className="text-uppercase">Street</label>
                                    <input type="text" className="form-control" placeholder="" name="street" onChange={(e) => onChangeloginHandler(e)} />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputPassword1" className="text-uppercase">City</label>
                                    <input type="text" className="form-control" placeholder="" name="city" onChange={(e) => onChangeloginHandler(e)} />
                                </div>


                                <div className="form-check">

                                    <button type="submit" className="btn btn-login " onClick={(e) => onSubmitBtnClick(e)}>Submit</button>
                                    <p >
                                        Already a member ?
                             <a onClick={(e) => onLoginBtnClick(e)} href="#toregister" >Login</a>
                                    </p>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default SignUpModule;


