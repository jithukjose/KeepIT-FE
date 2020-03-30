import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap'

const DeleteModalModule = ({ isDeleteModalButtonClicked, onModalClick, onDeleteConfirmClick }) => (
    <Row>
        <div>
            <Modal isOpen={isDeleteModalButtonClicked}>

                <ModalBody style={{ fontFamily: 'Varela Round' }}>
                    <i class="fas fa-times-circle fa-4x text-danger" style={{ paddingLeft: '45%' }}></i>
                    <h4 style={{ textAlign: 'center', fontSize: '26px', margin: '30px 0 -10px' }}>Are you sure?</h4>
                    <br></br>
                    <h6 style={{ textAlign: 'center' }}>Do you really want to delete these records? This process cannot be undone.</h6>
                </ModalBody>
                <ModalFooter>

                    <Button color="secondary" onClick={onModalClick}>
                        Cancel
                     </Button>
                    <Button color="danger" onClick={(e) => onDeleteConfirmClick(e)}>
                        Delete
                     </Button>
                </ModalFooter>
            </Modal>
        </div>
    </Row>
)

export default DeleteModalModule
