import React, { Component } from 'react'

import SearchModule from '../../components/Search/index.search'
import UsersTableModule from '../Users/TableUsers'
import ModalModule from './ModalUsers'
import { Button } from 'reactstrap'

class UsersContainer extends Component {
  state = {
    userData: [],
    slicedData: [],
    isModalButtonClicked: false,
    data: []
  }

  componentDidMount() {
    this.setState({ searchString: '' })
    this.fetchDatas()
  }

  // fetchData = (searchString) => {
  //   let url
  //   url = 'https://jsonplaceholder.typicode.com/users'

  //   if (searchString) {
  //     url = `${url}/${searchString}`
  //   }
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // const slicedData = searchString ? [data] : data.slice(0, 20)
  //       this.setState(() => ({ slicedData: slicedData }))
  //       // this.setState(() => ({ slicedData}))   same as above line
  //     })
  // }

  fetchDatas = () => {
    let url
    // url = 'https://jsonplaceholder.typicode.com/users'

    url = 'http://localhost:5000/api/users'

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data, 'data')
        let slicedDataa = []
        slicedDataa = data.slice(0, 100)
        this.setState({
          slicedData: slicedDataa
        })
      })
  }

  KeyPressHandler = (e) => {
    if (e.keyCode === 13) {
    }
  }

  SearchHandler = (e) => {
    this.setState({
      searchString: e.target.value
    })
  }

  OnScreenEnterKey = (e) => {}

  onSearchBtnClick = () => {
    const { searchString } = this.state
    this.fetchData(searchString)
  }

  addUserButtonClick = () => {
    this.setState((prevState) => ({
      isModalButtonClicked: !prevState.isModalButtonClicked
    }))
  }

  onChangeHandler = (event) => {
    let value = event.target.value
    let fieldName = event.target.name
    this.setState({
      [fieldName]: value //this value will assign to this respective fieldname
    })
  }
  onModalSubmit = () => {
    let personalData = {
      name: this.state.name,
      email: this.state.email,
      street: this.state.street,
      city: this.state.city
    }

    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(personalData)
    })
      .then(() => {
        // this.setState((prevState) => ({
        //   isModalButtonClicked: !prevState.isModalButtonClicked
        // }))
        this.addUserButtonClick()
        this.fetchDatas()
      })
      .catch(function(e) {
        alert('Error submitting form!')
      })
  }

  render() {
    const { slicedData, searchString, isModalButtonClicked } = this.state

    const filteredResult = slicedData.filter((item) =>
      item.name.toLowerCase().match(searchString.toLowerCase())
    )
    return (
      <div>
        <SearchModule
          searchHandler={this.SearchHandler}
          onSearchBtnClick={this.onSearchBtnClick}
          keyPressHandler={this.KeyPressHandler}
          onScreenEnterKey={this.OnScreenEnterKey}
        />
        <Button
          color="primary"
          style={{ float: 'right', paddingLeft: '30px' }}
          onClick={this.addUserButtonClick}
        >
          Add User
        </Button>
        <UsersTableModule userDatas={filteredResult}></UsersTableModule>
        <ModalModule
          addUserButtonClicked={this.addUserButtonClick}
          isModalButtonClicked={isModalButtonClicked}
          onModalSubmit={this.onModalSubmit}
          onChangeHandler={this.onChangeHandler}
        ></ModalModule>
      </div>
    )
  }
}

export default UsersContainer
