import React, { Component } from 'react'
import SearchModule from '../../components/Search/index.search'
import UsersTableModule from '../Users/TableUsers'
// import ModalModule from './ModalUsers'
// import { Button } from 'reactstrap'

import Pagination from "react-js-pagination"
// require("bootstrap/less/bootstrap.less");

class UsersContainer extends Component {
  state = {
    userData: [],
    slicedData: [],
    isModalButtonClicked: false,
    data: [],
    currentPage: 0,
    searchString: '',
    activePage: 1
  }

  componentDidMount() {
    const params = this.getURLParams(window.location)

    console.log(params, 'params')
    // this.setState({ searchString: params.search }, () =>

    this.fetchDatas()
    // )

  }

  //sent Query Paremeters along with URl
  getURLParams = () => {
    //Return the querystring valus of a URL.
    const query = new URLSearchParams(window.location.search)

    console.log(query.get('PageNumber'), 'query')
    const searchParam = query.get('search')
    const pageParam = query.get('PageNumber')
    console.log(pageParam, 'newpageparams')

    const params = {
      search: searchParam,
      activePage: pageParam
    }
    return params
  }

  //Fetch Data from API
  fetchDatas = async () => {
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
    console.log(userDataRecord, "sliceddata")
    this.setState({
      slicedData: userDataRecord
    }, () =>
      console.log(this.state.slicedData, "final"))
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
    }, () => this.fetchDatas())
  }


  //Pagination function, Push page number into the URL as a query params
  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({
      activePage: pageNumber
    }, () =>
      this.props.history.push({
        pathname: '/users',
        search: `PageNumber=${this.state.activePage}`
      }),
      this.fetchDatas(),
    )
  }


  //add user to user table function
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


  render() {
    const { slicedData, activePage, searchString, isModalButtonClicked, filteredResult } = this.state
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
        <UsersTableModule userDatas={filteredResult ? filteredResult : slicedData}></UsersTableModule>
        <div style={{ paddingLeft: '40%', }}>
          <Pagination
            style={{ padding: '20px' }}
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange}
          />


        </div>

      </div>
    )
  }
}

export default UsersContainer
