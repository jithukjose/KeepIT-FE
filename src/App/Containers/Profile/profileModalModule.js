import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, Row } from 'reactstrap'

const ProfileModalModule = ({ isSuccessModalButton, onModalClick, onEditChangeHandler, index, name, street, city, onSubmitProfileBtn, userProfileData }) => (
    <Row>
        <div>
            <Modal isOpen={isSuccessModalButton}>

                <ModalBody style={{ fontFamily: 'Varela Round' }}>
                    <i class="fas fa-user-edit fa-4x text-warning" style={{ paddingLeft: '45%' }}></i>
                    <h4 style={{ textAlign: 'center', fontSize: '26px', margin: '30px 0 -10px' }}>Edit Profile!</h4>
                    <br></br>

                    <form>


                        <div className="form-group row">
                            <label for="Name" className="col-4 col-form-label">Name </label>
                            <div className="col-8">
                                <input id="Name" name="name"
                                    placeholder="Name" className="form-control here" type="text"
                                    onChange={(e) => onEditChangeHandler(e)}
                                    key={index}
                                    defaultValue={userProfileData.name}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="email" className="col-4 col-form-label">Email</label>
                            <div className="col-8">
                                <input id="email" name="email" placeholder="Email" className="form-control here" defaultValue={userProfileData.email} required="required" type="text"
                                    readOnly />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="website" className="col-4 col-form-label">Street</label>
                            <div className="col-8">
                                <input id="Street" name="street" placeholder="Street" className="form-control here" type="text" onChange={(e) => onEditChangeHandler(e)}
                                    defaultValue={userProfileData.street}
                                    key={index} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="City" className="col-4 col-form-label">City</label>
                            <div className="col-8">
                                <input id="City" name="city" placeholder="City" className="form-control here" type="text" onChange={(e) => onEditChangeHandler(e)}
                                    key={index}
                                    defaultValue={userProfileData.city} />
                            </div>
                        </div>

                    </form>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => onSubmitProfileBtn()}  >
                        Update My Profile
                     </Button>
                    <Button color="secondary" onClick={onModalClick}>
                        Cancel
                     </Button>


                </ModalFooter>
            </Modal>
        </div>
    </Row>
)

export default ProfileModalModule
