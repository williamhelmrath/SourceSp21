import React, { useState } from "react";

export default function App() {
  //Need state for list of tasks

  //Need state for the current value of each text input

  //Need a function to add a task to the task list
  const handleAdd = () => {};

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* All of the text fields and their labels should go here */}

      <button onClick={handleAdd}>Add Todo Item</button>

      {/* All of the tasks should render here. How can we transform the 
      list of tasks into a list of components? */}
    </div>
  );
}

//This is a component that will be reused to represent each individual task.
//What props does each task need?
const TodoItem = ({}) => {
  //Need state to represent whether the task is checked off or not

  //Need a function to toggle whether the task is checked off or not
  const handleCheckOff = () => {};

  //Need a function to delete the task from the todo list
  //Keep in mind that this function needs to access and modify
  //the state of the App component. Is there a way to access these
  //values inside of TodoItem?
  const handleDelete = () => {};

  return (
    <div>
      {/* The title, description, and due date should appear here. 
        Remember that what you want to display changes based on whether 
        the task is checked off or not */}
      <button onClick={handleCheckOff}>Check off</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
