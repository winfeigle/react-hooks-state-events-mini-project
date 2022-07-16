import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  
  const onFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const onDeleteTask = (text) => {
    setTasks(tasks.filter(task => {
      return task.text !== text;
    }))
  }

  const visibleTasks = tasks.filter(
    task => category === "All" || task.category === category
  );
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectedCategory={setCategory}
        />
      <NewTaskForm 
        categories={CATEGORIES.filter((category) => category !== "All")}
        onFormSubmit={onFormSubmit}
        />
      <TaskList 
        tasks={visibleTasks} 
        onDeleteTask={onDeleteTask}
        />
    </div>
  );
}

export default App;
