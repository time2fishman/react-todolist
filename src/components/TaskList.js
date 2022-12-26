import React from 'react';

const TaskList = (props) => {

    const removeListItem = (index) => {
        const filteredTaskList = props.taskList.filter((_, i) => i !== index)
        props.setTaskList(filteredTaskList)
    }

    return (
        <div>
            <h2>Current Tasks:</h2>
            {props.taskList.map((task, index) => {
                return (
                    <section key={index}>
                        <input type='checkbox' />
                        <label>{task}</label>
                        <button onClick={() => removeListItem(index)}>x</button>
                    </section>
                )
            })}
            <button onClick={() => props.setTaskList([])}>Clear List</button>
        </div>
    );
};

export default TaskList;