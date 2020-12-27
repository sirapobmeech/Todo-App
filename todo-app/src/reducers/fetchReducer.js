import { FETCH_TODO } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TODO.SUCCESS:
            return { error: false, data: action.payload, pending: false }
        case FETCH_TODO.PENDING:
            return { error: false, data: action.payload, pending: true }
        case FETCH_TODO.FAILURE:
            return { error: true, data: action.payload, pending: false }
        default:
            return state
    }
}