export const changeBackdrop = (status) => {
    return dispatch => {
        dispatch({ type: 'CHANGE_BACKDROP', payload: status })   
    }
}