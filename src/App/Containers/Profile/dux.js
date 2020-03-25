//action types/types
const GET_ALL_USER_START = 'USER/GET_ALL_POSTS_START'
const GET_ALL_USER_SUCCESS = 'USER/GET_ALL_POSTS_SUCCESS'
const GET_ALL_USER_FAIL = 'USER/GET_ALL_POSTS_FAIL'

const POST_USER_DATA_START = 'USER/POST_USER_DATA_START'
const POST_USER_DATA_SUCCESS = 'USER/POST_USER_DATA_SUCCESS'
const POST_USER_DATA_FAIL = 'USER/POST_USER_DATA_FAIL'




export const fetchProfileData = () => async (dispatch) => {
    dispatch({ type: GET_ALL_USER_START })

    try {

        const TOKEN_KEY = 'jwt';
        const token = localStorage.getItem(TOKEN_KEY)
        const userIdFromLocalStorege = localStorage.getItem('userId')

        const response = await fetch(`http://localhost:5000/api/users/${userIdFromLocalStorege}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })

        const userProfileData = await response.json()
        dispatch(getUserDataSuccess(userProfileData))

    } catch (error) {
        dispatch({ type: GET_ALL_USER_FAIL })
    }
}

export const postProfileData = (changedData) => async (dispatch) => {
    dispatch({ type: POST_USER_DATA_START })
    try {
        const TOKEN_KEY = 'jwt';
        const token = localStorage.getItem(TOKEN_KEY)
        const userIdFromLocalStorege = localStorage.getItem('userId')

        const response = await fetch(`http://localhost:5000/api/users/${userIdFromLocalStorege}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(changedData)
        })
        const editStatus = await response.json()
        dispatch(postUserDataSuccess(editStatus))


    } catch (error) {
        dispatch({ type: GET_ALL_USER_FAIL })
        // const editStatus = await response.json()
        dispatch(postUserDataFail(error))
    }
}


const getUserDataSuccess = (userProfileData) => ({
    type: GET_ALL_USER_SUCCESS,
    payload: userProfileData
})

const postUserDataSuccess = (editStatus) => ({
    type: POST_USER_DATA_SUCCESS,
    payload: editStatus
})
const postUserDataFail = (error) => ({
    type: POST_USER_DATA_FAIL,
    payload: error
})




const initialState = {
    userProfileData: ''

}
//reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USER_START:
            return { ...state, error: false, areFetching: true }
        case GET_ALL_USER_SUCCESS:
            return { ...state, userProfileData: action.payload, areFetching: false }

        case GET_ALL_USER_FAIL:
            return { ...state, error: true, areFetching: false }


        case POST_USER_DATA_START:
            return { ...state, error: false, areFetching: true }
        case POST_USER_DATA_SUCCESS:
            return { ...state, postDataResponse: action.payload, areFetching: false }

        case POST_USER_DATA_FAIL:
            return { ...state, error: action.payload, areFetching: false }

        default: break;

    }
    return state
}
