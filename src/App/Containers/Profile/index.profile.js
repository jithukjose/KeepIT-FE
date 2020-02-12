import ProfileContainer from '../Profile/ProfileContainer'
import { connect } from 'react-redux'
// import { fetchDatas } from './dux'

////onAddTodo  ===>onProfile
const mapDispatchToProps = {
  // fetchDat
}
// const mapStateToProps = (state) => ({
//   items: state.ToDoReducer.items
// })

export default connect(null, mapDispatchToProps)(ProfileContainer)
