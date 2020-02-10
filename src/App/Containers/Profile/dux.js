export const INPUT_DATA_RECEVIED = 'INPUT_DATA_RECEVIED'


export const  FormInput= ()=>(dispatch){
    // return new Promise((resolve, reject) => {
            dispatch({ type: DATAS_ARE_FETCHING })
            dispatch(
                onSuccess = (response) => {
                    return {
                      type: INPUT_DATA_RECEVIED,
                      payload: response
                    }
                  })
}
 
const initialState = {
  inputFormData:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_DATA_RECEVIED:
      return { ...state, inputFormData: action.payload }

    default:
      return state
  }
}
