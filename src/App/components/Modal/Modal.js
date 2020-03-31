import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap'

const ModalModule = ({ isModalButtonClicked, onModalClick, postBody, title }) => (
  <Row>
    <div>
      <Modal isOpen={isModalButtonClicked}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          {postBody}

        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary">Do Something</Button>{' '} */}
          <Button color="danger" onClick={onModalClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  </Row>
)

export default ModalModule
