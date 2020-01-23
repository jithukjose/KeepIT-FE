import React, { Component } from 'react'

import SearchModule from '../../components/Search/index.search'
import UsersTableModule from '../Users/TableUsers'

class UsersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      slicedData: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) =>
        this.setState(
          {
            usersData: json
          },
          () => {
            this.setState({
              slicedData: this.state.usersData.slice(1, 20)
            })
            // console.log('here', slicedData)
          }
        )
      )
  }

  render() {
    const { slicedData } = this.state
    return (
      <div>
        <SearchModule />
        <UsersTableModule userDatas={slicedData}></UsersTableModule>
      </div>
    )
  }
}

export default UsersContainer
