import TodosContainer from '../Todos/TodosContainer'
import { connect } from 'react-redux'

import { fetchTodosData } from './dux'

const mapStateToProps = (state) => ({
  todoData: state.ToDoReducer.todoData

})

const mapDispatchToProps = {
  fetchTodosData
}
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
