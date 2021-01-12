export default (state=[],action) => {
    switch (action.type) {
        case 'CHANGE_OPTION':
            return action.payload
        default:
            return state
    }
}