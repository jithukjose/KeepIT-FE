import React, { Component } from 'react'

import CardModule from '../../components/Card/index.card'
import SearchModule from '../../components/Search/index.search'

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postData: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => console.log(json, 'json'))

    {
      let postData = [...this.json]
      postData = this.postData.slice(0, 20)
      console.log(postData, 'postData')
    }
  }

  render() {
    return (
      <React.Fragment>
        <SearchModule />
        <CardModule />
      </React.Fragment>
    )
  }
}

export default PostContainer
