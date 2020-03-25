const GET_ALL_USERS_START = 'USER/GET_ALL_USERS_START'
const GET_ALL_USERS_SUCCESS = 'USER/GET_ALL_USERS_SUCCESS'
const GET_ALL_USES_FAIL = 'USER/POSTS/GET_ALL_USES_FAIL'



export const fetchUserData = async (dispatch) => {
    dispatch({ type: GET_ALL_USERS_START })
    try {


        const TOKEN_KEY = 'jwt';
        const token = localStorage.getItem(TOKEN_KEY)

        let url = 'http://localhost:5000/api/users'

        const params = await this.getURLParams()

        if (params && params.search) url = `${url}?search=${params.search}`
        if (params && params.activePage) url = `${url}?page=${params.activePage}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
        const userData = await response.json()
        dispatch({ GET_ALL_USERS_SUCCESS })

        return {
            payload: userData
        };
    }
    catch (error) {
        dispatch({ type: GET_ALL_USES_FAIL })
    }
}


const initialState = {
    userData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS_START:
            return { ...state, error: false, areFetching: true }
        case GET_ALL_USERS_SUCCESS:
            return { ...state, userData: action.payload, areFetching: false }
        case GET_ALL_USES_FAIL:
            return { ...state, error: true, areFetching: false }

        default:
            return state
    }
}