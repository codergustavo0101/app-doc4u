import React from 'react'
import InputMask from 'react-input-mask';

import style from './style/style.css'
const InputSelectPayment = ({name,onChange,data,id}) => {
    return(

        <div className='container_input_payment_select'>
            <select onChange={onChange} required>

            {data 
            
            ?
       
            data.map(item => {
                return(
                    <option value={item.sigla}>{item.nome}</option>
                )
            })
            :
            <></>
            }
       
            </select>
            <label htmlFor={id}>{name}</label>
        </div>

    )
}

export default InputSelectPayment