import axios from 'axios'
import { TEST_FETCH } from './types'

export const exampleFetch = () => {
    return dispatch => {
        dispatch({ type: TEST_FETCH.PENDING, payload: [] })
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                dispatch({ type: TEST_FETCH.SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log("fetch error!")
                dispatch({ type: TEST_FETCH.ERROR, payload: err })
            })
    }
}