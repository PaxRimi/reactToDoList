import React from 'react'

const toDos = ({todo, deleteElement}) => {
    const toDoList = todo.length ? (
        todo.map(task => {
            return <div className="collection-item" key={task.id}>
                <span>{task.content}</span>
                <button style={{marginLeft: "20px"}} onClick={() => {deleteElement(task.id)}}>Delete</button>
            </div>
        })
    ) : (<p className="center">Nothing to do left for you, congratulations</p>);

    return(
        <div className="todos collection">
            {toDoList}
        </div>
    )
};

export default toDos;