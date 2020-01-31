import React, { Component } from 'react'
import ProfileModule from '../Profile/ProfileTable'
import moment from 'moment'

class ProfileContainer extends Component {
  state = {
    name: '',
    age: '',
    country: '',
    date: '',
    startDate: new Date()
  }

  // onNameChangeHandler = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }

  handleChangeForDate = (date) => {
    console.log(date, 'da')
    const newdate = moment(date).format('MM/DD/YYYY')
    console.log(newdate)

    this.setState({
      startDate: date,
      newDate: newdate
    })
  }

  onChangeHandler = (event) => {
    console.log(event, 'event')
    let value = event.target.value
    let fieldName = event.target.name

    console.log(fieldName, 'hii')
    console.log(value, 'hiii')

    this.setState(
      {
        [fieldName]: value //this value will assign to this respective fieldname
      },
      () => {
        // console.log(fieldName, '----------', value)
      }
    )
  }

  render() {
    const { name, age, country, date } = this.state

    return (
      <ProfileModule
        startDate={this.state.startDate}
        handleChangeForDate={this.handleChangeForDate}
        onChangeHandler={this.onChangeHandler}
        profileName={name}
        profileAge={age}
        profileCountry={country}
        profileDate={date}
        newDate={this.state.newDate}
      />
    )
  }
}

export default ProfileContainer
