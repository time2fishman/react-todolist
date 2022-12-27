import React from 'react';

const TaskList = (props) => {

    const removeListItem = (index) => {
        const filteredTaskList = props.taskList.filter((_, i) => i !== index)
        props.setTaskList(filteredTaskList)
    }

    return (
        <div>
            <h2 id='currentTasks-heading'>Current Tasks</h2>
            {props.taskList.map((task, index) => {
                return (
                    <section className='list-item' key={index}>
                        <input className='checkbox' type='checkbox' />
                        <label>{task}</label>
                        <button className='remove-item-btn' onClick={() => removeListItem(index)}>x</button>
                    </section>
                )
            })}
            <button id='clearList-btn' onClick={() => props.setTaskList([])}>Clear List</button>
        </div>
    );
};

export default TaskList;