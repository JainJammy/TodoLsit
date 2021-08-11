import React from 'react'
import {TodoItem} from '../MyComponents/TodoItem'
import Styles from '../MyComponents/Todos.module.css'
export const Todos = (props) => {
    return (
       <> 
       <div className="container-fluid">  
    
       {props.todos.length===0? <span className={Styles.text}> No Lists to display</span>:
        props.todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/>
        })
    }
        </div>
    </>
    )
}
export default Todos;