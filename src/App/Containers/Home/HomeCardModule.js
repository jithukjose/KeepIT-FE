import React from 'react'


const HomeCardModule = ({ onProfileBtnClick, onContactBtnClick, onPostsBtnClick }) => {

    return (
        <>

            <div class="container-fluid" style={{ paddingTop: '90px' }}>

                <div className="container" style={{ paddingTop: '5%', boxShadow: 'none' }}>

                    <section className="d-flex bg-light" id="feature-cards">
                        <div className="container d-flex justify-content-center">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 align-self-center">
                                    <div className="row">
                                        <div className="col-12 col-lg-7 mx-auto text-center">
                                            <h2 className="display-4">Feature Cards</h2>
                                            <p className="text-muted lead mb-5">This snipped does not use any custom styling or scripting but does make use of Font-Awesome free.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-lg-3">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col mx-auto text-center">
                                                            <i class="fas fa-running fa-4x text-danger" ></i>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-12 text-center">
                                                            <p className="text-info">My Goals</p>
                                                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                                                            <button className="btn btn-danger mt-3 px-4">Click Here</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-3">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col mx-auto text-center">
                                                            <i class="fas fa-clipboard-list fa-4x text-success"></i>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-12 text-center">
                                                            <p className="text-info">Notes</p>
                                                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                                                            <button className="btn btn-success mt-3 px-4" onClick={() => onPostsBtnClick()}>Click Here</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-3">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col mx-auto text-center">

                                                            <i class="fas fa-address-book fa-4x text-warning"></i>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-12 text-center">
                                                            <p className="text-info">Contacts</p>
                                                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                                                            <button className="btn btn-warning mt-3 px-4" onClick={() => onContactBtnClick()} >Click Here</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-3">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col mx-auto text-center">
                                                            <i class="fas fa-user fa-4x text-info"></i>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-12 text-center">
                                                            <p className="text-info">Profile</p>
                                                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta error.</p>
                                                            <button className="btn btn-info mt-3 px-4" onClick={() => onProfileBtnClick()} >Click Here</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </>
    )
}

export default HomeCardModule
