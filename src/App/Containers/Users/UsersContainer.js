import React, { Component } from 'react'

import SearchModule from '../../components/Search/index.search'
import UsersTableModule from '../Users/TableUsers'

class UsersContainer extends Component {
  state = {
    userData: [],
    slicedData: []
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
    url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let slicedDataa = []
        slicedDataa = data.slice(0, 30)
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
  render() {
    const { slicedData, searchString } = this.state
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
        <UsersTableModule userDatas={filteredResult}></UsersTableModule>
      </div>
    )
  }
}

export default UsersContainer
