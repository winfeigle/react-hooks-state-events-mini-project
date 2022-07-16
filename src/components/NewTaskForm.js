import React, {useState} from "react";

function NewTaskForm({categories, onFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")


  const handleSubmit = (e) => {
    e.preventDefault()
    onFormSubmit({ text, category});
    setText("")
    setCategory("Code");
  }

  const categoryOptions = categories.map(category => {
    return <option key={category}>{category}</option>;
  });


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}>
            {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
