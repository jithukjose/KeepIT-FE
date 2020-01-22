import React, { Component } from 'react'
// import { Route } from 'react-router-dom'

import SearchModule from '../../components/Search/index.search'
import TableModule from '../../components/Tables/index.tables'

class TodosContainer extends Component {
  render() {
    return (
      <div>
        <SearchModule />
        <TableModule />
      </div>

      //    <Route path ="/" exact component={Posts} />
      //    <Route path ="/new-post" exact component ={NewPost} />
      //    <Route path ="/:id" exact component={Fullpost} />
    )
  }
}

export default TodosContainer
