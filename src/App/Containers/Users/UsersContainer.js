import React, { Component } from 'react'
import SearchModule from '../../components/Search/index.search'
import UsersTableModule from './TableUsers'

import Pagination from "react-js-pagination"
import DeleteModalModule from '../../components/Modal/DeleteModalModule'



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
    singleDatas: '',
    saveBtn: false
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

  onEditChangeHandler = (event, id) => {
    let value = event.target.value
    let fieldName = event.target.name
    this.setState({

      [fieldName]: value//this value will assign to this respective fieldname,
    })
  }


  onEditClickBtn = (data, id) => {
    this.setState({
      rowClicked: true,
      rowId: data.id,
      saveBtn: true,
    })

    const editedData = {
      name: this.state.name,
      street: this.state.street,
      city: this.state.city
    }
    const TOKEN_KEY = 'jwt';
    const token = localStorage.getItem(TOKEN_KEY)
    if (this.state.saveBtn) {
      fetch(`http://localhost:5000/api/users/${data.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(editedData)
      })
      this.setState({
        saveBtn: false,
        rowClicked: false
      })
    }
    this.fetchUserData()
  }

  onDeleteBtnClick = async (event, id) => {
    const TOKEN_KEY = 'jwt';
    const token = localStorage.getItem(TOKEN_KEY)
    this.setState({
      clickedId: id
    })

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

  //delete user data after modal confirmation
  onDeleteConfirmClick = () => {

    this.setState((prevState) => ({
      isDeleteModalButtonClicked: !prevState.isDeleteModalButtonClicked,

    }))

    const TOKEN_KEY = 'jwt';
    const token = localStorage.getItem(TOKEN_KEY)

    fetch(`http://localhost:5000/api/users/${this.state.clickedId}`, {
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
    const { slicedData, activePage, filteredResult, totalCount, rowClicked, rowId, saveBtn, isDeleteModalButtonClicked } = this.state
    console.log(saveBtn, 'here')
    return (
      <>
        <div class="container text-center" >
          <div class="costumModal">
            <h1 class="title" style={{ fontSize: '60px', color: '#757575', fontWeight: 'bold', paddingLeft: '400px' }}>
              Contacts
        </h1>
          </div>
        </div>



        <div style={{ paddingLeft: '10%', paddingTop: '60px' }}>
          <SearchModule
            searchHandler={this.SearchHandler}
            onSearchBtnClick={this.onSearchBtnClick}
            keyPressHandler={this.KeyPressHandler}
            onScreenEnterKey={this.onSearchBtnClick}
            inputValue={this.state.searchString}
          />



          <UsersTableModule userDatas={filteredResult ? filteredResult : slicedData}
            onEditClickBtn={this.onEditClickBtn}
            onDeleteBtnClick={this.onDeleteBtnClick}
            singleDatas={this.singleDatas}
            rowClickHandler={this.rowClickHandler}
            rowClicked={rowClicked}
            rowId={rowId}
            onEditChangeHandler={this.onEditChangeHandler}
            saveBtn={saveBtn}
          />


          <div style={{ paddingLeft: '35%', fontWeight: '30%' }}>
            <Pagination
              style={{ padding: '20px' }}
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={totalCount}
              pageRangeDisplayed={4}
              onChange={this.handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
          <DeleteModalModule
            onModalClick={this.OnDeleteClick}
            isDeleteModalButtonClicked={isDeleteModalButtonClicked}
            onDeleteConfirmClick={this.onDeleteConfirmClick}
          />


        </div >

      </>
    )
  }

}
export default UsersContainer
