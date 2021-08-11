import React  from 'react';
import { useState } from 'react';
import Styles from  '../MyComponents/Add.module.css'
export const AddTodolist = (props) => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
          props. addtodos(title, desc);
          
        }
    }
    return (
        <div className="container my-3">
            <form onSubmit={submit}>
            <div className="mb-3" >
        <input type="text"  placeholder="Add Todo title" onChange={(e) => setTitle(e.target.value)} className={Styles.Addto} id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Add todo description" className={Styles.Add}onChange={(e) => setDesc(e.target.value)} id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
export default AddTodolist;