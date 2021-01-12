import React, { useState } from 'react';
import './taskLayOut.css';
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todoActions'
import TodoListItem from './todolistItem'
const Task = ({ todo, closeAllTap, filterFunction }) => {
    const [title, setTitle] = useState([]);
    const dispatch = useDispatch()
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTodo(title))
            setTitle('')
        }
    }
    return (
        <div>
            <div className="task_container">
                <div>
                    <span className="head_topic" style={{ color: "#000" }}>Task</span>
                </div>
                <div>
                    <select className="select" onChange={(e) => filterFunction(e.target.value)}>
                        <option value="all">All</option>
                        <option value="done">Done</option>
                        <option value="undone">Undone</option>
                    </select>
                </div>
            </div>
            {todo.data && todo.data.length > 0 && <div style={{ marginTop: 16 }}>
                {todo.data.map((elem, index) => {
                    return (
                        <div key={index}>
                            <TodoListItem
                                closeAllTap={closeAllTap}
                                index={index}
                                elem={elem} />
                        </div>
                    )
                })}
            </div>}

            <div className="todolist_item">
                <div className="todolist_input">
                    <input
                        className="content_topic add_todo"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        onKeyDown={(e) => _handleKeyDown(e)}
                        placeholder="Add your todo..."
                    />
                </div>
            </div>

        </div>
    )
}
export default Task