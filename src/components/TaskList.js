import React from 'react';

const TaskList = (props) => {
    return (
        <div>
            <h2>Current Tasks:</h2>
            {props.taskList.map(task => {
                return (
                    <section>
                        <input type='checkbox' />
                        <label>{task}</label>
                    </section>
                )
            })}
        </div>
    );
};

export default TaskList;