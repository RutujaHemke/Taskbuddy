import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";


function App() {
  const [tasks, setTasks] = useState([]); 

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task) => {
      setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
      const newTask = [...tasks];
      newTask[index] = updatedTask;
      setTasks(newTask);
  };

  const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index));
  };

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    

    <div id="container">
      <h1>Task Buddy</h1>
      <p>Our friendlly Task Manager</p> 
      <div id="box">
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks}
        updateTask={updateTask}  deleteTask={deleteTask}/>
      <Progresstracker tasks={tasks}/>
      {tasks.length > 0 && 
      (<button onClick={clearTasks} className="clear-btn">Clear all task</button>)}
      </div>
    </div>
  )
}

export default App;
