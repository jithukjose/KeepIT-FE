import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap'

const ModalModule = ({ isModalButtonClicked, onModalClick, postBody }) => (
  <Row>
    <div>
      <Modal isOpen={isModalButtonClicked}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          {postBody}
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary">Do Something</Button>{' '} */}
          <Button color="secondary" onClick={onModalClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  </Row>
)

export default ModalModule
