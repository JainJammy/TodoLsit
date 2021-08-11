import React from 'react'
import Styles from '../MyComponents/Todos.module.css'
export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className={Styles.dataset} >
         <div className={Styles.Id}>   
        <span>{todo.Id}</span>
        </div>
        <div className={Styles.Name}>
        <span>{todo.Name}</span>
        </div>
        <div className={Styles.State}>
         <span>{todo.State}</span>   
        </div> 
        <div className={Styles.bt}>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        </div>
        </>
    )
}
export default TodoItem;