export const changeOption = (option) => {
    return dispatch => {
        dispatch({ type: 'CHANGE_OPTION', payload: option })   
    }
}