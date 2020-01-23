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
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) =>
        this.setState(
          {
            todoData: json
          },
          () => {
            this.setState({
              slicedData: this.state.todoData.slice(1, 20)
            })
            // console.log('here', slicedData)
          }
        )
      )
  }

  render() {
    const { slicedData } = this.state
    return (
      <div>
        <SearchModule />
        <TodoTableModule todoDatas={slicedData}></TodoTableModule>
      </div>

      //    <Route path ="/" exact component={Posts} />
      //    <Route path ="/new-post" exact component ={NewPost} />
      //    <Route path ="/:id" exact component={Fullpost} />
    )
  }
}

export default TodosContainer
