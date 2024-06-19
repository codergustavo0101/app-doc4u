import React from 'react'
import style from './styles/style.css'

const InputLogin = ({name,type, onChange }) => {
    return (

        <div className='container_input_login'>
            <label>{name}</label>
            <input type={type} onChange={onChange} />
        </div>
    )
}

export default InputLogin