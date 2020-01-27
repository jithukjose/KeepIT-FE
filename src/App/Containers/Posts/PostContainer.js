import React, { Component } from 'react'

import CardModule from '../../components/Card/index.card'
import SearchModule from '../../components/Search/index.search'

class PostContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     postData: [],
  //     result: '',
  //     searchString: '',
  //     slicedData: []
  //   }
  // }

  state = {
    postData: [],
    result: '',
    searchString: '',
    slicedData: []
  }
  // };

  componentDidMount() {
    // this.setState({ searchString: '' })
    this.fetchData()
  }

  fetchData = (searchString) => {
    let url
    url = 'https://jsonplaceholder.typicode.com/posts'

    if (searchString) {
      url = `${url}/${searchString}`
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('data = ', data)
        const slicedData = searchString ? [data] : data.slice(0, 20)
        this.setState(() => ({ slicedData: slicedData }))
        // this.setState(() => ({ slicedData}))   same as above line
      })
  }

  SearchHandler = (e) => {
    this.setState({
      searchString: e.target.value
    })
  }

  onSearchBtnClick = () => {
    const { searchString } = this.state
    this.fetchData(searchString)
  }

  render() {
    //  {slicedData,slicedDatas} = this.state
    return (
      <>
        <SearchModule searchHandler={this.SearchHandler} onSearchBtnClick={this.onSearchBtnClick} />
        <CardModule
          slicedData={this.state.slicedData}
          // singleSlicedData={this.state.singleSlicedData}
        ></CardModule>
      </>
    )
  }
}

export default PostContainer
