import React from 'react';

const CreateTask = (props) => {

    const handleChange = (event) => {
        props.setNewTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setTaskList((currentTaskList) => [...currentTaskList, props.newTask])
        event.target.reset()
    }

    return (
        <div>
            <h2>Create New Task</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='add-task'></label>
                <input onChange={handleChange} type='text' id='add-task' name='add-task' />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default CreateTask;