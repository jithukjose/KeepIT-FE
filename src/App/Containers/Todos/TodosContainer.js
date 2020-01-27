import React, { Component } from 'react'
// import { Route } from 'react-router-dom'

import SearchModule from '../../components/Search/index.search'
import TodoTableModule from '../Todos/TableTodo'

class TodosContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: [],
      slicedData: []
      // singleSlicedData: []
    }
  }

  componentDidMount() {
    this.setState({ searchString: '' })
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
    const { slicedData } = this.state
    return (
      <div>
        <SearchModule searchHandler={this.SearchHandler} onSearchBtnClick={this.onSearchBtnClick} />
        <TodoTableModule slicedData={slicedData}></TodoTableModule>
      </div>
    )
  }
}

export default TodosContainer
