import { useState } from 'react'
import {v4 as uuid } from "uuid";
import './App.css'

function App() {
  const [todo, setTodo]= useState();
  const [todoList, setTodoList]=useState([]);

  const onTodoInputChange = (e)=>{
    setTodo(e.target.value);
}

const onAddTodo = ()=> {
  setTodoList([...todoList,{id: uuid(), todo: todo, isCompleted:false}]);
  setTodo('');

}
const onDeleteClick = (id)=>{
const updatedTodoList = todoList.filter(todo=> todo.id !== id);
setTodoList(updatedTodoList);
}
const onTodoCheckChange = (id)=>{
  const updatedTodoList=todoList.map(todo=>todo.id == id? {...todo, isCompleted: !todo.isCompleted}:todo);
  setTodoList(updatedTodoList);
}
  return (
    
    <div className="App">
      <h1>My Wishlist App</h1>
     <div>
      <input value={todo} onChange={onTodoInputChange} placeholder="Add your wishlist here"></input>
      <button onClick={onAddTodo}>Add</button>
     </div>
     <div>
      {
        todoList?.length > 0 &&  todoList.map(todo => (
          <div key={todo.id}>
            <label>
              <input  type="checkbox" checked={todo.isCompleted} onChange={()=> onTodoCheckChange(todo.id)}></input>
              <span className={todo.isCompleted ? 'strike-through' : ''}>{todo.todo}</span>
            </label>
            <button onClick={()=>onDeleteClick(todo.id)}>Delete</button>
          </div>
        ))
      }
     </div>
    
    </div>
     
    
  )
}

export default App

