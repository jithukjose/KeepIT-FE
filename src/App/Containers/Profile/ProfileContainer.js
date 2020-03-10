import React, { Component } from 'react'
import ProfileModule from '../Profile/ProfileTable'
import moment from 'moment'

class ProfileContainer extends Component {
  state = {
    name: '',
    age: '',
    country: '',
    date: '',
    startDate: new Date(),
    isDataAvaliable: false,
    myname: ''
    // profileName: ''
  }

  // onNameChangeHandler = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }

  handleChangeForDate = (date) => {
    const newdate = moment(date).format('MM/DD/YYYY')

    this.setState({
      startDate: date,
      newDate: newdate
    })
  }

  onChangeHandler = (event) => {
    let value = event.target.value
    let fieldName = event.target.name

    this.setState({
      [fieldName]: value //this value will assign to this respective fieldname
    })
  }
  OnSubmitButton = (event) => {
    // const { InputForm, inputFormData } = this.props
    // InputForm()
    this.setState({
      isDataAvaliable: true,
      fullname: this.state.name,
      agevalue: this.state.age,
      countryValue: this.state.country,
      dateValue: this.state.newDate
    })


    this.setState({
      // profileName:
      name: '',
      age: '',
      country: '',
      newDate: ''
    })

    // this.setState({
    //   profileName: this.state.name,
    //   getAge: this.state.age,
    //   getCountry: this.state.country,
    //   getDate: this.state.newDate
    // })
  }
  OnEditButton = () => {
    this.setState({
      fullname: '',
      agevalue: '',
      countryValue: '',
      dateValue: ''
    })

    // console.log(this.myName, 'mm')
    // this.setState({
    //   fullname: this.myName
    // })
  }

  render() {
    const {
      name,
      age,
      isDataAvaliable,
      country,
      startDate,
      newDate,
      fullname,
      agevalue,
      countryValue,
      dateValue
    } = this.state

    return (
      <ProfileModule
        isDataAvaliable={isDataAvaliable}
        OnSubmitButton={this.OnSubmitButton}
        startDate={startDate}
        handleChangeForDate={this.handleChangeForDate}
        onChangeHandler={this.onChangeHandler}
        profileName={name}
        proName={fullname}
        proage={agevalue}
        procountry={countryValue}
        profileAge={age}
        profileCountry={country}
        profileDate={newDate}
        proDate={dateValue}
        OnEditButton={this.OnEditButton}
      />
    )
  }
}

export default ProfileContainer
