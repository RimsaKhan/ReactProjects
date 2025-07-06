import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList(){
   let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4()}]);
   let [newTodo,setNewTodo]=useState("");
   let addNewTask=()=>{
   setTodos((prevTodos)=>{
    return[...prevTodos,{task:newTodo,id:uuidv4()}]
   });
   setNewTodo("");
   };
   let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);
   };
   //for deleting all the inputs
   let deleteTodo=(id)=>{
    setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id !=id));
   }
  let upperCaseAll = () => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) => ({
      ...todo,
      task: todo.task.toUpperCase(),
    }))
  );
};
//for deleting only one inputs
let upperCaseOne = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      } else {
        return todo;
      }
    })
  );
};
   return (
    <div>
        <input placeholder="add a task" value={newTodo}onChange={updateTodoValue}></input>
        <button onClick={addNewTask}>Add Task</button>
        <br></br><br></br>
        <h4>Task Todo</h4>
        <ul>
          {todos.map((todo)=>(
            <li key={todo.id}>
                <span>{todo.task}</span>
                &nbsp; &nbsp; &nbsp; 
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                <button onClick={()=>upperCaseOne(todo.id)}>UpdateCase</button>
            </li>
          ))}  
        </ul>
        <button onClick={upperCaseAll}>Uppercase all</button>
    </div>
    );
}