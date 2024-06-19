import React from 'react'
import InputMask from 'react-input-mask';

const InputModal = ({name,type,mask,onChange,onBlur,value}) => {

    const formattedValue = value ? (value.replace(/\D/g, '') / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : '';

    return(
        <div className='container_input_modal'>
        <label>{name}</label>
        {type == "money" 
        
        ?
        <InputMask onBlur={onBlur} mask={mask} maskChar={false} onChange={onChange} value={formattedValue} type={type} className='input_modal'/>    
        :
        <InputMask onBlur={onBlur} mask={mask} maskChar={false} onChange={onChange} value={value} type={type} className='input_modal'/>

        }
        </div>        
    )
}

export default InputModal