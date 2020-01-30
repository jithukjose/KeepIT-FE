import React from 'react'
import { Button, FormGroup, FormControl, Label, Input, Alert } from 'reactstrap'
import DateSelector from '../../components/DatePicker/index.datepicker'

const ProfileModule = () => {
  return (
    <>
      <div style={{ margin: '100px' }}>
        <Label for="exampleEmail">Name</Label>
        <Input type="text" placeholder="Name" />
        <div>
          <Label for="exampleEmail">Age</Label>
          <Input type="text" placeholder="Age" />
        </div>

        <Label>Country</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option value="india">India</option>
          <option>China</option>
          <option>England</option>
          <option>Australia</option>
          <option>Netherlands</option>
          <option>Pakistan</option>
          <option>France</option>
          <option>Sweden</option>
          <option>Germany</option>
          <option>Italy</option>
        </Input>

        <div style={{ margin: '10px' }}>
          <Label for="exampleEmail">Date of Birth</Label>
          <br></br>
          <DateSelector></DateSelector>
        </div>

        <div style={{ margin: '10px', margin: '0 auto', display: ' block' }}>
          <Button color="secondary" style={{ margin: '10px', margin: '0 auto', display: ' block' }}>
            Submit
          </Button>
        </div>
      </div>
      <div style={{ margin: '100px' }}>
        <Label for="exampleEmail">Full Name:-</Label>
        <Alert style={{ width: '50%' }} color="primary">
          This is a primary alert — check it out!
        </Alert>
        <Label for="exampleEmail">Age:-</Label>
        <Alert style={{ width: '50%' }} color="primary">
          This is a primary alert — check it out!
        </Alert>
        <Label for="exampleEmail">Country:-</Label>
        <Alert style={{ width: '50%' }} color="primary">
          This is a primary alert — check it out!
        </Alert>
        <Label for="exampleEmail">Date Of Birth:-</Label>
        <Alert style={{ width: '50%' }} color="primary">
          This is a primary alert — check it out!
        </Alert>
      </div>
    </>
  )
}

export default ProfileModule
