import React, { Component } from 'react'

import CardModule from '../../components/Card/index.card'
import SearchModule from '../../components/Search/index.search'

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postData: [],
      slicedData: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) =>
        this.setState(
          {
            postData: json
          },
          () => {
            this.setState({
              slicedData: this.state.postData.slice(1, 20)
            })
            // console.log('here', slicedData)
          }
        )
      )
  }

  render() {
    return (
      <React.Fragment>
        <SearchModule />
        <CardModule postData={this.state.slicedData}></CardModule>
      </React.Fragment>
    )
  }
}

export default PostContainer
