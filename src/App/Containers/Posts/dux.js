//action types/types
const GET_ALL_POSTS_START = 'POSTS/GET_ALL_POSTS_START'
const GET_ALL_POSTS_SUCCESS = 'POSTS/GET_ALL_POSTS_SUCCESS'
const GET_ALL_POSTS_FAIL = 'POSTS/GET_ALL_POSTS_FAIL'

const GET_ALL_SEARCH_SUCCESS = 'POSTS/GET_ALL_SEARCH_SUCCESS'

// const DELETE_SELECTEDPOSTS_START = 'POSTS_DELETE_SELECTEDPOSTS_START'
// const DELETE_SELECTEDPOSTS_SUCCESS = 'POSTS_DELETE_SELECTEDPOSTS_SUCCESS'
// const DELETE_SELECTEDPOSTS_FAIL = 'POSTS_DELETE_SELECTEDPOSTS_FAIL'


// export const onDeleteConfirmClick = (clickedId) => async (dispatch) => {
//   dispatch({ type: DELETE_SELECTEDPOSTS_START })
//   try {
//     const TOKEN_KEY = 'jwt';
//     const token = localStorage.getItem(TOKEN_KEY)
//     const response = await fetch(`  http://localhost:5000/api/posts/${clickedId}`, {
//       method: 'DELETE',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token,
//       },

//     })
//     const deleteSuccess = await response.json()
//     dispatch(deletePostSuccess(deleteSuccess))
//   }
//   catch (error) {
//     dispatch({ type: DELETE_SELECTEDPOSTS_FAIL })
//   }

// }
// const deletePostSuccess = (deleteSuccess) => ({
//   type: DELETE_SELECTEDPOSTS_SUCCESS,
//   payload: deleteSuccess
// })


export const fetchPostData = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POSTS_START })

  try {

    const TOKEN_KEY = 'jwt';
    const token = localStorage.getItem(TOKEN_KEY)

    const response = await fetch('http://localhost:5000/api/posts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },

    })

    const postData = await response.json()
    dispatch(getPostSuccess(postData))

    //22 or dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_ALL_POSTS_FAIL })
  }
}
const getPostSuccess = (postData) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload: postData
})


export const duxSearchHandler = (e) => ({
  type: GET_ALL_SEARCH_SUCCESS,
  payload: e.target.value
})

//Action creator

//inital state
const initialState = {
  items: []
  // searchString:''
}
//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_START:
      return { ...state, error: false, areFetching: true }

    case GET_ALL_POSTS_SUCCESS:
      return { ...state, items: action.payload, areFetching: false }

    case GET_ALL_POSTS_FAIL:
      return { ...state, error: true, areFetching: false }

    case GET_ALL_SEARCH_SUCCESS:

      return { ...state, searchString: action.payload, areFetching: false }

    // case DELETE_SELECTEDPOSTS_START:
    //   return { ...state, error: false, areFetching: true }


    // case DELETE_SELECTEDPOSTS_SUCCESS:
    //   return { ...state, items: action.payload, areFetching: false }

    // case DELETE_SELECTEDPOSTS_FAIL:
    //   return { ...state, error: true, areFetching: false }


    default:
      return state
  }
}
