import { GET_TODO, FETCH_TODO } from './types'
import api from '../api/todoApi'

export const getTodo = () => {
    return dispatch => {
        dispatch({ type: GET_TODO.PENDING, payload: [] })
        api.get("/todos")
            .then((res) => {
                dispatch({ type: GET_TODO.SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: GET_TODO.FAILURE, payload: err })
            })
    }
}

export const addTodo = (title) => {
    return dispatch => {
        dispatch({ type: FETCH_TODO.PENDING, payload: [] });
        api.post('/todos', {
            "title": title,
            "completed": false,
        })
            .then((res) => {
                dispatch(getTodo())
                dispatch({ type: FETCH_TODO.SUCCESS, payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: FETCH_TODO.FAILURE, payload: err })
            })
    }
}

export const deleteTodo = (id) => {
    return dispatch => {
        dispatch({ type: FETCH_TODO.PENDING, payload: [] });
        api.delete(`/todos/${id}`)
            .then((res) => {
                dispatch(getTodo())
                dispatch({ type: FETCH_TODO.SUCCESS, payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: FETCH_TODO.FAILURE, payload: err })
            })
    }
}

export const saveTodo = (title, id) => {
    return dispatch => {
        dispatch({ type: FETCH_TODO.PENDING, payload: [] });
        api.patch(`/todos/${id}`, {
            "title": title,
        })
            .then((res) => {
                dispatch(getTodo())
                dispatch({ type: FETCH_TODO.SUCCESS, payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: FETCH_TODO.FAILURE, payload: err })
            })
    }
}

export const changeStatusTodo = (status, id) => {
    return dispatch => {
        dispatch({ type: FETCH_TODO.PENDING, payload: [] });
        api.patch(`/todos/${id}`, {
            "completed": status,
        })
            .then((res) => {
                dispatch(getTodo())
                dispatch({ type: FETCH_TODO.SUCCESS, payload: res.data })

            })
            .catch((err) => {
                dispatch({ type: FETCH_TODO.FAILURE, payload: err })
            })
    }
}

