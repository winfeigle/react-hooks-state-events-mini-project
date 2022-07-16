import React from "react";
import Task from "./Task";


function TaskList( {tasks, onDeleteTask}) {

  const taskListItems = tasks.map(task => {
    return <Task 
      key={task.text} 
      category={task.category} 
      text={task.text} 
      onDeleteTask={onDeleteTask}
      />
  });

  return (
    <div className="tasks">
      {taskListItems}
    </div>
  );
}

export default TaskList;
