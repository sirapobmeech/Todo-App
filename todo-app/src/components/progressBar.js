import React from 'react'
import './progressBar.css'

const ProgressBar = ({sortTodo}) => {
    let  total = 0;
    let complete = 0;
   sortTodo.data && sortTodo.data.forEach((elem) => {
        total++
        if(elem.completed){
            complete++
        }
    })
    return (
        <div className="progress_container">
            <span style={{ color: "#FFF" }} className="head_topic">Progress</span>
            <div className="loading_container">
                <div style={{width : `${(complete/total) * 100}%`}} className="success_bar">

                </div>
            </div>
            <span style={{ color: "#EBB9B8" }} className="content_topic">
                {complete} Completed
           </span>
        </div>
    )
}

export default ProgressBar