import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, Row } from 'reactstrap'

const AddUserModalModule = ({ isAddNoteModalButton, onModalClick, onAddChangeHandler, onAddNoteSubmmitBtn, }) => (
    <Row>
        <div>
            <Modal isOpen={isAddNoteModalButton}>

                <ModalBody style={{ fontFamily: 'Varela Round' }}>
                    <i class="fas fa-pen fa-4x text-warning" style={{ paddingLeft: '45%' }}></i>

                    <h4 style={{ textAlign: 'center', fontSize: '26px', margin: '30px 0 -10px' }}>Add Contacts</h4>
                    <br></br>

                    <form>
                        <div style={{ paddingLeft: '30px' }}>
                            <h6>Name</h6>
                            <input style={{ width: '90%', paddingLeft: '30px' }} name="name" id="comment" onChange={(e) => onAddChangeHandler(e)}></input>
                        </div>

                        <div style={{ paddingLeft: '30px' }}>
                            <h6>Street</h6>
                            <input style={{ width: '90%', paddingLeft: '30px' }} name="street" id="comment" onChange={(e) => onAddChangeHandler(e)}></input>
                        </div>

                        <div style={{ paddingLeft: '30px' }}>
                            <h6>City</h6>
                            <input style={{ width: '90%', paddingLeft: '30px' }} name="city" id="comment" onChange={(e) => onAddChangeHandler(e)}></input>
                        </div>



                    </form>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => onAddNoteSubmmitBtn()}  >
                        Add Note
                     </Button>
                    <Button color="secondary" onClick={onModalClick}>
                        Cancel
                     </Button>


                </ModalFooter>
            </Modal>
        </div>
    </Row>
)

export default AddUserModalModule
