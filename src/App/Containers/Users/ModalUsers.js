import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Label, Input } from 'reactstrap'

const ModalModule = ({
  isModalButtonClicked,
  addUserButtonClicked,
  onModalSubmit,
  onChangeHandler,
  props,
  profileName,
  profilEmail,
  profilStreet,
  profilCity,
  index
}) => (
  <Row>
    <div>
      <Modal isOpen={isModalButtonClicked}>
        <ModalHeader>User Details</ModalHeader>
        <ModalBody>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={profileName}
            placeholder="Name"
            key={index}
            onChange={(e) => onChangeHandler(e)}
          />
          <Label for="name">EmailID</Label>
          <Input
            type="text"
            name="email"
            value={profilEmail}
            placeholder="Email"
            key={index}
            onChange={(e) => onChangeHandler(e)}
          />
          <Label for="name">Street</Label>
          <Input
            type="text"
            name="street"
            value={profilStreet}
            placeholder="Street"
            key={index}
            onChange={(e) => onChangeHandler(e)}
          />
          <Label for="name">City</Label>
          <Input
            type="text"
            name="city"
            value={profilCity}
            placeholder="City"
            key={index}
            onChange={(e) => onChangeHandler(e)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onModalSubmit}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={addUserButtonClicked}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  </Row>
)

export default ModalModule
