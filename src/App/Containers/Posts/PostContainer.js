import React, { Component } from 'react'

import CardModule from '../../components/Card/index.card'
import SearchModule from '../../components/Search/index.search'

class PostContainer extends Component {
  state = {
    postData: [],
    result: '',
    slicedData: [],
    isModalOpen: false,
    filteredPostResult: []
  }
  // };

  componentDidMount() {
    this.fetchDatas()
    // this.KeyPressHandler()
  }

  // fetchData = (searchString) => {
  //   let url
  //   url = 'https://jsonplaceholder.typicode.com/posts'

  //   if (searchString) {
  //     url = `${url}/${searchString}`
  //   }
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const slicedData = searchString ? [data] : data.slice(0, 20)
  //       this.setState(() => ({ slicedData: slicedData }))
  //       // this.setState(() => ({ slicedData}))   same as above line
  //     })
  // }
  fetchDatas = () => {
    let url
    url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let slicedPostData = []
        slicedPostData = data.slice(0, 30)
        this.setState({
          slicedData: slicedPostData,
          filteredPostResult: slicedPostData
        })
      })
  }
  SearchData = () => {
    // eslint-disable-next-line
    const { filteredPostResult, slicedData, searchString } = this.state
    let filteredResults = []
    filteredResults = slicedData.filter((item) =>
      item.title.toLowerCase().match(searchString.toLowerCase())
    )
    this.setState({ filteredPostResult: filteredResults })
  }

  SearchHandler = (e) => {
    this.setState({
      searchString: e.target.value
    })
  }

  KeyPressHandler = (e) => {
    if (e.keyCode === 13) {
      console.log('hello')
      this.SearchData()
    }
  }

  OnScreenEnterKey = (e) => {
    this.SearchData()
  }

  OnDeleteClick = (e, id) => {
    const { filteredPostResult } = this.state
    let deletedData = []
    deletedData = filteredPostResult.filter((post) => post.id !== id)
    this.setState({
      slicedData: deletedData,
      filteredPostResult: deletedData
    })
  }

  render() {
    const { filteredPostResult } = this.state

    return (
      <>
        <SearchModule
          searchHandler={this.SearchHandler}
          onSearchBtnClick={this.onSearchBtnClick}
          keyPressHandler={this.KeyPressHandler}
          onScreenEnterKey={this.OnScreenEnterKey}
        ></SearchModule>
        <CardModule slicedData={filteredPostResult} onDeleteClick={this.OnDeleteClick}></CardModule>
      </>
    )
  }
}

export default PostContainer
