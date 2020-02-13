import React, { Component } from 'react'
// import { connect } from 'react-redux'

import CardModule from '../../components/Card/index.card'
import SearchModule from '../../components/Search/index.search'
import ModalModule from '../../components/Modal/Modal'

class PostContainer extends React.PureComponent {
  state = {
    postData: [],
    result: '',
    slicedData: [],
    filteredPostResult: [],
    isModalButtonClicked: false
  }

  componentDidMount() {
    const { fetchPostData, postDatas } = this.props
    fetchPostData()

    // this.structuredData(postDatas)
  }

  structuredData = (postDatas) => {
    let slicedDataa = []
    slicedDataa = postDatas.slice(0, 30)
    this.setState({
      slicedData: slicedDataa,
      filteredPostResult: slicedDataa
    })
  }

  componentWillReceiveProps(nextProps) {
    const { fetchPostData, postDatas } = this.props
    // fetchPostData()
    console.log(nextProps, 'prop')

    if (nextProps.postDatas !== postDatas) this.structuredData(nextProps.postDatas)
    // this.structuredData(postDatas)
  }

  // componentDidMount() {
  //   this.fetchDatas()
  // this.KeyPressHandler()

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
  // fetchDatas = () => {
  //   let url
  //   url = 'https://jsonplaceholder.typicode.com/posts'

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let slicedPostData = []
  //       slicedPostData = data.slice(0, 30)
  //       this.setState({
  //         slicedData: slicedPostData,
  //         filteredPostResult: slicedPostData
  //       })
  //     })
  // }
  SearchData = () => {
    // eslint-disable-next-line
    const { filteredPostResult, slicedData } = this.state
    const { searchString } = this.props

    let filteredResults = []
    filteredResults = slicedData.filter((item) =>
      item.title.toLowerCase().match(searchString.toLowerCase())
    )

    this.setState({ filteredPostResult: filteredResults })
  }

  //
  // SearchHandler = (e) => {
  // this.setState({
  //   searchString: e.target.value
  // })

  SearchHandler = (e) => {
    const { duxSearchHandler } = this.props
    duxSearchHandler(e)
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
  onModalClick = () => {
    console.log('here')

    this.setState((prevState) => ({
      isModalButtonClicked: !prevState.isModalButtonClicked
    }))
  }

  render() {
    const { filteredPostResult, isModalButtonClicked } = this.state
    const { postDatas } = this.props

    return (
      <>
        <SearchModule
          searchHanhdler={this.SearchHandler}
          onSearchBtnClick={this.onSearchBtnClick}
          keyPressHandler={this.KeyPressHandler}
          onScreenEnterKey={this.OnScreenEnterKey}
        ></SearchModule>
        <CardModule
          slicedData={filteredPostResult}
          onDeleteClick={this.OnDeleteClick}
          onModalClick={this.onModalClick}
        ></CardModule>
        <ModalModule
          onModalClick={this.onModalClick}
          isModalButtonClicked={isModalButtonClicked}
        ></ModalModule>
      </>
    )
  }
}

export default PostContainer
