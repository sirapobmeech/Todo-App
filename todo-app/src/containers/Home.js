import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProgressBar from '../components/progressBar';
import Task from '../components/taskLayOut';
import { getTodo } from '../actions/todoActions';
import { changeOption } from '../actions/optionActions';
import { changeBackdrop } from '../actions/backdropAction';

const Home = () => {
    const todoStore = useSelector(state => state.todo);
    const optionStore = useSelector(state => state.option);
    const backdropStore = useSelector(state => state.backdrop);

    const [todo, setTodo] = useState([]);
    const [sortTodo, setSortTodo] = useState([]);
    const [type, setType] = useState('all')
    const dispatch = useDispatch();
    // use effect
    useEffect(() => {
        dispatch(getTodo())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (todoStore.data && !todoStore.error && !todoStore.pending) {
            let initialOption = todoStore.data.map((elem) => {
                return { edit: false, menu: false }
            })
            setTodo(todoStore)
            setSortTodo(todoStore)
            dispatch(changeOption(initialOption))
        }
        else if (todoStore.error) {
            alert("ไม่สามารถดาวน์โหลดข้อมูลได้ โปรดลองใหม่อีกครั้งภายหลัง")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todoStore]);
    useEffect(() => {
        filterFunction(type)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todo])

    // method
    const filterFunction = (type) => {
        let temp = todo
        let sort = { data: [] }
        if (type === 'done') {
            sort.data = temp.data.filter((elem) => {
                return elem.completed === true
            })
            setSortTodo(sort)
            setType(type)
        }
        else if (type === 'undone') {
            sort.data = temp.data.filter((elem) => {
                return elem.completed === false
            })
            setSortTodo(sort)
            setType(type)
        }
        else {
            setType(type)
            setSortTodo(temp)
        }
    }
    const closeAllTap = () => {
        let temp = optionStore.map((elem) => {
            return { edit: false, menu: false }
        })
        dispatch(changeOption(temp))
        dispatch(changeBackdrop(false))
    }
    return (
        <div className="main">
            {backdropStore && <div onClick={closeAllTap} className="backdrop">

            </div>}
            <div className="container">
                <div className="progress_bar">
                    {<ProgressBar sortTodo={todo} />}
                </div>
                <div style={{ marginTop: 33 }} className="tasks_bar">
                    {
                        <Task
                            todo={sortTodo}
                            closeAllTap={closeAllTap}
                            filterFunction={filterFunction}
                        />}
                </div>
            </div>
        </div>
    )
}
export default Home