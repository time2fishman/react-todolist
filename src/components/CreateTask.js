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
        <div id='createTask-container'>
            <h2 id='createTask-heading'>Create New Task</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='add-task'></label>
                <input onChange={handleChange} type='text' id='add-task' name='add-task' />
                <input id='submit-btn' type="submit" value='Create' />
            </form>
        </div>
    );
};

export default CreateTask;