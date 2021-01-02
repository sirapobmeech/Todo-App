import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProgressBar from '../components/progressBar';
import Task from '../components/taskLayOut';
import { getTodo, addTodo, deleteTodo, saveTodo, changeStatusTodo } from '../actions/todoActions'

function Home() {
    const dispatch = useDispatch()
    let todoStore = useSelector(state => state.todo)

    const [todo, setTodo] = useState([])
    const [sortTodo, setSortTodo] = useState([])
    const [title, setTitle] = useState([])
    const [titleEdit, setTitleEdit] = useState([])
    const [option, setOption] = useState([])
    const [backdrop, setBackDrop] = useState(false)
    const [type, setType] = useState('all')

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
            setOption(initialOption)
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
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTodo(title))
            setTitle('')
        }   
    }
    const onDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    const onSave = (title, id) => {
        dispatch(saveTodo(title, id))
        closeAllTap()
    }
    const changeTodo = (status, id) => {
        dispatch(changeStatusTodo(status, id))
    }
    const closeAllTap = () => {
        let temp = option.map((elem) => {
            return { edit: false, menu: false }
        })
        setOption(temp)
        setBackDrop(false)
    }
    return (
        <div className="main">
            {backdrop && <div onClick={closeAllTap} className="backdrop">

            </div>}
            <div className="container">
                <div className="progress_bar">
                    {<ProgressBar sortTodo={todo} />}
                </div>
                <div style={{ marginTop: 33 }} className="tasks_bar">
                    {
                        <Task
                            todo={sortTodo}
                            onEnter={_handleKeyDown}
                            title={title}
                            setTitle={setTitle}
                            option={option}
                            setOption={setOption}
                            onDelete={onDelete}
                            setBackDrop={setBackDrop}
                            closeAllTap={closeAllTap}
                            titleEdit={titleEdit}
                            setTitleEdit={setTitleEdit}
                            onSave={onSave}
                            changeTodo={changeTodo}
                            filterFunction={filterFunction}
                        />}
                </div>
            </div>
        </div>
    )
}
export default Home