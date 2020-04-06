import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap'

const SuccessModalModule = ({ isSuccessModalButton, onModalClick }) => (
    <Row>
        <div>
            <Modal isOpen={isSuccessModalButton}>

                <ModalBody style={{ fontFamily: 'Varela Round' }}>
                    <i class="fas fa-check-circle fa-4x text-success" style={{ paddingLeft: '45%' }}></i>
                    <h4 style={{ textAlign: 'center', fontSize: '26px', margin: '30px 0 -10px' }}>Great!</h4>
                    <br></br>
                    <h6 style={{ textAlign: 'center' }}>Updated successfully!</h6>

                </ModalBody>
                <ModalFooter>

                    <Button color="secondary" onClick={onModalClick}>
                        Cancel
                     </Button>

                </ModalFooter>
            </Modal>
        </div>
    </Row>
)

export default SuccessModalModule
