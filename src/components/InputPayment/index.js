import React from 'react'
import InputMask from 'react-input-mask';

import style from './style/style.css'
const InputPayment = ({name,value,onChange,onBlur,mask,id}) => {
    return(

        <div className='container_input_payment'>
            <InputMask mask={mask} onBlur={onBlur} onChange={onChange} value={value} maskChar={false} type='text' name={id} id={id} required={true}/>
            <label htmlFor={id}>{name}</label>
        </div>

    )
}

export default InputPayment