import PostContainer from '../Posts/PostContainer'
import { connect } from 'react-redux'
import { fetchPostData } from './dux'
import { duxSearchHandler } from './dux'

const mapStateToProps = (state) => ({
  postDatas: state.PostsReducer.items,
  searchString: state.PostsReducer.searchString
})
const mapDispatchToProps = {
  fetchPostData,
  duxSearchHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
