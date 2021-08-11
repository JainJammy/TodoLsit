import React from 'react'
import Styling from '../MyComponents/selectstate.module.css'
export const Informationcomponent = (props) => {
    return (
        <>
        <h1 className={Styling.text} >{props.valus}</h1>
        </>
    )
}
export default Informationcomponent;