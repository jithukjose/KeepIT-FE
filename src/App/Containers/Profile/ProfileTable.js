import React from 'react'
import { Button, FormGroup, FormControl, Label, Input, Alert } from 'reactstrap'
// import DateSelector from '../../components/DatePicker/index.datepicker'
import country from '../../../Helper/Country'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ProfileModule = ({
  onChangeHandler,
  name,
  age,
  doB,
  index,
  profileName,
  profileAge,
  profileCountry,
  profileDate,
  startDate,
  handleChangeForDate,
  newDate,
  OnSubmitButton,
  OnEditButton,
  getName,
  isDataAvaliable,
  proName,
  proage,
  procountry,
  proDate
}) => {
  return (
    <>
      <div style={{ background: '#D9DCD6', margin: '40px' }}>
        <div style={{ margin: '40px', marginLeft: '300px', marginRight: '200px' }}>
          <Label for="exampleEmail">Name</Label>
          <Input
            type="text"
            name="name"
            value={profileName}
            placeholder="Name"
            onChange={(e) => onChangeHandler(e)}
            key={index}
          />
          <div>
            <Label for="exampleEmail">Age</Label>
            <Input
              type="text"
              name="age"
              value={profileAge}
              placeholder="Age"
              onChange={(e) => onChangeHandler(e)}
              key={index}
            />
          </div>

          <Label>Country</Label>
          <Input
            onChange={(e) => onChangeHandler(e)}
            type="select"
            name="country"
            id="exampleSelect"
          >
            {country.map((country) => (
              <option name="country" value={country.value}>
                {country.countryName}
              </option>
            ))}
          </Input>

          <div style={{ margin: '10px' }}>
            <Label for="exampleEmail">Date of Birth</Label>
            <br></br>
            <DatePicker
              selected={startDate}
              onChange={(e) => handleChangeForDate(e)}
              name="date"
            ></DatePicker>
          </div>

          <div style={{ margin: '0 auto', display: ' block' }}>
            <Button
              onClick={(e) => OnSubmitButton(e)}
              color="secondary"
              style={{ margin: '0 auto', display: ' block' }}
            >
              Submit
            </Button>
          </div>
        </div>

        <div style={{ margin: '100px', marginLeft: '450px' }}>
          <Label for="exampleEmail">Full Name:-</Label>
          <Alert style={{ width: '50%' }} color="danger">
            {`${isDataAvaliable ? proName : ''}`}
          </Alert>
          <Label for="exampleEmail">Age:-</Label>
          <Alert style={{ width: '50%' }} color="danger">
            {/* {profileAge} */}
            {`${isDataAvaliable ? proage : ''}`}
          </Alert>
          <Label for="exampleEmail">Country:-</Label>
          <Alert style={{ width: '50%' }} color="danger">
            {/* {profileCountry} */}
            {`${isDataAvaliable ? procountry : ''}`}
          </Alert>
          <Label for="exampleEmail">Date Of Birth:-</Label>
          <Alert style={{ width: '50%' }} color="danger">
            {/* {newDate} */}
            {`${isDataAvaliable ? proDate : ''}`}
          </Alert>
          <div s>
            <Button
              onClick={(e) => OnEditButton(e)}
              color="secondary"
              style={{ margin: '0 auto', display: ' block' }}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileModule
