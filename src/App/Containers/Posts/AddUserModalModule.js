import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, Row } from 'reactstrap'

const AddUserModalModule = ({ isAddNoteModalButton, onModalClick, onAddChangeHandler, onAddNoteSubmmitBtn, }) => (
    <Row>
        <div>
            <Modal isOpen={isAddNoteModalButton}>

                <ModalBody style={{ fontFamily: 'Varela Round' }}>
                    <i class="fas fa-pen fa-4x text-warning" style={{ paddingLeft: '45%' }}></i>

                    <h4 style={{ textAlign: 'center', fontSize: '26px', margin: '30px 0 -10px' }}>Add Notes</h4>
                    <br></br>

                    <form>
                        <div class="box" style={{ paddingLeft: '30px' }}>
                            <h6>Title</h6>
                            <textarea style={{ width: '90%', paddingLeft: '30px' }} name="title" id="comment" onChange={(e) => onAddChangeHandler(e)}></textarea>
                        </div>
                        <div class="box" style={{ paddingLeft: '30px' }}>
                            <h6>Description</h6>
                            <textarea style={{ width: '90%', paddingLeft: '30px', minHeight: '5rem' }} name="description" id="comment" onChange={(e) => onAddChangeHandler(e)}></textarea>
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
