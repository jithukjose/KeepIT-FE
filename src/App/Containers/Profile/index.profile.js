import ProfileContainer from '../Profile/ProfileContainer'
import { connect } from 'react-redux'

import { FormInput } from './dux'

const mapStateToProps = (state) => ({
  inputFormData: state.ToDoReducer.inputFormData
})

const mapDispatchToProps = {
  FormInput
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
