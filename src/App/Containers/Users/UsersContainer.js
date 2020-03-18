import React, { Component } from 'react'
import SearchModule from '../../components/Search/index.search'
import UsersTableModule from '../Users/TableUsers'

import Pagination from "react-js-pagination"


class UsersContainer extends Component {
  state = {
    userData: [],
    slicedData: [],
    isModalButtonClicked: false,
    data: [],
    currentPage: 0,
    searchString: '',
    activePage: 1,
    rowClicked: false,
    rowId: '',
    singleDatas: ''
  }

  componentDidMount() {
    this.getURLParams(window.location)
    // const { fetchUserData } = this.props
    this.fetchUserData()
  }

  //sent Query Paremeters along with URl
  getURLParams = () => {
    //Return the querystring valus of a URL.
    const query = new URLSearchParams(window.location.search)
    const searchParam = query.get('search')
    // const pageParam = query.get('PageNumber')
    const params = {
      search: searchParam,
      activePage: this.state.activePage
    }
    return params
  }

  //Fetch Data from API
  fetchUserData = async () => {
    // const { userData } = this.props
    const TOKEN_KEY = 'jwt';
    const token = localStorage.getItem(TOKEN_KEY)

    let url = 'http://localhost:5000/api/users'

    const params = await this.getURLParams()

    if (params && params.search) url = `${url}?search=${params.search}`
    if (params && params.activePage) url = `${url}?page=${params.activePage}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    })
    const userData = await response.json()
    let userDataRecord = userData.records

    this.setState({
      slicedData: userDataRecord,
      totalCount: userData.metaData.totalCount
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
  //search function
  onSearchBtnClick = () => {
    const { searchString, slicedData } = this.state
    this.props.history.push({
      pathname: '/users',
      search: `search=${searchString}`
    })

    const filteredResult = slicedData.filter((item) =>
      item.name.toLowerCase().match(searchString.toLowerCase())
    )
    this.setState({
      filteredResult
    }, () => this.fetchUserData()
    )

  }


  //Pagination function, Push page number into the URL as a query params
  handlePageChange = (pageNumber) => {
    this.props.history.push({
      pathname: '/users',
      search: `pagenumber=${pageNumber}`
    })
    this.setState({
      activePage: pageNumber
    }, () => {
      this.fetchUserData()
    })
  }

  //add user to user table function
  addUserButtonClick = () => {
    this.setState((prevState) => ({
      isModalButtonClicked: !prevState.isModalButtonClicked
    }))
  }

  onEditChangeHandler = (event, id) => {
    console.log(id, 'here')

    let value = event.target.value
    let fieldName = event.target.name
    this.setState({
      [fieldName]: value//this value will assign to this respective fieldname,


    })

  }

  // edit profile field
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps, 'jit')
  //   const data = {
  //     name: this.state.name,
  //     street: this.state.street,
  //     city: this.state.city
  //   }

  //   // const { userProfileData } = this.props
  //   if (nextProps.data !== data) {
  //     // const { name, street, city } = userProfileData
  //     this.setState({
  //       name: this.state.name,
  //       street: this.state.street, city: this.state.city
  //     })
  //   }
  // }

  onEditClickBtn = (data) => {

    this.setState({
      rowClicked: true,
      rowId: data.id
    })


    // const TOKEN_KEY = 'jwt';
    // const token = localStorage.getItem(TOKEN_KEY)
    // const userIdFromLocalStorege = localStorage.getItem('userId')

    // const response = await fetch(`http://localhost:5000/api/users/${userIdFromLocalStorege}`, {
    //   method: 'PUT',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + token,
    //   },
    //   body: JSON.stringify(changedData)
  }

  onDeleteBtnClick = async (event, id) => {
    const TOKEN_KEY = 'jwt';
    const token = localStorage.getItem(TOKEN_KEY)

    await fetch(`http://localhost:5000/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })

    this.fetchUserData()
  }


  render() {
    const { slicedData, activePage, filteredResult, totalCount, rowClicked, rowId } = this.state

    return (
      <div>
        <SearchModule
          searchHandler={this.SearchHandler}
          onSearchBtnClick={this.onSearchBtnClick}
          keyPressHandler={this.KeyPressHandler}
          onScreenEnterKey={this.onSearchBtnClick}
          inputValue={this.state.searchString}
        />
        <div style={{ float: 'right', paddingright: '100px' }}>

        </div>
        <UsersTableModule userDatas={filteredResult ? filteredResult : slicedData}
          onEditClickBtn={this.onEditClickBtn}
          onDeleteBtnClick={this.onDeleteBtnClick}
          singleDatas={this.singleDatas}
          rowClickHandler={this.rowClickHandler}
          rowClicked={rowClicked}
          rowId={rowId}
          onEditChangeHandler={this.onEditChangeHandler}
        />
        <div style={{ paddingLeft: '35%', fontWeight: '30%' }}>
          <Pagination
            style={{ padding: '20px' }}
            activePage={activePage}
            itemsCountPerPage={5}
            totalItemsCount={totalCount}
            pageRangeDisplayed={4}
            onChange={this.handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />

        </div>

      </div >
    )
  }
}

export default UsersContainer
