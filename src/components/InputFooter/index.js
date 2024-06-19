import React from 'react'
import style from './style/style.css'
const InputFooter = ({name,image,placeholder}) => {
    return(

        <div className='container_input'>
        <label>{name}</label>
        <input placeholder={placeholder} type='text'/>
        <img src={image}/>
        </div>
    )
}

export default InputFooter