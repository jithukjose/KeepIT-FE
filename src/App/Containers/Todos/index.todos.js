import TodosContainer from '../Todos/TodosContainer'
import { connect } from 'react-redux'

import { fetchDatas } from './dux'

const mapStateToProps = (state) => ({
  items: state.ToDoReducer.items
})

const mapDispatchToProps = {
  fetchDatas
}
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
