export default (state=false, action) => {
    switch (action.type) {
        case 'CHANGE_BACKDROP':
            return action.payload
        default:
            return state
    }
}