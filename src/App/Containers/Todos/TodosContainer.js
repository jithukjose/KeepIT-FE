import React, { Component } from 'react'
// import { Route } from 'react-router-dom'

import SearchModule from '../../components/Search/index.search'
import TodoTableModule from '../Todos/TableTodo'

class TodosContainer extends Component {
  state = {
    todoData: [],
    slicedData: [],
    result: [],
    filteredtodoResult: []
  }

  //Before redux

  // fetchDatas = (state) => {
  //   let url
  //   url = 'https://jsonplaceholder.typicode.com/todos'

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let slicedDataa = []
  //       slicedDataa = data.slice(0, 30)
  //       this.setState({
  //         slicedData: slicedDataa,
  //         filteredtodoResult: slicedDataa
  //       })
  //     })
  // }
  componentDidMount() {
    const { fetchTodosData } = this.props
    fetchTodosData()
  }
  componentWillReceiveProps(nextProps) {
    const { todoData } = this.props
    console.log(nextProps, 'prop')
    if (nextProps.todoData !== todoData) this.structuredData(nextProps.todoData)
  }

  structuredData = (todoData) => {
    let slicedDataa = []
    slicedDataa = todoData.slice(0, 30)
    console.log(slicedDataa, 'data')
    this.setState({
      slicedData: slicedDataa,
      filteredtodoResult: slicedDataa
    })
  }

  SearchData = () => {
    // eslint-disable-next-line
    const { filteredPostResult, slicedData, searchString } = this.state
    let filteredResults = []
    filteredResults = slicedData.filter((item) =>
      item.title.toLowerCase().match(searchString.toLowerCase())
    )
    this.setState({ filteredtodoResult: filteredResults })
  }

  // fetchData = (searchString) => {
  //   let { slicedData } = this.state
  //   let result = slicedData.filter((str) => {
  //     return str.toLowerCase().match(searchString.toLowerCase())
  //   })
  // }

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

  onSearchBtnClick = () => {
    const { searchString } = this.state
    this.fetchData(searchString)
  }

  render() {
    const { filteredtodoResult } = this.state
    return (
      <div>
        <SearchModule
          searchHandler={this.SearchHandler}
          onSearchBtnClick={this.OnSearchBtnClick}
          keyPressHandler={this.KeyPressHandler}
          onScreenEnterKey={this.OnScreenEnterKey}
        />
        <TodoTableModule slicedData={filteredtodoResult}></TodoTableModule>
      </div>
    )
  }
}

export default TodosContainer
