import React from 'react';
import './taskLayOut.css';
import threeDots from '../assets/images/more.png';
const TodolistItem = ({ elem, option, setOption, index, onDelete, setBackDrop, closeAllTap, titleEdit, setTitleEdit, onSave, changeTodo }) => {
    const threeDotClick = () => {
        setBackDrop(true)
        setOption([...option, option[index].menu = true])
    }
    const editButtonClick = () => {
        closeAllTap()
        setTitleEdit(elem.title)
        setOption([...option, option[index].menu = false, option[index].edit = true])
    }
    const onChange = (status, id) => {
        changeTodo(!status, id)
    }
    return (
        <div className="todolist_item">
            <div>
                {!option[index].edit && <label className="content">
                    <input onChange={() => onChange(elem.completed, elem.id)} checked={elem.completed} type="checkbox" id={elem.id} name="status" value={elem.id} />
                    <div className="checkmark"></div>
                    <span style={{ marginLeft: 16, color: elem.completed ? "#A9A9A9" : "#000000", textDecoration: elem.completed ? "line-through" : "none" }} className="content_topic">{elem.title}</span>
                </label>}
                {option[index].edit &&
                    <div className="todolist_input">
                        <input onChange={(e) => setTitleEdit(e.target.value)} value={titleEdit} style={{ marginLeft: 16 }} className="content_topic" />
                    </div>}
            </div>
            <div>
                {!option[index].edit && <img onClick={() => threeDotClick()} style={{ cursor: "pointer" }} style={{ width: 20, minHeight: 5 }} src={threeDots} />}
                {option[index].edit && <div>
                    <button onClick={() => onSave(titleEdit, elem.id)} className="todolist_button">SAVE</button>
                </div>}
                {option[index].menu && !option[index].edit && <div style={{ width: 1, height: 1, textAlign: "left", zIndex: 999 }}>
                    <div className="option_modal">
                        <div onClick={() => editButtonClick()} style={{ fontWeight: "normal", cursor: "pointer" }} className="content_topic">
                            Edit
                        </div><br />
                        <div onClick={() => onDelete(elem.id)} style={{ color: "#E07C7C", fontWeight: "normal", cursor: "pointer" }} className="content_topic">
                            Delete
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default TodolistItem;