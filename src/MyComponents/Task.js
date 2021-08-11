import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom'
import Styles from '../MyComponents/data.module.css'
import { useHistory } from 'react-router';
import Addtodolist from '../MyComponents/Addtodolist'
import {Todos} from '../MyComponents/Todos'
import {Todoitem} from './TodoItem'
import {TodoList} from '../MyComponents/TodoList';
export const Task = () => {  

return(
  <>
  <TodoList/>
    
  </>
);
/*const [students,setstudents]=useState([]);
useEffect(()=>{
getAllStudent();
})
async function getAllStudent(){
   try{
    const students=await axios.get("http://localhost:2222/students")
   console.log(students.data);
   setstudents(students.data);
   } 
   catch(error)
   {
       console.log("Somethng is worng");
   }
}*/ 
/*const addTodo=(title, desc)=>{
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
let history=useHistory(); 
    return (
      <>  
     {todos.map((student)=>{
      return(
       <>
      <div className={Styles.dataset}> 
         <span key={student.sno} className={Styles.data}> {student.id}</span>
       </div>
       <div className={Styles.datadisplay}>
         <span key={student.sno} className={Styles.datadisp}>{student.stuname}</span>
       </div>
       <div className={Styles.datadisplays}>
         <span key={student.sno} className={Styles.datadisps}>{student.state}</span>
       </div>
       <div>
       <button type="button" className="btn btn-danger" className={Styles.btn} onClick={onDelete}>Delete</button>
      </div>
       </>   
      )  
      
      })
      }
      <Addtodolist addtodos={addTodo}/>
      </>
    )
}*/
}
export default Task;