import React from 'react'
// import { connect } from 'react-redux'

import CardModule from '../../components/Card/index.card'
import SearchModule from '../../components/Search/index.search'
import ModalModule from '../../components/Modal/Modal'
import classes from './posts.module.css'

import CardsModule from './PostCard'
import './PostsModules.css'

class PostContainer extends React.PureComponent {
  state = {
    postData: [],
    result: '',
    slicedData: [],
    filteredPostResult: [],
    isModalButtonClicked: false
  }

  componentDidMount() {
    const { fetchPostData } = this.props
    fetchPostData()
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
    const { postDatas } = this.props
    console.log(postDatas, 'posr')

    if (nextProps.postDatas !== postDatas) this.structuredData(nextProps.postDatas)
  }

  SearchData = () => {

    const { slicedData } = this.state
    const { searchString } = this.props

    let filteredResults = []
    filteredResults = slicedData.filter((item) =>
      item.title.toLowerCase().match(searchString.toLowerCase())
    )

    this.setState({ filteredPostResult: filteredResults })
  }

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
  onDetailClick = (e, id) => {

    const { postDatas } = this.props

    if (postDatas && id) {
      const selectedItem = postDatas.filter((listItem) => listItem.id === id)
      const postBody = selectedItem[0].body
      this.setState({
        selectedItem, postBody
      })
    }

    this.setState((prevState) => ({
      isModalButtonClicked: !prevState.isModalButtonClicked,

    }))
  }

  render() {
    const { filteredPostResult, isModalButtonClicked, postBody } = this.state

    return (
      <div className={classes.postcontainer}>
        <SearchModule
          searchHandler={this.SearchHandler}
          onSearchBtnClick={this.onSearchBtnClick}
          keyPressHandler={this.KeyPressHandler}
          onScreenEnterKey={this.OnScreenEnterKey}
        />
        {/* <div className={classes.cardcontainer}>
          <CardModule
            slicedData={filteredPostResult}
            onDeleteClick={this.OnDeleteClick}
            onDetailClick={this.onDetailClick}
          />
        </div> */}
        <ModalModule
          onModalClick={this.onDetailClick}
          isModalButtonClicked={isModalButtonClicked}
          postBody={postBody}
        />
        <CardsModule
          slicedData={filteredPostResult}
          onDeleteClick={this.OnDeleteClick}
          onDetailClick={this.onDetailClick} />

      </div>
    )
  }
}

export default PostContainer
