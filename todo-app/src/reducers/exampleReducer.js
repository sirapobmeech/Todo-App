import { TEST_FETCH } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case TEST_FETCH.SUCCESS:
            return { error: false, data: action.payload, pending: false }
        case TEST_FETCH.PENDING:
            return { error: false, data: action.payload, pending: true }
        case TEST_FETCH.ERROR:
            return { error: true, data: action.payload, pending: false }
        default:
            return state
    }
}