import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap'

const SignoutModalModule = ({ isShowing, onModalClick, onSignoutConfirmClick }) => (
    <Row>
        <div>
            <Modal isOpen={isShowing}>

                <ModalBody style={{ fontFamily: 'Varela Round' }}>
                    <i class="fas fa-exclamation-triangle fa-4x text-warning" style={{ paddingLeft: '43%' }}></i>

                    <h4 style={{ textAlign: 'center', fontSize: '26px', margin: '30px 0 -10px' }}>Signout?</h4>
                    <br></br>
                    <h6 style={{ textAlign: 'center' }}>Are you sure you want to Signout</h6>
                </ModalBody>
                <ModalFooter>

                    <Button color="secondary" onClick={onModalClick}>
                        Cancel
                     </Button>
                    <Button color="primary" onClick={(e) => onSignoutConfirmClick(e)}>
                        Signout
                     </Button>
                </ModalFooter>
            </Modal>
        </div>
    </Row>
)

export default SignoutModalModule
