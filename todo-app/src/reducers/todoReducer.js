import { GET_TODO } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case GET_TODO.SUCCESS:
            return { error: false, data: action.payload, pending: false }
        case GET_TODO.PENDING:
            return { error: false, data: action.payload, pending: true }
        case GET_TODO.FAILURE:
            return { error: true, data: action.payload, pending: false }
        default:
            return state
    }
}