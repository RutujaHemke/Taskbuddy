export default function Tasklist({tasks, updateTask, deleteTask}) {
    
    const toggelComplete = (index) => {
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTask, index);
    }


    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                <div>
                    <span>{task.text}
                        <small>({task.priority} , {task.category})</small>
                    </span>
                </div>

                <div>
                    <button onClick={() => toggelComplete(index)}>
                        {task.completed ? "Undo" : "Completed"}</button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
            </li>
            ))}; 
        </ul>
    )
}