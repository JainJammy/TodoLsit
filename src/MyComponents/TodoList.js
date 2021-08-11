import React from 'react'
import {Todos} from '../MyComponents/Todos';
import {TodoItem} from './TodoItem'
import { useState } from 'react';
import { AddTodo } from '../MyComponents/AddTodo';
export const TodoList = () => {
const onDelete=(todo)=>{
     setTodos(todos.filter((e)=>{
    return e!==todo;
    
}));
}   
const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

const[todos,setTodos] =useState([
        {
          sno :1,
          Id:"1",
          Name : "Raj",
          State : "False"
        },
        {
          sno :2,
          Id:"2",
          Name : "Ramesh",
          State : "False"
        },
        {
          sno :3,
          Id:"3",
          Name : "Vikas",
          State : "False"
        },
      ]);
      return (
        <>
        <AddTodo addTodo={addTodo} />
        <Todos todos = {todos} onDelete={onDelete}  />
        </>
      );
}
export default TodoList;
